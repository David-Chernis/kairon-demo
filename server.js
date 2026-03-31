require("dotenv").config();
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(express.static(path.join(__dirname, "public")));
const upload = multer({ dest: "uploads/" });

const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const OPENAI_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `You are a clinical documentation assistant for a psychiatric practice.
Generate three documents from the session transcript. Respond ONLY with valid JSON using this exact structure. Use plain ASCII characters only (no special unicode characters like em-dashes or warning symbols). Use -- instead of em-dash and WARNING: instead of warning emoji.

{
  "clinical_note": {
    "diagnosis": "ICD-10 code -- description (e.g. F33.1 -- Recurrent depressive disorder, current moderate episode)",
    "summary": "3-4 sentence session summary based on what was discussed",
    "interventions": "List the specific therapeutic interventions used in the session",
    "next_appointment": "Suggested follow-up date and time",
    "medication": "Current medication with dosage, or No change",
    "confidence": 97
  },
  "insurance_form": {
    "form_type": "PTV 11 -- Psychotherapy application",
    "patient_data": "Full patient name, DOB, insurer name, insurance ID number",
    "diagnosis": "ICD-10 code -- description",
    "sessions_requested": "Therapy type and number of sessions requested (e.g. CBT, 24 sessions x 50 min)",
    "signature": "WARNING: Manual signature required",
    "confidence": 94
  },
  "referral_letter": {
    "recipient": "Full name and title of the receiving doctor, with specialty and address",
    "subject": "Referral subject line with patient name and reason",
    "summary": "2-3 sentence clinical summary explaining why the referral is needed",
    "urgency": "Elective or Urgent, with timeframe",
    "confidence": 91
  }
}

Important rules:
- Fill in ALL fields with realistic clinical content based on the transcript
- Use the patient name and insurance details provided
- Write in professional medical language
- Infer the most likely ICD-10 diagnosis from the symptoms described
- Do NOT use placeholder text like [private] or [unknown] -- make reasonable clinical inferences`;

// Try Ollama first, then OpenAI, then fallback
async function generateDocs(transcript, patient, insurance) {
  const userMsg = `Patient: ${patient}\nInsurance: ${insurance}\n\nSession transcript:\n${transcript}`;

  // 1. Try Ollama (local)
  try {
    const resp = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OLLAMA_MODEL || "llama3.1:8b",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMsg }
        ],
        format: "json",
        stream: false
      })
    });
    if (resp.ok) {
      const data = await resp.json();
      const raw = data.message.content;
      try {
        const docs = JSON.parse(raw);
        // Validate it has the expected keys
        if (docs.clinical_note && docs.insurance_form && docs.referral_letter) {
          console.log("Generated via Ollama (local)");
          return docs;
        }
        console.log("Ollama returned incomplete JSON, falling through");
      } catch (parseErr) {
        console.log("Ollama returned invalid JSON, falling through:", parseErr.message);
      }
    }
  } catch (e) {
    console.log("Ollama not available:", e.message);
  }

  // 2. Try OpenAI
  if (OPENAI_KEY) {
    try {
      const OpenAI = require("openai");
      const openai = new OpenAI({ apiKey: OPENAI_KEY });
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        temperature: 0.3,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMsg }
        ]
      });
      const docs = JSON.parse(completion.choices[0].message.content);
      console.log("Generated via OpenAI");
      return docs;
    } catch (e) {
      console.log("OpenAI error:", e.message);
    }
  }

  // 3. Fallback
  console.log("Using fallback content");
  return null;
}

const FALLBACK = {
  clinical_note: {
    diagnosis: "F33.1 — Recurrent depressive disorder, current moderate episode",
    summary: "Patient reports worsening sleep disturbances with frequent early-morning awakenings around 3 AM. Concentration impairment at work and depressed mood persist. No suicidal ideation. Slight improvement from previous week's activity log.",
    interventions: "Sleep hygiene psychoeducation. Structured sleep diary introduced. Continued behavioural activation with expanded activity protocol. Cognitive restructuring of work-related performance expectations discussed.",
    next_appointment: "07 Apr 2026 · 11:00 AM",
    medication: "Sertraline 100 mg/d unchanged · Consultation with Dr. Hoffmann (psychiatry) regarding possible dose adjustment recommended",
    confidence: 97
  },
  insurance_form: {
    form_type: "PTV 11 — Psychotherapy application",
    patient_data: "Schmidt, Klaus · DOB 14.03.1968 · AOK Bayern · ID A123456789",
    diagnosis: "F33.1 — Recurrent depressive disorder, current moderate episode",
    sessions_requested: "CBT (Short-term therapy II) · 24 sessions × 50 min · Extension application",
    signature: "⚠ Manual signature required",
    confidence: 94
  },
  referral_letter: {
    recipient: "Dr. med. Anna Hoffmann · Specialist in Psychiatry · Maximilianstr. 22 · 80539 Munich",
    subject: "Consultation request — Schmidt, Klaus · DOB 14.03.1968 · Medication adjustment",
    summary: "Patient has been in outpatient CBT for 6 months for recurrent depressive disorder (F33.1). Persistent sleep disturbances and concentration issues under sertraline 100 mg/d. Requesting psychiatric consultation regarding dose adjustment or augmentation strategy.",
    urgency: "Elective · within 4 weeks",
    confidence: 91
  }
};

app.post("/api/generate", async (req, res) => {
  const { transcript, patient, insurance } = req.body;
  if (!transcript) return res.status(400).json({ error: "No transcript" });

  const docs = await generateDocs(
    transcript,
    patient || "Schmidt, Klaus · DOB 14.03.1968",
    insurance || "AOK Bayern"
  );

  res.json(docs || FALLBACK);
});

// --- Transcribe audio via local Whisper ---
const WHISPER_URL = process.env.WHISPER_URL || "http://localhost:8787";

app.post("/api/transcribe", upload.single("audio"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No audio file" });

  try {
    // Send to local whisper-server.py
    const audioData = fs.readFileSync(req.file.path);
    const resp = await fetch(`${WHISPER_URL}/transcribe`, {
      method: "POST",
      headers: { "Content-Type": "application/octet-stream" },
      body: audioData,
    });
    const data = await resp.json();
    fs.unlinkSync(req.file.path);

    if (data.error) throw new Error(data.error);
    console.log("Transcribed via local Whisper:", data.text?.substring(0, 80));
    res.json({ transcript: data.text });
  } catch (err) {
    console.log("Whisper error:", err.message);
    if (req.file?.path) try { fs.unlinkSync(req.file.path); } catch(e) {}
    res.status(500).json({ error: err.message });
  }
});

// Health check — reports which backend is available
app.get("/api/status", async (req, res) => {
  let ollama = false;
  try {
    const r = await fetch(`${OLLAMA_URL}/api/tags`);
    if (r.ok) {
      const data = await r.json();
      ollama = data.models?.some(m => m.name.includes("llama")) || false;
    }
  } catch (e) {}
  let whisper = false;
  try {
    const wr = await fetch(`${WHISPER_URL}/transcribe`, { method: "OPTIONS" });
    whisper = wr.ok;
  } catch (e) {}
  res.json({
    ollama,
    whisper,
    openai: !!OPENAI_KEY,
    fallback: true,
    backend: ollama ? "Ollama (local)" : OPENAI_KEY ? "OpenAI" : "Fallback",
    transcription: whisper ? "Whisper (local GPU)" : "Simulated"
  });
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Kairon demo: http://localhost:${PORT}`));
