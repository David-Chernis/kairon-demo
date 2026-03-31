"""Local Whisper transcription server."""
from http.server import HTTPServer, BaseHTTPRequestHandler
import json, tempfile, os, whisper

print("Loading Whisper model (base)...")
model = whisper.load_model("base")
print("Whisper ready.")

class Handler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/transcribe":
            length = int(self.headers.get("Content-Length", 0))
            audio_data = self.rfile.read(length)
            with tempfile.NamedTemporaryFile(suffix=".webm", delete=False) as f:
                f.write(audio_data)
                tmp_path = f.name
            try:
                result = model.transcribe(tmp_path, language="en")
                text = result["text"].strip()
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"text": text}).encode())
                print(f"[Whisper] Transcribed: {text[:80]}")
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode())
                print(f"[Whisper] Error: {e}")
            finally:
                os.unlink(tmp_path)
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def log_message(self, format, *args): pass

print("Whisper server: http://localhost:8787/transcribe")
HTTPServer(("", 8787), Handler).serve_forever()
