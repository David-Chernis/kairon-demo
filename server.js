require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(express.static(path.join(__dirname, "public")));

const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const OPENAI_KEY = process.env.OPENAI_API_KEY;

const SYSTEM_PROMPT = `You are a clinical documentation assistant for a psychiatric practice.
Generate three documents from the session transcript. Respond as JSON with this exact structure:

{
  "clinical_note": {
    "diagnosis": "ICD-10 code and description",
    "summary": "3-4 sentence session summary",
    "interventions": "Interventions performed",
    "next_appointment": "Suggested follow-up",
    "medication": "Current medication or 'No change'",
    "confidence": 97
  },
  "insurance_form": {
    "form_type": "PTV 11 — Psychotherapy application",
    "patient_data": "Name, DOB, insurer, ID number",
    "diagnosis": "ICD-10 diagnosis",
    "sessions_requested": "Therapy type and session count",
    "signature": "⚠ Manual signature required",
    "confidence": 94
  },
  "referral_letter": {
    "recipient": "Recipient with address",
    "subject": "Subject line",
    "summary": "2-3 sentence clinical summary for recipient",
    "urgency": "Elective or Urgent",
    "confidence": 91
  }
}

Write in professional medical language. Use realistic clinical details based on the transcript.`;

// Try Ollama first, then OpenAI, then fallback
async function generateDocs(transcript, patient, insurance) {
  const userMsg = `Patient: ${patient}\nInsurance: ${insurance}\n\nSession transcript:\n${transcript}`;

  // 1. Try Ollama (local)
  try {
    const resp = await fetch(`${OLLAMA_URL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3:8b",
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
      const docs = JSON.parse(data.message.content);
      console.log("Generated via Ollama (local)");
      return docs;
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
  res.json({
    ollama,
    openai: !!OPENAI_KEY,
    fallback: true,
    backend: ollama ? "Ollama (local)" : OPENAI_KEY ? "OpenAI" : "Fallback"
  });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Kairon demo: http://localhost:${PORT}`));
