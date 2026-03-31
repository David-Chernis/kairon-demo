# Kairon -- Business Concept Report

**Team [ID] | Julian Aebi, David Chernis, Laszlo Doriat, Igor Isakov**
**ETH Zurich / HSG St. Gallen | Technology & Entrepreneurship FS2026**

---

## 1. Problem *(Julian Aebi)*

Psychiatrists and psychotherapists spend 30 to 40% of their working time on administrative documentation: session notes, insurance reports (Verlaufsberichte), referral letters, and treatment applications (AMA 2024; Sinsky et al., 2016). Our survey of 19 psychiatrists in Germany confirms this: 89% spend over 2 hours weekly on documentation alone. This burden drives clinician burnout (46% of psychologists report burnout, APA 2022) and limits patient throughput, with wait times exceeding 6 months across DACH (BPtK, 2023).

AI documentation tools exist, but adoption in psychotherapy is near zero: 84% of surveyed psychiatrists have never used one. The barrier is legal, not technological. Under Art. 321 StGB (Switzerland) and §203 StGB (Germany), therapists are bound by professional secrecy. Every existing AI tool processes data in the cloud, creating direct conflict with these statutes and GDPR Article 9. In our survey, 90% cited data privacy as their primary concern, and 63% stated data must remain exclusively on the clinic's own device. Three respondents reported they tried to adopt AI tools but stopped due to privacy. The demand is proven; the supply is legally blocked.

## 2. Solution *(David Chernis)*

Kairon is a local AI infrastructure platform for clinical workflows, starting with psychiatric documentation. Unlike cloud-based tools, Kairon deploys as on-premise infrastructure that clinics own and extend. Documentation is the first module; the platform is the product. Patient data never leaves the building.

The workflow requires zero behaviour change: (1) the session is recorded locally with patient consent, (2) a local Whisper model transcribes the audio, (3) a local LLM (Llama 3) structures the transcript into clinical documentation, and (4) the clinician reviews and approves. Kairon accepts voice, handwriting via camera, and existing digital notes. It never generates clinical opinions; the thinking stays human, only the paperwork is automated. The modular architecture allows clinics to add workflow modules (treatment planning, outcome tracking) as needs evolve.

This architecture makes Kairon GDPR-compliant by design, not by policy. There is no data to breach because no data is transmitted. Hospital IT departments, historically the gatekeepers blocking cloud tools, become enablers.

## 3. Target Market & Opportunity *(Julian Aebi)*

The European clinical documentation market is valued at USD 1.2B (Credence Research, 2024), within a USD 98B European healthcare IT market (Mordor Intelligence, 2024). The DACH region alone contains approximately 81,000 psychotherapists and psychiatrists (FSP; KBV/BPtK; Austrian Ministry of Social Affairs): 55,000 in Germany, 15,000 in Switzerland, and 11,000 in Austria. Our serviceable market spans all of Europe as Kairon's local deployment model works in any regulatory jurisdiction; DACH is the beachhead.

Our initial beachhead is psychiatric clinics and group practices (Gemeinschaftspraxen) in Germany and Switzerland, chosen for higher administrative pain, faster purchasing decisions than hospitals, and 3 to 10 clinician seats per installation. The Anordnungsmodell (2022) in Switzerland created a wave of newly independent practices needing documentation tooling.

## 4. Competitive Advantage *(Laszlo Doriat)*

No existing competitor combines AI-powered clinical documentation with fully local processing. Cloud-based AI scribes (Nabla, DeepScribe, Nuance DAX) cannot serve the DACH therapy market because their cloud architecture is incompatible with Art. 321/§203 StGB professional secrecy requirements. Traditional practice management software (Psyprax, Elexir) offers no AI capabilities. Kairon is the only platform that is simultaneously AI-native, locally deployed, and legally compliant for psychotherapy documentation in DACH.

This advantage is structural. Kairon's moat is the deployment architecture: local inference pipeline, ERP connectors (SAP, Epic, Dedalus via HL7 FHIR), and clinical workflow adapters. Models are interchangeable; the infrastructure is not. Competitors cannot retrofit local processing without rebuilding entirely. Four forces create a narrow window: local LLMs reached production quality in 2024, inference hardware costs dropped 5x in three years, GDPR enforcement is increasing pressure on cloud tools, and Germany's mandatory ePA (January 2025) established the digital backbone Kairon integrates with.

## 5. Business Model *(Igor Isakov)*

Kairon operates on a SaaS subscription model with three phases. Phase 1 (pilot, Q2 2026): EUR 49 per user per month targeting 20 psychiatric clinics in Germany and Switzerland, validated by our survey where 53% indicated willingness to pay under EUR 50/month and 21% indicated EUR 50 to 100. Phase 2: EUR 99 per clinic per month, expanding to 5 specialties across 3 countries with deep ERP integration. Phase 3: enterprise licensing for hospital networks. ARR projections: EUR 58.8K (20 clinics), EUR 294K (100 clinics), EUR 588K (200 clinics). Gross margins are approximately 80% because all processing is local with no cloud compute costs. Customer ROI: 20 hours saved monthly translates to roughly 15 additional patient sessions, generating about EUR 3,000 in additional revenue per clinician, a 6x return on subscription cost.

## 6. Customer Discovery & Validation *(Laszlo Doriat)*

In March 2026, we surveyed 19 practicing psychiatrists across Munich and nationwide Germany. Key findings: 89% spend 2+ hours weekly on documentation; 84% have never used an AI tool for this purpose; 74% would adopt a GDPR-compliant tool; and 63% require data to remain exclusively on-device. One respondent, a Munich-based psychiatrist who had independently built his own local documentation tool, initiated a pilot conversation. The 48-hour cycle from idea formation to validated primary research, live landing page (kairon.health), and pilot conversation demonstrates execution velocity.

## 7. Go-To-Market *(Igor Isakov)*

Phase 1 targets psychiatric clinics in Germany and Switzerland through direct outreach to group practices, professional associations (DGPPN, FSP, SBAP), and peer supervision groups (Intervision) which create natural referral networks. Conference workshops with live product demonstrations serve as the primary channel. Our beachhead in Gemeinschaftspraxen ensures 3 to 10 seat deals per installation, improving CAC efficiency. Phase 2 expands into Austria and additional specialties, leveraging ERP partnerships with SAP Health and Epic for distribution.

## 8. Roadmap *(David Chernis)*

Q2 2026: MVP pilot with 3 psychiatric clinics in Germany, core transcription and note generation. Q3 2026: Swiss insurance template support, automated Verlaufsberichte. Q4 2026: commercial launch across Germany, target 20 clinics, first sales hire. Q2 2027: Series A, DACH expansion, 5 specialties. Long-term vision: evolve from documentation tool to specialty platform to hospital intelligence layer, becoming the structured data input layer that makes SAP and Epic more valuable.

We are raising **EUR 500K in pre-seed funding**. Allocation: 40% (EUR 200K) product and engineering, including local model integration, ERP connectors, and handwriting recognition; 35% (EUR 175K) pilot clinic operations across 20 clinics over 3 months with IRB approval; 25% (EUR 125K) regulatory and compliance, including GDPR audit, BDSG certification, and DPO appointment. This provides 18 months of runway to break-even at approximately 100 active clinicians.

## 9. Team *(All)*

**Laszlo Doriat** (ETH Zurich): CEO & Co-founder. Market sizing, go-to-market, regulatory strategy. Background in civil aviation and enterprise data systems. **David Chernis** (ETH Zurich): CTO & Co-founder. AI/ML engineering, local model deployment and inference optimisation. Built the first AI documentation tool independently. **Julian Aebi** (HSG): Business & Strategy. Business strategy, partnerships, and go-to-market execution. **Igor Isakov** (HSG): Business Development. Client acquisition, partnership development. Built within the ETH Zurich + HSG ecosystem, advised by ETH AI Center.

---

**References**

1. AMA Physician Workweek Report 2024, ama-assn.org
2. Sinsky et al., "Allocation of Physician Time," *Annals of Internal Medicine*, 2016
3. APA Practitioner Survey 2022, apa.org
4. BPtK Psychotherapy Wait Times Report 2023, bptk.de
5. PubMed: Administrative work and physician time (doi:25626223)
6. Tandem Health "Time to Care" Report 2025, tandemhealth.ai
7. Mordor Intelligence Europe Healthcare IT Market 2024
8. Credence Research CDI Market Report 2024
9. Bundesgesundheitsministerium, ePA mandatory January 2025
10. GDPR Article 9, Special category health data
11. Kairon Primary Research, 19 psychiatrists surveyed, Germany, March 2026
12. FSP (Switzerland), KBV/BPtK (Germany), Austrian Ministry of Social Affairs
