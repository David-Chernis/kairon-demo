# Kairon Pitch Deck — Complete Production Brief

Use this document to recreate the Kairon pitch deck from scratch. It contains every piece of content, every number, every design decision, and every layout instruction needed.

---

## DESIGN SYSTEM

### Color Palette
| Token | Hex | Usage |
|---|---|---|
| Background | #FDFAF8 | Page background — warm cream, not pure white |
| Card | #FFFFFF | Card/container background |
| Card Warm | #FFFBF8 | Slightly warm-tinted cards |
| Card Pink | #FFF0EE | Competitor cards, warning/risk callouts |
| Card Green | #F0FBF5 | Kairon cards, positive/advantage callouts |
| Coral | #FF2D55 | Primary accent — big stats, headlines, CTAs, section numbers |
| Orange | #FF6B35 | Section labels, phase tags, secondary accent |
| Amber | #FFB347 | Tertiary accent, some phase labels |
| Text Dark | #1A0A0A | Headlines, card titles |
| Text Medium | #6B4040 | Body text, descriptions |
| Text Light | #A07060 | Subtle text, source attributions |
| Text Dim | #C0A090 | Very subtle text, footer notes |
| Green | #228844 | Checkmarks, positive indicators, approved states |
| Red | #CC3333 | X marks, negative indicators, competitor weaknesses |
| Amber Text | #CC8800 | Warning text ("Gray area", "Limited", "Partial") |
| Border | #E8D8D0 | Card borders — warm, not gray |
| White | #FFFFFF | Text on colored backgrounds |

### Typography
- **Font family**: Inter (Google Fonts, weights 400 and 600)
- **Headlines**: 40-52pt, bold, color Text Dark (#1A0A0A)
- **Section labels**: 11pt, bold, uppercase, letter-spacing 0.1em, color Orange (#FF6B35)
- **Big stat numbers**: 28-42pt, bold, color Coral (#FF2D55) or as specified
- **Body text**: 10-14pt, regular, color Text Medium (#6B4040)
- **Source lines**: 8-9pt, regular, color Text Light or Text Dim
- **Card titles**: 12-14pt, bold, color Text Dark
- **Pill/badge text**: 9-11pt, medium weight

### Slide Dimensions
- 16:9 widescreen (13.333" x 7.5" or 1920x1080px)

### Layout Rules
- Left margin: 0.9" from edge
- Top margin: 0.7" for section label, 1.05" for headline
- Card grid gap: ~0.3-0.4" between cards
- Cards have rounded corners (border-radius ~12px / adjustment 0.04)
- Cards have 0.75pt warm border (#E8D8D0)
- No bullet points anywhere — use cards, stat blocks, or inline text
- Sources always at very bottom of slide (y=7.0"), tiny and dim
- Slide counter NOT included (removed per feedback to maximize space)
- Kairon logo NOT included on every slide (only cover)

### Decorative Elements (Cover Slide Only)
- 2-3 floating oval shapes in soft pink/peach (opacity ~0.3)
- Colors: #FFE8E0, #FFF0EA, #FFECE4
- Positioned at edges/corners of the slide, partially off-canvas
- No decorative elements on content slides

---

## SLIDE-BY-SLIDE SPECIFICATION

### SLIDE 1: COVER

**Layout**: Left-aligned text, decorative shapes on right

**Elements**:
- Top center: "kairon" in 14pt coral bold (this is the logo — just text, no image)
- Main headline (left, y ~1.8"): 
  - "Give doctors back" (52pt, coral #FF2D55, bold)
  - "the moment that matters." (52pt, coral #FF2D55, bold)
  - In the original Replit version, "Give doctors back" is red-to-orange gradient text. In PPTX, use solid coral since gradients aren't supported.
- Subtitle (y ~4.0"): "Local AI documentation for psychiatric clinics" (18pt, dark)
- Sub-subtitle (y ~4.5"): "Starting in Germany. Built in Switzerland. Scaling across Europe." (14pt, orange)
- Bottom badge (y ~5.8"): White card with warm border containing "Made in Switzerland · ETH Zurich ecosystem" (10pt, medium brown, centered)
- Decorative ovals: 3 soft pink/peach circles at top-right, bottom-left, and mid-right

**Speaker note**: "We're Kairon. We build local AI infrastructure for clinical documentation — starting with psychiatry."

---

### SLIDE 2: EXECUTIVE SUMMARY (NOT PRESENTED — for async investor review)

**Section label**: "EXECUTIVE SUMMARY"
**Headline**: "6 reasons to invest in Kairon."

**Layout**: 3x2 grid of cards + metrics bar at bottom

**6 reason cards** (each is a white card with number, title, description):

| # | Title | Description |
|---|---|---|
| 01 | Proven demand | 19 psychiatrists surveyed · 74% willing to pay · 89% spend 2+ hours weekly on documentation |
| 02 | Legal necessity, not a feature | Art. 321 StGB (CH) + §203 StGB (DE) make cloud AI legally questionable. Local AI is the only compliant path. |
| 03 | Zero competition | No validated local-first AI documentation tool exists in DACH. Cloud competitors cannot credibly serve this market. |
| 04 | Massive market, perfect timing | $1.2B European CDI market · 81K DACH therapists · Local LLMs hit production quality 2024 · ePA mandatory Jan 2025 |
| 05 | Strong unit economics | ~80% gross margin (no cloud compute) · Customer ROI: 6x return · Break-even ~Month 18 |
| 06 | ETH ecosystem · Built in 48h | Survey → validation → landing page in two days. ETH Zurich + HSG · Technology & Entrepreneurship FS2026 |

**Key metrics bar** (centered at bottom, 4 items):
- €500K (Seed raise)
- €49 (Phase 1 / user / month)
- 80% (Gross margin)
- M18 (Break-even)

Each metric: number in 24pt coral bold, label in 9pt medium text below

---

### SLIDE 3: THE PROBLEM

**Section label**: "THE PROBLEM"
**No headline** — the stats ARE the headline

**Layout**: Left side has 6 stat cards (3+3 grid), quote below. Right side has two info cards.

**Top row stat cards** (3 cards, each ~1.5" wide):
| Stat | Description | Source |
|---|---|---|
| 40% | of a doctor's time on paperwork | AMA / Tandem Health 2025 |
| #1 | Psychiatrists: most admin of all specialties | PubMed 25626223 |
| 46% | of psychologists report burnout | APA 2022 |

Numbers in 32pt coral bold, descriptions in 9pt medium, sources in 7pt orange.

**Bottom row stat cards** (3 cards):
| Stat | Description |
|---|---|
| 2-8h | per week on documentation (Kairon survey, n=19) |
| 6+mo | patient wait times in DACH (BPtK 2023) |
| 1.8M | clinician shortfall in Europe by 2030 |

Numbers in 22pt coral bold.

**Quote** (below left cards, y ~5.3"):
*"I became a doctor to help people. Not to type."* — 16pt, dark, bold italic

**Right side — Privacy Paradox card** (white card, y 1.5"):
- Header: "THE PRIVACY PARADOX" (11pt, coral, bold)
- 4 bullet lines with arrow prefix (→):
  - →90% cite privacy & secrecy as #1 concern
  - →63% demand data stays on-device only
  - →84% have never used an AI documentation tool
  - →16% wanted AI but were blocked by privacy concerns

**Right side — Legal Reality card** (white card, below Privacy Paradox):
- Header: "LEGAL REALITY" (11pt, coral, bold)
- Bold line: "Art. 321 StGB (CH) + §203 StGB (DE) make cloud AI legally questionable for therapy data."
- Coral line: "AI solutions exist. Therapists can't use them. Demand is proven. Supply is blocked."

**Source line**: "Kairon survey · March 2026 · n=19 · AMA · Tandem Health · APA 2022 · BPtK 2023 · Mordor Intelligence 2026"

---

### SLIDE 4: CUSTOMER DISCOVERY

**Section label**: "CUSTOMER DISCOVERY · PRIMARY RESEARCH · N=19 · GERMANY · MARCH 2026"
**Headline**: "63% demand on-device only.\nZero competitors offer this."

**Layout**: 2x2 stat cards + WTP bar chart below

**4 stat cards** (each has big number left, description right):
| Number | Color | Description |
|---|---|---|
| 63% | Coral | demand on-device only — no cloud |
| 89% | Orange | spend 2+ hours weekly on documentation |
| 74% | Orange | would use a tool if GDPR-compliant |
| 84% | Medium | have never used an AI documentation tool |

Numbers: 36pt bold. Descriptions: 13pt medium text.

**WTP bar chart** (inside a white card spanning full width):
- Title: "Willingness to pay — per user per month" (11pt, coral, bold)
- Three horizontal bars:
  - "Under €50" — 53% — coral bar fill, ~55% of track width
  - "€50-100" — 21% — orange bar fill, ~22% of track width  
  - "Would not pay" — 26% — dim bar fill, ~27% of track width
- Bar tracks: light warm gray (#F0E8E0)
- Percentages shown on the right side of each row
- Below bars: "74% willing to pay · 53% say <€50/month · Phase 1 price of €49 aligns with median WTP" (9pt, medium)

**Source**: "Source: Kairon primary research · 19 psychiatrists · Germany · March 2026"

---

### SLIDE 5: THE SOLUTION

**Section label**: "THE SOLUTION"
**Headline**: "Kairon. Your clinic's AI scribe."

**Layout**: 4 step cards in a row + italic quote + input mode pills

**4 step cards** (each ~2.9" wide, white card):
Each card has:
- Step number (22pt, coral, bold): "01", "02", "03", "04"
- Short orange accent line (~0.4" wide) near top-right of card
- Title (13pt, dark, bold)
- Description (11pt, medium)

| Step | Title | Description |
|---|---|---|
| 01 | Session recorded locally | Audio captured with patient consent on your hardware |
| 02 | Kairon structures notes | Transcription and formatting — never transmitted |
| 03 | Reports generated | Clinical notes, insurance forms, referral letters in seconds |
| 04 | Doctor reviews | One click to approve. Human always in the loop. |

**Italic quote** (centered, y ~5.3"):
"Kairon never generates clinical opinions. The thinking stays human. The paperwork doesn't." — 13pt, medium, italic

**Input mode pills** (3 small warm-tinted cards in a row):
- "Voice" | "Handwriting via camera" | "Existing digital notes"
- Each pill: 10pt medium text, centered, warm card background (#FFFBF8)
- Followed by: "Zero behaviour change required" (10pt, light text)

---

### SLIDE 6: ARCHITECTURE & COMPLIANCE

**Section label**: "ARCHITECTURE & COMPLIANCE"
**Headline**: "GDPR compliant by architecture,\nnot by policy."

**Layout**: Two large cards side by side + legal callout + integration pills

**Left card — EVERY COMPETITOR** (pink-tinted card #FFF0EE, pink border #FFD0D0):
- Label: "EVERY COMPETITOR" (11pt, coral, bold)
- 5 items with ✗ prefix in red (#CC3333), 12pt:
  - ✗ Data sent to cloud servers
  - ✗ GDPR compliance via contracts and promises
  - ✗ One breach ends the company
  - ✗ Hospital IT says no
  - ✗ Liability exposure for the clinic

**Right card — KAIRON** (green-tinted card #F0FBF5, green border #D0E8D0):
- Label: "KAIRON" (11pt, green, bold)
- 5 items with ✓ prefix in green (#228844), 12pt:
  - ✓ Data never leaves the building
  - ✓ Compliance guaranteed by design
  - ✓ Nothing to breach — nothing transmitted
  - ✓ Hospital IT says yes
  - ✓ Liability minimised by architecture
- Inside Kairon card, a nested pink callout card:
  - "Art. 321 StGB (CH) + §203 StGB (DE)" (11pt, dark, bold)
  - "Professional secrecy laws. Cloud AI = legal grey area." (10pt, medium)
  - "Local AI = legal necessity." (10pt, coral, bold)

**Integration pills** (5 small cards in a row, centered):
- "HL7 FHIR" | "SAP" | "Epic" | "Dedalus" | "Cerner"
- Each: warm card background, 10pt medium text
- Below: "Integrates as structured data input layer into existing hospital systems" (9pt, light, centered)

---

### SLIDE 7: MARKET OPPORTUNITY

**Section label**: "MARKET OPPORTUNITY"
**Headline**: "Starting niche.\nScaling massive."

**Layout**: Concentric circles (left) + DACH breakdown card + regulatory moat card (right)

**Concentric circles** (left side, ~4.5" diameter outer):
- Outer ring: light warm fill (#FFF0EA), label "European Healthcare IT\n$98B TAM" (11pt, light)
- Middle ring: warmer fill (#FFE0D5), label "Clinical Documentation\n$1.2B EU SAM" (11pt, medium)
- Inner filled circle: coral (#FF2D55), label "Year 1 SOM\n€500K ARR\n20 pilots" (10pt, white, bold)
- Rings have subtle warm borders (#F0D0C0, 1.5pt)

**DACH breakdown card** (right, white card):
- Title: "DACH market breakdown" (14pt, dark, bold)
- 3 country rows, each with a colored square indicator:
  - 🟥 Switzerland — 15.5K total (11K therapists · 4.5K psychiatrists) — coral indicator
  - 🟧 Germany — 58.5K total (50K therapists · 8.5K psychiatrists) — orange indicator
  - 🟨 Austria — 12K total (10K therapists · 2K psychologists) — amber indicator
- Bottom bold: "Total DACH: ~81K clinicians" (12pt, dark, bold)
- Country name + total: 12pt dark bold. Breakdown: 9pt light.

**Regulatory moat card** (right, below DACH, pink-tinted #FFF0EE):
- Title: "Regulatory moat" (12pt, coral, bold)
- Body: "Art. 321 StGB (CH) + §203 StGB (DE) + nDSG 2023 + GDPR classify therapy data as the highest protection tier." (10pt, medium)
- Bold coral line: "Local AI isn't a feature — it's a legal necessity." (11pt, coral, bold)

**Source**: "Sources: Mordor Intelligence 2024 · Credence Research CDI 2024 · FSP · KBV/BPtK · Bundesgesundheitsministerium"

---

### SLIDE 8: WHY NOW

**Section label**: "WHY NOW"
**Headline**: "Four forces converging."
**Subtitle**: "The window for a local-first AI scribe in DACH has opened. It won't stay open long." (14pt, medium)

**Layout**: 2x2 grid of force cards + bottom banner

**4 force cards** (each has circle with number, title, description, tag):

| # | Tag | Title | Description | Tag Color |
|---|---|---|---|---|
| 01 | TECHNOLOGY | Local LLMs hit production quality | Whisper + Llama run on clinic hardware since 2024. The technology that makes Kairon possible arrived — now. | Coral |
| 02 | ECONOMICS | Hardware costs dropped 5× in 3 years | Local inference is now affordable for a mid-size psychiatric practice. The economics flipped. | Orange |
| 03 | REGULATION | Regulation tightening | Germany ePA mandatory Jan 2025. nDSG 2023. GDPR enforcement accelerating. Cloud AI tools for therapy are under legal pressure. | Amber |
| 04 | DEMAND | Post-pandemic mental health crisis | WHO reports +25% anxiety & depression globally. Waitlists 6+ months in DACH. Therapist burnout at all-time highs (APA: 46%). | Medium |

Each card: white card, number in a circle (warm fill, warm border), title 14pt bold dark, description 10pt medium, tag label 9pt bold in its color.

**Bottom banner** (full-width white card):
"No validated local-first competitor exists in DACH psychiatric market. The window is open." (12pt, dark, bold, centered)

**Source**: "Sources: WHO 2022 · APA 2022 · BPtK 2023 · BMG ePA 2025 · nDSG 2023"

---

### SLIDE 9: BUSINESS MODEL

**Section label**: "BUSINESS MODEL"
**Headline**: "Simple, recurring, defensible."

**Layout**: 3 phase cards + ARR table + 2 validation cards

**3 phase cards** (each ~3.8" wide, white card):
| Phase | Price | Details |
|---|---|---|
| PHASE 1 | €49 / user / month | Psychiatric clinics · Germany + Switzerland · Pilot Q2 2026 · Target: 20 clinics · 100 users |
| PHASE 2 | €99 / clinic / month | 5 specialties · 3 countries · Deep SAP / Epic / Dedalus integration · Target: 200 clinics |
| PHASE 3 | Enterprise licensing | Hospital networks + ERP partnerships · Acquisition target: Roche, SAP Health, Epic |

Phase label: 10pt orange bold. Price: 22pt dark bold (PHASE 3 in coral). Details: 10pt medium.

**ARR progression table** (full-width white card):
- Two columns: "Clinics / Users" (coral label) and "ARR Projection" (coral label)
- Row 1: 20 clinics / 100 users → €58.8K ARR
- Row 2: 100 clinics / 500 users → €294K ARR
- Row 3: 200 clinics / 1,000 users → €588K ARR
- Left column: 10pt medium. Right column: 10pt dark bold.

**Two bottom cards** (side by side):
- PRICING VALIDATED (9pt coral bold label): "74% willing to pay · 53% say <€50/mo · Phase 1 price of €49 aligns with median WTP" (9pt medium)
- UNIT ECONOMICS (9pt coral bold label): "~80% gross margin (no cloud compute) · Break-even ~Month 18 · Customer ROI: 6×" (9pt medium)

---

### SLIDE 10: COMPETITIVE LANDSCAPE

**Section label**: "COMPETITIVE LANDSCAPE"
**Headline**: "No one else does all of this locally."

**Layout**: Feature comparison table + bottom statement

**Table** (full width, 4 columns, 9 data rows):

| Feature | Kairon Local-first AI | Cloud AI (Nabla · DeepScribe · Nuance) | Practice Mgmt (Psyprax · Elexir) |
|---|---|---|---|
| Data stays local | ✓ | ✗ | Partial |
| AI session notes | ✓ | ✓ | ✗ |
| Insurance reports CH/DE | ✓ | ✗ | ✗ |
| Art. 321 / §203 compliant | By design | Gray area | ✓ |
| Works offline | ✓ | ✗ | ✓ |
| German-native | ✓ | ✗ | ✓ |
| Expandable platform | ✓ | ✗ | Limited |
| Pricing / user / month | €49-99 | $300-1,000 | €30-100 |

**Table styling**:
- Header row: warm cream fill (#F5EEE8), dark bold text
- Kairon column (col 2): light pink fill (#FFF5F0), bold text. ✓ and "By design" in green, prices in coral
- Other columns: white fill
- ✓ marks: green (#228844)
- ✗ marks: red (#CC3333)
- "Gray area", "Partial", "Limited": amber (#CC8800)
- Regular text: medium brown
- Cell borders: warm (#E8D8D0), thin

**Bottom statement** (centered, 12pt, coral, bold):
"Cloud competitors cannot credibly serve DACH therapy due to professional secrecy laws. We're not competing — we're replacing."

---

### SLIDE 11: TRACTION + TEAM

**Section label**: "TRACTION · BUILT IN DAYS"
**Headline**: "From idea to validation in 48 hours."

**Layout**: Horizontal timeline + 2 status cards + team section below

**Timeline** (horizontal line with 5 dots, spanning full width at y ~2.65"):
- Orange line (0.04" thick)
- 5 coral dots along the line

| Date | Label | Subtitle |
|---|---|---|
| Sun 29 March | Idea formed | Technology & Entrepreneurship course, ETH Zurich |
| Sunday evening | Survey sent | Psychiatrists in Munich and nationwide Germany |
| Mon 30 March | 19 responses | Primary research complete |
| Tue 31 March | Landing page live | kairon.health · Waitlist open |
| Q2 2026 | Pilot launch | 3 psychiatric clinics · Germany |

Date: 9pt coral bold. Label: 11pt dark bold. Subtitle: 8pt medium. All centered under each dot.

**Two status cards** (side by side, y ~3.8"):
- **Live today** (white card): "kairon.health — landing page with waitlist" + "Local-first architecture validated" (coral title, medium body)
- **First pilot conversation** (white card): 'Munich psychiatrist: "I built my own tool — I\'m curious which model you use. Happy to exchange."' + "Early adopter identified." (coral title, medium body, last line coral bold)

**Team section** (y ~5.3"):
- Label: "THE TEAM · WHY US" (11pt, orange, bold)
- 4 team cards in a row (each ~2.9" wide, white card):

| Initials | Color | Name | Role | School | Bio |
|---|---|---|---|---|---|
| LB | #FF2D55 | Laszlo B. | CEO & CO-FOUNDER | ETH Zurich | Market sizing, go-to-market, regulatory strategy. |
| DC | #FF6B35 | David Chernis | CTO & CO-FOUNDER | ETH Zurich | AI/ML engineering. Local model deployment. Built first AI doc tool. |
| JA | #FFB347 | Julian Aebi | BUSINESS & STRATEGY | HSG St. Gallen | Business strategy, partnerships, go-to-market execution. |
| II | #FF6B35 | Igor Isakov | BUSINESS DEVELOPMENT | HSG St. Gallen | Business development, clinic outreach, revenue operations. |

Each card: colored circle (0.55" diameter) with initials in white bold. Name: 11pt dark bold. Role: 7pt orange bold uppercase. Bio: 8pt medium.

**Footer**: "Built within ETH Zurich + HSG ecosystem · Technology & Entrepreneurship FS2026" (10pt, medium, centered)

---

### SLIDE 12: THE ASK

**Section label**: "THE ASK"
**Headline**: "We're raising €500K seed." (42pt, coral, bold)

**Layout**: 3 fund allocation cards + 3 milestone pills + 3 metric cards + closing statement

**3 fund allocation cards** (each ~3.8" wide, white card):
| Percentage | Amount | Label | Details |
|---|---|---|---|
| 40% | €200K | Product & engineering | Local model integration · ERP connectors · Handwriting recognition |
| 35% | €175K | Pilot clinics | 20 clinics · 3 months · Germany + Switzerland · IRB approval |
| 25% | €125K | Regulatory & compliance | GDPR audit · BDSG certification · DPO appointment |

Percentage: 28pt coral bold. Amount: 16pt dark bold. Label: 11pt orange bold. Details: 9pt medium.

**3 milestone pills** (white cards, each ~3.8" wide):
| Date | Milestone |
|---|---|
| Q2 2026 | Pilot live · 3 clinics |
| Q4 2026 | 20 clinics · Germany |
| Q2 2027 | Series A · 5 specialties |

Date: 11pt orange bold centered. Milestone: 11pt medium centered.

**3 key metric cards** (white cards, each ~3.8" wide):
| Value | Label |
|---|---|
| ~18mo | to break-even |
| 80% | gross margin |
| 6× | customer ROI |

Value: 24pt dark bold centered. Label: 10pt medium centered.

**Closing statement** (centered, y ~6.4"):
"The moment that matters is now." (22pt, coral, bold)

**Contact** (centered, y ~6.85"):
"pilot@kairon.health" (12pt, medium)

**Footer** (centered, y ~7.1"):
"Made in Switzerland · ETH Zurich ecosystem" (9pt, dim)

---

## ADDITIONAL CONTEXT FOR CONTENT DECISIONS

### Feedback to incorporate
- Text should be BIG and readable from a distance — this is a presentation, not a document
- Minimize text per slide — let big numbers and visuals carry the message
- The n=19 survey sample size should be prominent (it's small but real primary research)
- Address that the platform expands beyond psychiatry (mention neurology, cardiology, GP as future)
- Dragon NaturallySpeaking could be mentioned as dictation-only competitor in the competition table
- Hardware requirement: a mid-range GPU (RTX 3070 level) per clinic is sufficient
- Consider mentioning open-source angle for trust building
- Distribution: direct sales to group practices, professional associations, conference workshops
- The demo runs real Whisper + Llama 3.1 8B locally on a laptop GPU — this is a concrete proof point

### What NOT to include
- No "Made with Replit" badges
- No "Use arrows to navigate" hints  
- No slide counter (removed to maximize content space)
- No bullet points — use cards and stat blocks instead
- No 2x2 competitive quadrant — use a feature comparison TABLE (course requirement)
- Don't say "no competition" — acknowledge competitors exist but explain the structural gap
- Don't explain how LLMs work — the audience knows
- Don't inflate TAM — lead with the concrete $1.2B SAM and DACH numbers
