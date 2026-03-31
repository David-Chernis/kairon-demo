# Kairon Demo

Local AI documentation platform for psychiatric clinics. This demo shows the clinical workflow: session recording, AI-powered document generation, review, and EHR integration.

## Quick Start

```bash
cp .env.example .env  # Add your API key
npm install
npm start
```

Open http://localhost:3003

## Backends

The server tries backends in order:
1. **Ollama** (local) - Install [Ollama](https://ollama.com), run `ollama pull llama3:8b`
2. **OpenAI** - Set `OPENAI_API_KEY` in `.env`
3. **Fallback** - Pre-generated clinical content (always works)

## Demo Flow

1. Click **Start session** - live transcript appears
2. Click **Stop & generate** - processing overlay, then 3 documents
3. **Edit** / **Approve** individual documents
4. **Approve all & send to SAP** - transitions to dashboard

Made in Switzerland. ETH Zurich ecosystem.
