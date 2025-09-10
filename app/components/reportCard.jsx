"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // your client

export default function AddReportCard({ onCreated }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [voiceText, setVoiceText] = useState("");

  // read file and convert to base64
  const fileToBase64 = (file) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.onload = () => res(reader.result);
      reader.onerror = (e) => rej(e);
      reader.readAsDataURL(file);
    });

  const handleCreate = async () => {
    const { data } = await supabase.auth.getSession();
    const token = data?.session?.access_token;
    if (!token) return alert("Not logged in");

    let imageBase64 = null;
    if (file) {
      imageBase64 = await fileToBase64(file);
    }

    const res = await fetch("/api/reports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        imageBase64, // or imageUrl
        voiceText, // optional voice transcript
      }),
    });

    const result = await res.json();
    if (!res.ok) {
      alert(result.error || "Failed to create report");
      return;
    }

    // result.report contains the new report object
    onCreated && onCreated(result.report);
    // You can also update UI to show it in Recent Issues immediately
  };

  return (
    <div className="report-card">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      {/* voice recording/recognition: capture and set voiceText */}
      <input
        placeholder="Voice transcript (optional)"
        value={voiceText}
        onChange={(e) => setVoiceText(e.target.value)}
      />
      <button onClick={handleCreate}>Create Report</button>
    </div>
  );
}
