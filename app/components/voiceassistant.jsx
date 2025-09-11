"use client";
import { useState } from "react";

export default function VoiceAssistant() {
  const [listening, setListening] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  // 🎤 Start Speech Recognition
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setMessage(text);
      sendToGemini(text);
    };
  };

  // 🚀 Send to Gemini
  const sendToGemini = async (text) => {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: text }),
    });
    const data = await res.json();
    setResponse(data.reply);
    speak(data.reply);
  };

  // 🔊 Speak Response
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="p-4 text-center text-black">
      <button
        onClick={startListening}
        className={`p-4 rounded-full text-black text-xl shadow-lg transition ${
          listening ? "bg-red-500 animate-pulse" : "bg-purple-600"
        }`}
      >
        🎤
      </button>
      <p className="mt-4">You: {message}</p>
    </div>
  );
}