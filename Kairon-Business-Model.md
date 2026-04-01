# Kairon — Business Model Analysis
## Based on the Business Model Navigator (St. Gallen)

---

## Primary Business Model Patterns

### 1. Subscription (Primary Revenue Model)
Kairon charges a recurring monthly fee per user or per clinic for access to the local AI documentation platform.

- **Phase 1**: EUR 49/user/month (psychiatric clinics, DE + CH)
- **Phase 2**: EUR 99/clinic/month (multi-specialty, 3 countries)
- **Phase 3**: Enterprise licensing (hospital networks)

**Why this pattern**: Recurring revenue provides predictable cash flow. Healthcare practices budget monthly. The subscription covers continuous model updates, template maintenance, and support — without the customer needing to manage AI infrastructure themselves.

**Revenue calculation**: 20 clinics x 5 users x EUR 49 = EUR 4,900/month = EUR 58.8K ARR (Phase 1 target)

---

### 2. Lock-In (Defensibility)
Once Kairon's local infrastructure is installed in a clinic, switching costs are substantial:

- **Technical lock-in**: Custom ERP integrations (SAP, Epic, Dedalus), clinical workflow adapters, insurance form templates are clinic-specific configurations that took weeks to set up
- **Data lock-in**: All structured clinical data lives on the local system. Moving to a competitor means migrating years of patient documentation
- **Workflow lock-in**: Staff are trained on Kairon's interface. Behavioral change is costly
- **Regulatory lock-in**: The compliance audit (GDPR, BDSG certification) was done for Kairon's architecture. A new tool requires a new audit

**Key insight**: The lock-in is architectural, not contractual. We don't need long contracts — the switching cost is inherent.

---

### 3. Solution Provider (Value Proposition)
Kairon doesn't sell a single feature — it provides a complete solution for clinical documentation:

- Audio transcription (Whisper)
- Note structuring (local LLM)
- Insurance form generation (PTV 11, Verlaufsberichte)
- Referral letter writing
- EHR/ERP integration (SAP, Epic, Dedalus)
- Compliance by architecture (GDPR, Art. 321 StGB)

**Single point of contact**: One platform replaces 3-4 separate tools (dictation software + EHR templates + insurance form tools + referral letter templates). The therapist opens Kairon, records, and gets everything.

---

### 4. Razor and Blade (Hardware + Software)
The initial hardware setup (local server with GPU) is sold at cost or low margin. The recurring software subscription is the high-margin revenue stream.

- **Razor (hardware)**: EUR 2,000-5,000 one-time setup fee. Covers local server, GPU, installation, configuration. ~30% margin.
- **Blade (software)**: EUR 49-99/month per user. Model updates, templates, support. ~80% margin.

**Why this works**: The hardware makes switching expensive (sunk cost), the software generates recurring revenue. Similar to how printer companies sell printers cheaply and make money on ink.

---

## Secondary Business Model Patterns

### 5. Add-On (Expansion Revenue)
The base subscription includes core documentation (session notes, basic insurance forms). Additional modules are available as paid add-ons:

- **Insurance form pack**: Country-specific templates (Swiss Verlaufsberichte, German PTV forms, Austrian formats) — EUR 15/month
- **Advanced analytics**: Practice-wide outcome tracking, benchmarking — EUR 25/month
- **Multi-specialty templates**: Neurology, cardiology, GP documentation — EUR 20/month per specialty
- **Custom ERP connectors**: Deep SAP/Epic/Dedalus integration — EUR 500 one-time + EUR 30/month

**Growth lever**: Start with EUR 49 base, expand to EUR 100+ per user through add-ons as clinics see value.

---

### 6. Integrator (Control the Value Chain)
Kairon controls the entire documentation workflow end-to-end:

1. **Input** (audio capture, handwriting OCR, digital notes import)
2. **Processing** (transcription, structuring, generation)
3. **Output** (clinical notes, insurance forms, referral letters)
4. **Distribution** (EHR/ERP integration, SAP export)
5. **Compliance** (local processing, audit trail, GDPR)

No dependency on third-party cloud APIs. No data leaves the system. This vertical integration is the core differentiator — competitors who use cloud APIs for step 2-3 cannot offer step 5.

---

### 7. License (Phase 3 Revenue)
In Phase 3, Kairon's clinical workflow engine and structured data layer can be licensed to:

- **Hospital networks**: Site licenses for 50-500 clinician deployments
- **EHR vendors**: SAP Health, Epic, Dedalus license Kairon's local AI module to embed in their platforms
- **Pharma companies**: License access to anonymized, structured clinical data patterns (with patient consent) for research

**Exit path**: The licensing model makes Kairon attractive as an acquisition target for SAP, Epic, or Roche — they get the local AI layer they can't build themselves.

---

### 8. Open Source (Trust Building — Strategic)
Consider open-sourcing the core inference pipeline (the local model deployment framework) while keeping the clinical templates, ERP connectors, and workflow engine proprietary.

**Benefits**:
- Builds trust with hospital IT departments who want to audit the code
- Creates a community of developers who extend the platform
- Demonstrates technical credibility
- Makes the "no data leakage" claim verifiable

**Revenue protection**: The open-source part (model runner) has no value without the proprietary part (clinical templates, insurance form generators, ERP adapters). Similar to how Red Hat open-sources Linux but sells enterprise support and certified configurations.

---

### 9. Leverage Customer Data (Long-Term Platform Play)
Over time, Kairon accumulates structured clinical data at the point of creation. This data never leaves the clinic, but with explicit consent and anonymization, aggregated patterns become valuable:

- **Clinic-level analytics**: "Your average documentation time decreased 62% in month 3"
- **Benchmarking**: "Your practice handles 18% more patients than the DACH average"
- **Research datasets**: Anonymized, structured data patterns licensed to research institutions
- **Quality metrics**: Outcome tracking that insurers and regulators value

**Important**: This is opt-in, anonymized, and controlled by the clinic. The privacy-first architecture is the enabler, not the obstacle — clinics trust Kairon with their data precisely because it stays local.

---

### 10. Performance-Based Contracting (Future Pricing Option)
Instead of flat subscription, charge based on measurable outcomes:

- **Per-document pricing**: EUR 2-5 per generated document (therapy note, insurance form, referral letter)
- **Time-saved pricing**: Share in the revenue from additional patient sessions made possible by time savings
- **Outcome-based**: Tie pricing to documented reduction in administrative hours

**When to introduce**: After Phase 1 proves the value proposition. Performance-based pricing aligns incentives and removes adoption risk for clinics ("pay only if it works").

---

## Business Model Canvas Summary

| Element | Kairon |
|---|---|
| **Customer Segments** | Psychiatric clinics, Gemeinschaftspraxen (group practices), later: hospitals, multi-specialty clinics |
| **Value Proposition** | Automate clinical documentation with AI that runs locally. Data never leaves the building. GDPR compliant by architecture. |
| **Channels** | Direct sales to group practices, professional associations (FSP, SBAP, DGPPN), conference workshops, peer referral via Intervision groups |
| **Customer Relationships** | Dedicated onboarding, ongoing support, community (open-source core), regular model updates |
| **Revenue Streams** | Subscription (primary), hardware setup fees, add-on modules, enterprise licensing |
| **Key Resources** | Local AI models (Whisper, Llama), clinical documentation templates, ERP connectors, compliance certifications |
| **Key Activities** | Model training/optimization, template development, ERP integration, regulatory compliance, customer onboarding |
| **Key Partners** | Ollama/model providers, GPU hardware suppliers, professional associations, EHR vendors (SAP, Epic), ETH AI Center |
| **Cost Structure** | Engineering team (45%), sales & marketing (25%), hardware procurement (15%), regulatory compliance (15%). No cloud compute costs. |

---

## Revenue Projection by Model Pattern

| Year | Subscription | Hardware Setup | Add-Ons | Licensing | Total ARR |
|---|---|---|---|---|---|
| Year 1 | EUR 48K | EUR 40K | — | — | EUR 88K |
| Year 2 | EUR 240K | EUR 100K | EUR 30K | — | EUR 370K |
| Year 3 | EUR 588K | EUR 150K | EUR 100K | EUR 50K | EUR 888K |
| Year 5 | EUR 2.4M | EUR 200K | EUR 400K | EUR 500K | EUR 3.5M |

---

## Competitive Moat (Why These Patterns Are Defensible)

1. **Subscription + Lock-In**: Once installed, clinics don't switch. Monthly revenue is sticky.
2. **Solution Provider + Integrator**: Competitors can't match the end-to-end local solution because they'd need to rebuild from cloud to local architecture.
3. **Razor and Blade**: Hardware is in the clinic. Competitor would need to ship their own hardware or convince the clinic to buy twice.
4. **Open Source + Trust**: Hospital IT departments can audit the code. Cloud competitors can't offer this transparency.
5. **Regulatory Lock-In**: Art. 321 StGB and §203 StGB create a permanent structural barrier that cloud competitors cannot cross without fundamentally changing their architecture.
