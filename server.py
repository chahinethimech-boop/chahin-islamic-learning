
import os

from flask import Flask, request, jsonify, send_from_directory
from google import genai

app = Flask(__name__, static_folder=".", static_url_path="")

# Keep your Gemini API key in an environment variable.
# Never put it in app.js or index.html.
API_KEY = os.environ.get("GEMINI_API_KEY")

client = genai.Client(api_key=API_KEY) if API_KEY else None
print("AVAILABLE GEMINI MODELS:")

for model in client.models.list():
    if "generateContent" in (model.supported_actions or []):
        print(model.name)

@app.route("/")
def home():
    return send_from_directory(".", "index.html")


@app.route("/api/ask", methods=["POST"])
def ask_gemini():
    if client is None:
        return jsonify({
            "error": "Gemini API key is not configured on the server."
        }), 500

    data = request.get_json(silent=True) or {}
    question = data.get("question", "").strip()

    if not question:
        return jsonify({"error": "Please enter a question."}), 400

    if len(question) > 4000:
        return jsonify({"error": "Please keep your question under 4000 characters."}), 400

    try:
        response = client.models.generate_content(
            model="gemini-3.8-flash",
            contents=(
                "You are a helpful educational assistant for an Islamic "
                "learning application. Give respectful, clear educational "
                "answers. For religious questions that require scholarly "
                "judgment, explain that the user should consult a qualified "
                "scholar.\n\n"
                + question
            )
        )

        answer = response.text or "No answer was returned."
        return jsonify({"answer": answer})

 except Exception as e:
    print("GEMINI ERROR:", repr(e), flush=True)
    return jsonify({
        "error": "Gemini could not answer right now. Check the server and API key."
    }), 500


if __name__ == "__main__":
    app.run(
    host="0.0.0.0",
    port=int(os.environ.get("PORT", 5000)),
    debug=False
)
