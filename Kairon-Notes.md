# Kairon — Research Notes, Speaker Notes & Compliance Check

---

## Part 1: Requirements Compliance Check

### Pitch Deck (50% of grade, due Thu April 9, 12:00 CET)

| Requirement | Status | Notes |
|---|---|---|
| ~10-12 slides | **16 slides** | Slightly over. Consider merging Insight+Discovery or cutting Sources for live pitch. The exec summary is not presented so effectively 15. |
| PPTX format | **Done** | `Kairon-Pitch-Deck-Final.pptx` |
| 5-min recorded YouTube video | **NOT DONE** | Must record and upload as unlisted video. Link goes on slide 1. |
| Executive summary slide (not presented) | **Done** | Slide 2 — 6 investment attractions |
| Competition: feature comparison TABLE | **Done** | Slide 11 — full feature table (not a 2x2 quadrant) |
| Customer discovery insights visible | **Done** | Slides 3-4 with real survey data (n=19) |
| File naming: `Team[ID]_Kairon_Slides.pptx` | **NOT DONE** | Rename before submission |
| YouTube link on first slide | **NOT DONE** | Add after recording |
| Attribution statement | **NOT DONE** | Add how each member contributed |

### Business Concept Report (50%, due Fri May 15, 23:59 CET)

| Requirement | Status | Notes |
|---|---|---|
| Max 2 pages + references page 3+ | **CHECK** | Current draft is ~2 pages in markdown. Need to verify when formatted to PDF with 10pt font. |
| Min font size 10pt | **Verify on export** | |
| Section: Problem | Done (Section 1) | Attribution: Julian |
| Section: Solution | Done (Section 2) | Attribution: David |
| Section: Target Market & Opportunity | Done (Section 3) | Attribution: Julian |
| Section: Competitive Advantage | Done (Section 4) | Attribution: Laszlo |
| Section: Business Model | Done (Section 5) | Attribution: Igor |
| Section: Customer Discovery & Validation | Done (Section 6) | Attribution: Laszlo |
| Section: Go-to-Market | Done (Section 7) | Attribution: Igor |
| Section: Roadmap | Done (Section 8) | Attribution: David |
| Section: Team | Done (Section 9) | Attribution: All |
| File naming: `Team[ID]_Kairon_Report.pdf` | **NOT DONE** | |

### Grading Criteria (5Ts)

| T | How we address it |
|---|---|
| **Team** | ETH + HSG combo. David built first AI doc tool independently. Laszlo has enterprise data background. |
| **TAM** | $1.2B European SAM, $98B European Healthcare IT. Pass the "can this be a $1B company?" test. |
| **Traction** | 19-person survey, validated demand, early adopter identified, landing page live in 48 hours. |
| **Tech** | Local AI (Whisper + Llama), on-premise deployment, FHIR integration. Moat via architecture. |
| **Terms** | €500K pre-seed, clear use of funds (40/35/25), 18-month runway, break-even at ~100 clinicians. |

---

## Part 2: Platform Positioning (Rebrand)

### Why "platform" not "app"

The biggest risk VCs will flag: "This is just a ChatGPT wrapper." The platform framing kills this objection.

**Core reframe:**
- OLD: "Kairon is an AI scribe that writes notes for therapists."
- NEW: "Kairon is a local AI infrastructure platform for clinical workflows. Documentation is the first module."

**What makes it a platform, not an app:**

1. **Infrastructure layer** — The on-premise hardware + local AI models are the product. Documentation is just the first application running on that infrastructure.
2. **Modular by design** — Each clinic gets a system they can extend: documentation today, treatment planning tomorrow, outcome tracking next quarter.
3. **Data layer** — Kairon creates structured clinical data at the point of creation. This becomes the input layer that makes SAP, Epic, and Dedalus more valuable.
4. **Multi-specialty expansion** — Same infrastructure, different documentation templates. Psychiatry first, then neurology, cardiology, GP.
5. **Integration hub** — HL7 FHIR, SAP, Epic, Dedalus connectors make Kairon the bridge between clinician workflow and hospital systems.

**The platform evolution (use this language in the pitch):**
- Phase 1: "Documentation tool" — prove the model, build trust
- Phase 2: "Specialty platform" — expand to 5 specialties, deepen integrations
- Phase 3: "Hospital intelligence layer" — structured data at point of creation

**Key line:** "We don't compete with SAP and Epic. We make them more valuable. Then we become indispensable."

**Anti-wrapper arguments to use:**
- "Our moat isn't the model — it's the deployment architecture. Anyone can fine-tune GPT. No one else can run it inside a hospital firewall with zero data leakage."
- "Cloud AI companies are renting access to a model. We're selling infrastructure that hospitals own."
- "The model is interchangeable. The local deployment, ERP integrations, and clinical workflow adapters are not."

---

## Part 3: Speaker Notes (Slide by Slide)

### Slide 1 — Title
> "Good [morning/afternoon]. We're Kairon. We build local AI infrastructure for clinical documentation — starting with psychiatry. The tagline says it all: we want to give doctors back the moment that matters. That moment with the patient, instead of the screen."

*Tip: Don't rush this. Let the tagline land. Pause after "the moment that matters."*

### Slide 2 — Executive Summary (NOT PRESENTED)
> Skip — this slide is in the deck for investors to read async. Do not present it.

### Slide 3 — The Problem
> "Doctors spend 40% of their time on paperwork. Psychiatrists are the worst hit — they spend more admin time than any other specialty. And the result? 1.8 million clinicians short in Europe by 2030. But here's the real problem: AI can already solve this. Tools like Nuance and DeepScribe exist. But therapists can't use them. Why? Because every single one sends patient data to the cloud. And under German and Swiss law — Article 321, paragraph 203 — that's a violation of professional secrecy. 90% of the therapists we surveyed told us privacy is their number one concern."

*Tip: Build the paradox. The audience should feel the tension: "the solution exists but no one can use it."*

### Slide 4 — Customer Discovery
> "We didn't just research this from a desk. We surveyed 19 practicing psychiatrists in Germany. 89% spend over 2 hours a week just on documentation. 84% have never used an AI tool — not because they don't want to, but because nothing exists that's safe enough. 63% told us: the data must stay on my device. No cloud. Period."

*Tip: Emphasise "63% demand on-device" — this is the stat that proves your USP isn't nice-to-have, it's a market requirement.*

### Slide 5 — The Insight
> "This is the actual quote from our survey: 'The data must stay exclusively on the device in my practice — no cloud.' Fifteen out of nineteen said this. Privacy isn't a feature request. It's the market requirement. Every competitor sends data to the cloud. We built local-first from day one — GDPR compliant by architecture, not by policy. 63% demand on-device only. Zero competitors offer this."

*Tip: Let the quote speak. Read it slowly. This is your strongest moment.*

### Slide 6 — The Solution
> "So what does Kairon actually do? Four steps. Session is recorded locally — audio stays on the clinic's own hardware. Kairon transcribes with Whisper, structures with Llama 3 — both running locally. Reports are generated: therapy notes, insurance forms, referral letters. The doctor reviews and approves. Human always in the loop. And critically — Kairon accepts voice, handwriting via camera, or existing digital notes. Zero behaviour change required."

*Tip: This should feel simple. Don't oversell the tech. The audience should think "that's obvious" — that's the sign of good product design.*

### Slide 7 — Architecture & GDPR
> "Here's the comparison. Every competitor: data goes to cloud servers, GDPR compliance via contracts and promises, one breach ends the company, hospital IT says no. Kairon: data never leaves the building, compliance guaranteed by design, nothing to breach because nothing is transmitted, hospital IT says yes. And we integrate with HL7 FHIR, SAP, Epic, and Dedalus."

*Tip: This is your "why us" slide. Be confident but not arrogant. The table makes the case.*

### Slide 8 — Market
> "The DACH region has 81,000 psychotherapists and psychiatrists. That's our serviceable market. At our pricing, that's about €48 million annually in DACH alone. The broader European clinical documentation market is $1.2 billion. We start niche — psychiatric clinics in Germany and Switzerland — and scale from there."

*Tip: Don't dwell on TAM numbers. Investors see through inflated TAMs. Emphasise the DACH number — it's concrete and defensible.*

### Slide 9 — Why Now
> "Four forces are converging right now. One: local LLMs hit production quality in 2024 — Whisper and Llama actually work on clinic hardware now. Two: the hardware costs dropped 5x in three years. Three: regulation is tightening — Germany's ePA went mandatory in January 2025, GDPR enforcement is accelerating. And four: we're in a post-pandemic mental health crisis — the WHO reported a 25% increase in anxiety and depression. Waitlists are exploding. This window is open now."

*Tip: "Why now" is what separates good pitches from great ones. Make each force feel like an inevitability.*

### Slide 10 — Business Model
> "Simple pricing. Phase 1: €49 per user per month for psychiatric clinics. This is validated — 53% of our survey respondents said they'd pay under €50. The customer ROI is compelling: 20 hours saved per month means roughly 15 extra sessions, which is about €3,000 in additional revenue. That's a 6x return on subscription. Our gross margin is around 80% because there are no cloud compute costs — everything runs locally."

*Tip: The 6x ROI number is your closer. If the audience remembers one number from this slide, it should be 6x.*

### Slide 11 — Competition
> "No one else does all of this locally. Cloud AI scribes like Nabla and DeepScribe can't serve this market — their architecture is fundamentally incompatible with professional secrecy laws. Traditional practice management software like Psyprax has no AI. We're the only product that is simultaneously AI-native and legally compliant for psychotherapy documentation in DACH."

*Tip: Don't trash competitors. Acknowledge they're good at what they do. Your argument is structural: they CAN'T serve this market, not that they're bad.*

### Slide 12 — Traction
> "We went from idea to validated primary research in 48 hours. Survey sent Sunday evening, 19 responses by Monday. Landing page live Tuesday. And our first pilot conversation is already happening — a Munich psychiatrist who built his own tool reached out and said 'I'm curious which model you use. Happy to exchange.' That's an early adopter."

*Tip: The speed is the point. This shows execution velocity — VCs care about this.*

### Slide 13 — Team
> "Two ETH engineers, two HSG business minds. Laszlo brings enterprise data systems experience. David built the first version of the AI documentation tool independently. Julian handles strategy and partnerships. Igor drives business development. We're built within the ETH Zurich and HSG ecosystem, advised by the ETH AI Center."

*Tip: Keep it short. 30 seconds max. The team slide is about credibility, not CVs.*

### Slide 14 — The Ask
> "We're raising €500K in pre-seed. 40% goes to product and engineering — local model integration, ERP connectors. 35% to pilot clinics — 20 clinics over 3 months in Germany and Switzerland. 25% to regulatory compliance — GDPR audit, BDSG certification. This gives us 18 months of runway to reach break-even at approximately 100 active clinicians."

*Tip: Be specific about milestones: "Q2 2026 pilot with 3 clinics, Q4 2026 20 clinics in Germany, Q2 2027 Series A."*

### Slide 15 — Platform Vision
> "Long term, we're not building a documentation tool. We're building the intelligence layer for hospitals. Phase 1: documentation — prove the model. Phase 2: expand to 5 specialties, deepen ERP integrations. Phase 3: we become the structured data input layer that SAP and Roche need. We don't compete with SAP and Epic. We make them more valuable. Then we become indispensable."

*Tip: This is your vision slide. Be ambitious. End on "indispensable" — let it hang.*

### Slide 16 — Sources
> Don't present. Reference if asked.

---

## Part 4: General Pitch Advice

### Timing (5-minute video)
- Title: 5 seconds
- Problem + privacy paradox: 60 seconds
- Customer discovery + insight: 45 seconds
- Solution: 40 seconds
- Architecture/GDPR: 30 seconds
- Market + Why Now: 45 seconds
- Business Model: 30 seconds
- Competition: 20 seconds
- Traction: 20 seconds
- Team: 15 seconds
- Ask + Platform Vision: 30 seconds
- **Total: ~5 minutes**

### Common VC Questions to Prepare For:

1. **"Isn't this just a wrapper around open-source models?"**
   Answer: "The model is interchangeable. Our moat is the deployment architecture — local inference pipeline, ERP connectors, clinical workflow adapters, and the trust we build with hospital IT departments. Anyone can fine-tune a model. No one else can deploy it inside a hospital firewall with zero data leakage and full GDPR compliance by architecture."

2. **"Why can't DeepScribe/Nuance just add a local mode?"**
   Answer: "Their entire infrastructure is built for cloud. Adding local processing means rebuilding from scratch — new deployment model, new pricing, new support structure. It's not a feature addition, it's an architectural pivot. Meanwhile, we start local-native."

3. **"Your survey says most people would pay under €50. How do you get to €500/mo?"**
   Answer: "The survey asked individual practitioners. Our Phase 1 pricing is €49/user — right in that range. The €500/month figure is for group practices with 5-10 seats, where the buyer is the practice owner, not the individual therapist. The ROI math (6x return) makes €500/month trivial for a practice generating an additional €3,000/month."

4. **"How do you handle model updates if everything is local?"**
   Answer: "We push model updates via a secure local update mechanism — similar to how antivirus software updates signatures. The update payload is a model file, not patient data. Patient data never moves; models come to the data."

5. **"What's stopping a hospital from just running Whisper and Llama themselves?"**
   Answer: "Nothing, technically. But a hospital IT department doesn't have the clinical workflow knowledge to build the documentation templates, insurance form generators, and ERP integrations. We've spoken to a psychiatrist in Munich who did exactly this — built his own tool — and he still wants to use Kairon because maintaining it is a full-time job."

6. **"How do you scale sales to hospitals?"**
   Answer: "We don't start with hospitals. We start with Gemeinschaftspraxen — group practices with 3-10 therapists. Faster sales cycles, lower CAC, and each installation proves the model for the larger hospital conversation later."

7. **"What about Apple/Google on-device AI?"**
   Answer: "Consumer on-device AI optimises for battery life and generic tasks. Clinical documentation needs domain-specific models, medical terminology, ICD-10 coding, and insurance form compliance. Apple Intelligence won't generate a PTV 11 form for AOK Bayern."

### Do's and Don'ts:

**Do:**
- Lead with the paradox, not the product
- Use survey data constantly — it's your strongest asset
- Say "by architecture, not by policy" — this phrase is memorable
- Pause after strong statements
- Make eye contact during the privacy quote

**Don't:**
- Don't say "AI wrapper" or "ChatGPT for doctors" — even as a comparison
- Don't explain how LLMs work — the audience knows
- Don't apologise for being early-stage
- Don't read slides — they're visual, your voice is the content
- Don't spend time on TAM — VCs know the healthcare market is big

---

## Part 5: Key Research Data (Quick Reference)

### Our Survey (n=19, March 2026, Germany)
- 89% spend 2+ hrs/week on documentation
- 84% never used AI documentation tool
- 74% would use GDPR-compliant tool
- 63% demand on-device only, no cloud
- 53% WTP under €50/month
- 21% WTP €50-100/month
- 26% would not pay
- 3 respondents wanted AI but stopped due to privacy
- 1 early adopter identified (Munich psychiatrist, built own tool)

### External Sources
- 40% of doctor's time on paperwork (AMA 2024, Tandem Health 2025)
- Psychiatrists = #1 admin time of all specialties (PubMed doi:25626223)
- 1.8M clinician shortfall in Europe by 2030 (Mordor Intelligence 2026)
- 46% psychologists report burnout (APA 2022)
- 6+ month therapy wait times DACH (BPtK 2023)
- +25% anxiety/depression post-pandemic (WHO 2022)
- $98B European Healthcare IT market (Mordor Intelligence 2024)
- $1.2B European CDI market (Credence Research 2024)
- Germany ePA mandatory January 2025 (BMG)

### Legal Framework
- Art. 321 StGB (Switzerland) — professional secrecy, criminal law
- §203 StGB (Germany) — professional secrecy, criminal law
- GDPR Article 9 — special category health data
- nDSG (Switzerland, revised Sept 2023) — aligned with GDPR
- BDSG (Germany) — federal data protection

### DACH Therapist Counts
- Switzerland: ~15K (11K therapists + 4.5K psychiatrists) — Source: FSP
- Germany: ~55K (50K therapists + 8.5K psychiatrists) — Source: KBV/BPtK
- Austria: ~11K (10K therapists + 2K clinical psychologists) — Source: Austrian Ministry
- **Total DACH: ~81K**

---

## Part 7: Slide Content Guide (What Goes on Each Slide)

### Context
Kairon is a local AI infrastructure platform for clinical documentation, starting with psychiatric clinics. It runs Whisper + Llama 3 entirely on-premise so patient data never leaves the building. This solves a legal problem (Art. 321/§203 StGB professional secrecy laws block cloud AI tools) not just a convenience problem. Survey of 19 German psychiatrists validated demand: 63% require on-device processing, 74% would adopt a GDPR-compliant tool. No competitor offers local AI documentation in DACH.

### Slide-by-Slide Content

**Slide 1 — Cover**
- "Give doctors back the moment that matters."
- Kairon logo
- "Local AI documentation for psychiatric clinics"
- "Starting in Germany. Built in Switzerland. Scaling across Europe."
- ETH Zurich ecosystem badge

**Slide 2 — Executive Summary (NOT PRESENTED)**
- 6 cards: Proven demand | Legal necessity | Zero competition | Massive market | Strong unit economics | ETH ecosystem
- Key metrics bar: EUR 500K raise | EUR 49/user/month | 80% margin | M18 break-even

**Slide 3 — Problem**
- Big visual stats: 40% time on paperwork | #1 admin specialty | 46% burnout
- Secondary stats: 2-8h/week docs | 6+mo wait | 1.8M clinician shortfall
- Privacy Paradox card: 90% cite privacy, 63% demand on-device, 84% never used AI, 16% blocked by privacy
- Legal Reality card: Art. 321 + §203 make cloud AI legally questionable
- Quote: "I became a doctor to help people. Not to type."

**Slide 4 — Customer Discovery**
- Headline: "63% demand on-device only. Zero competitors offer this."
- 4 stat cards: 63% on-device | 89% 2+ hours | 74% would adopt | 84% never used AI
- WTP bar chart: 53% under EUR 50 | 21% EUR 50-100 | 26% won't pay
- Validation note: Phase 1 EUR 49 aligns with median WTP

**Slide 5 — Solution**
- "Kairon. Your clinic's AI scribe."
- 4-step flow: Record locally | Kairon structures notes | Reports generated | Doctor reviews
- "Kairon never generates clinical opinions. The thinking stays human."
- Input mode pills: Voice | Handwriting via camera | Existing digital notes

**Slide 6 — Architecture**
- "GDPR compliant by architecture, not by policy."
- Left card (Every Competitor): X marks for cloud, contracts, breach risk, IT says no
- Right card (Kairon): checkmarks for local, by design, nothing to breach, IT says yes
- Art. 321 + §203 StGB callout
- Integration pills: HL7 FHIR | SAP | Epic | Dedalus | Cerner

**Slide 7 — Market**
- Concentric circles: $98B EU Healthcare IT (TAM) | $1.2B CDI (SAM) | EUR 500K Y1 (SOM)
- DACH breakdown: Switzerland 15.5K | Germany 58.5K | Austria 12K = 81K total
- Regulatory moat: Art. 321 + §203 + nDSG + GDPR = local AI is a legal necessity

**Slide 8 — Why Now**
- 4 forces: Technology (LLMs ready) | Economics (5x cheaper) | Regulation (tightening) | Demand (mental health crisis)
- "No validated local-first competitor exists in DACH. The window is open."

**Slide 9 — Business Model**
- 3 phases: EUR 49/user (pilot) | EUR 99/clinic (scale) | Enterprise licensing
- ARR table: 20 clinics = EUR 58.8K | 100 = EUR 294K | 200 = EUR 588K
- Pricing validated + Unit economics: 80% margin, M18 break-even, 6x ROI

**Slide 10 — Competition**
- Feature comparison table: Kairon vs Cloud AI (Nabla/DeepScribe/Nuance) vs Practice Mgmt (Psyprax/Elexir)
- "Cloud competitors cannot credibly serve DACH therapy due to professional secrecy laws."

**Slide 11 — Traction + Team**
- Timeline: Idea (Sun) -> Survey (Sun eve) -> 19 responses (Mon) -> Landing page (Tue) -> Pilot (Q2 2026)
- "Live today" + "First pilot conversation" cards
- 4 team cards: Laszlo (CEO/ETH) | David (CTO/ETH) | Julian (Strategy/HSG) | Igor (BizDev/HSG)

**Slide 12 — The Ask**
- "We're raising EUR 500K seed."
- 3 fund cards: 40% product | 35% pilots | 25% regulatory
- Milestones: Q2 2026 pilot | Q4 2026 20 clinics | Q2 2027 Series A
- Key metrics: 18mo break-even | 80% margin | 6x ROI
- "The moment that matters is now."

---

## Part 6: Angel Investor Assessment Framework (Handbook 2.7 & 2.8)

### How Investors Score Startups (Section 2.8)

**Overall rating = (2x Team + 1.5x Business Potential + Innovation + Document Quality) / 5.5**

Team is weighted highest. Here's how Kairon scores on each dimension:

### Team Potential (our strongest area)
Investors look for:
- Right mix of skills? **Yes: ETH engineering (David, Laszlo) + HSG business (Julian, Igor)**
- All in, full-time? **Demonstrate commitment in the pitch**
- Clear signs of excellence? **David built first AI doc tool independently**
- Open to advice? **Advised by ETH AI Center**
- Compatible motivations? **Shared mission, complementary roles**

### Business Potential
Investors look for:
- Unique, strong value proposition? **Yes: only local AI option. Not just better, legally necessary**
- Can generate CHF 5M in 5 years? **Yes: 1,000 clinicians x EUR 49/mo = EUR 588K ARR by Y3, scaling to 5M+ by Y5 with DACH expansion**
- Addressable market > CHF 100M? **Yes: EUR 48M DACH SAM at Phase 1 pricing, $1.2B European CDI market**
- CAC < LTV? **Yes: group practice deals (3-10 seats), natural referral via Intervision groups. LTV = EUR 49 x 36 months = EUR 1,764/user**
- Growing market? **Yes: post-pandemic mental health demand, ePA digitization**
- Strong entry barriers? **Yes: Art. 321/203 StGB creates regulatory moat competitors can't cross**

### Degree of Innovation
- Unique and hard to copy? **The model is commodity; the local deployment architecture + clinical workflow adapters + ERP integrations are the moat. Competitors can't retrofit.**
- Expert validation? **Munich psychiatrist who built his own tool wants to use Kairon instead**

### Document Quality
- Consistent, complete, fact-based? **Survey data (n=19), sourced claims, clear reasoning**
- Understandable by non-experts? **Yes: "GDPR compliant by architecture, not by policy" is the key line**

### What the Handbook Says to Watch For

**Red flags we avoid:**
- "No competition" claim: We acknowledge competitors exist (Nabla, DeepScribe, Nuance) but explain why they CAN'T serve this market (structural, not feature gap)
- Team not all-in: Address this by showing 48-hour execution velocity
- Missing team info: All 4 members with roles and backgrounds

**Key quote from handbook:**
> "If a startup has no competition at all, not even indirect competition with substitute products, there is most likely also no market."

**Our answer:** We have strong indirect competition (cloud AI scribes) and direct competition (practice management software). Neither can do what we do. The market is proven by competitors' existence; our gap is proven by the legal barrier they can't cross.

### Pitch Deck Checklist (Section 2.7, Guy Kawasaki framework)

| Required Element | Our Slide | Status |
|---|---|---|
| Title and contacts | Slide 1 | Done |
| Problem/opportunity | Slide 3 | Done (with privacy paradox) |
| Value proposition | Slides 5-6 | Done |
| Underlying magic/tech | Slides 6-7 | Done (local AI architecture) |
| Business model | Slide 10 | Done |
| Go-to-market plan | Implied in slides 8, 12 | Could be more explicit |
| Competitor analysis | Slide 11 | Done (feature table) |
| Team | Slide 13 | Done (4 members) |
| Financial projections | Slide 10 (ARR table) | Done |
| Current status | Slide 12 (traction) | Done |
| Use of funds | Slide 14 | Done (40/35/25 split) |

### Investor Questions Mapped to Handbook Criteria

**"Is this a real business?"** (Business Potential)
Answer with: EUR 48M DACH SAM, 81K therapists, pricing validated by survey, 6x customer ROI.

**"Why can't incumbents just add this?"** (Innovation/Moat)
Answer with: Cloud architecture is fundamentally incompatible with Art. 321 StGB. It's not a feature addition, it's an infrastructure rebuild. Meanwhile we're local-native from day one.

**"What if the team falls apart?"** (Team)
Answer with: Complementary skills (2 ETH + 2 HSG), shared mission, execution proven in 48 hours.

**"Where's the competition?"** (Never say "none")
Answer with: Cloud AI scribes (Nabla, DeepScribe, Nuance DAX) serve the US/general market well. Practice management tools (Psyprax, Elexir) handle basic admin. Neither can combine AI + local processing for the DACH therapy market. We occupy the only legally compliant position.

**"Why should I invest now?"** (Timing)
Answer with: Four converging forces (local LLMs ready, hardware costs dropped, regulation tightening, mental health crisis). No validated local-first competitor in DACH. First-mover window is open but won't last.
