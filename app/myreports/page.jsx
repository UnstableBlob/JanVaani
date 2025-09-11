"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../images/logobig.png";
import { FaSearch, FaMicrophone, FaBell, FaUser, FaHome } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoAlertCircleSharp } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";
import { createClient } from "@supabase/supabase-js";
import ReportStatus from "./testreport/page";
import VoiceAssistant from "../components/voiceassistant";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);

const PlaceholderIssueImage = ({ src }) => (
  src ? (
    <img src={src} alt="Issue" className="w-12 h-12 object-cover rounded" />
  ) : (
    <div className="w-12 h-12 bg-black rounded"></div>
  )
);

const PlaceholderSpinner = () => (
  <div className="w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
);

export default function Myreports() {
  const [issues, setIssues] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  // Fetch recent issues of logged-in user
  useEffect(() => {
    const fetchReports = async () => {
      const { data } = await supabase.auth.getSession();
      const token = data?.session?.access_token;
      const res = await fetch("/api/reports", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      setIssues(json.reports || []);
    };
    fetchReports();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      setDescription(event.results.transcript);
    };
    recognition.start();
  };

  const handleSubmit = async () => {
    try {
      const { data } = await supabase.auth.getSession();
      const token = data?.session?.access_token;
      let imageUrl = null;
      // Image upload to Cloudinary
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_PRESET
        );
        const uploadRes = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.secure_url;
      }
      // Create report
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description, imageUrl }),
      });
      if (res.ok) {
        const newReport = await res.json();
        setIssues([newReport, ...issues]);
        setShowForm(false);
        setTitle("");
        setDescription("");
        setImage(null);
        setPreview(null);
      } else {
        alert("Failed to create report");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting report");
    }
  };

  return (
    <div className="w-full mx-auto bg-white min-h-screen rounded shadow-md flex flex-col relative">
      {/* Header */}
      <div className="flex items-center justify-between p-2 relative">
        <Image src={logo} alt="Logo" className="w-10 object-contain" />
        <PlaceholderAvatar />
        <span
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(to right, rgba(247,136,10,1) 0%, rgba(255,255,255,1) 50%, rgba(26,143,62,1) 100%)",
          }}
        />
      </div>

      <div className="w-full max-w-2xl mx-auto bg-white min-h-screen flex flex-col relative">
        {/* Recent Issues Card */}
        <div className="px-4 py-2 flex-1 overflow-auto">
          <div className="rounded-lg shadow border border-black p-3 overflow-y-auto">
            <h2 className="font-bold text-lg text-black mb-2">Recent Issues</h2>
            {issues.map((issue) => {
              const isExpanded = expandedId === issue._id;
              return (
                <div
                  className={`flex flex-col mb-3 last:mb-0 transition-all duration-300 ${
                    isExpanded ? "bg-gray-100 p-4 rounded-xl shadow-lg" : ""
                  }`}
                  key={issue._id}
                >
                  <div className="flex items-center">
                    <PlaceholderIssueImage src={issue.imageUrl} />
                    <div className="flex-1 ml-3">
                      <span className="font-bold text-sm text-gray-700">
                        {issue.title}
                      </span>
                      <div className="text-xs text-gray-500">
                        {issue.createdAt}
                      </div>
                    </div>
                    {issue.status === "pending" ? (
                      <PlaceholderSpinner />
                    ) : (
                      <FaCircleCheck className="text-[#3C9718]" />
                    )}
                    <button
                      className="ml-3 px-2 py-1 bg-blue-500 text-white rounded text-xs"
                      onClick={() =>
                        setExpandedId(isExpanded ? null : issue._id)
                      }
                    >
                      {isExpanded ? "Close" : "Expand"}
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="mt-2">
                      <ReportStatus report={issue} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* Bottom Navigation Bar */}
        <div className="sticky bottom-5 left-0 w-full max-w-xs mx-auto px-1 py-1 flex justify-between items-center z-20 bg-[linear-gradient(to_right,_rgba(247,_136,_10,_1)_0%,_rgba(255,_255,_255,_1)_50%,_rgba(26,_143,_62,_1)_100%)] rounded-full shadow">
          <div className="w-full max-w-sm mx-auto px-4 py-2 bg-white flex justify-between items-center z-20 rounded-full shadow">
            <FaHome className="text-black" style={{ width: "30px", height: "30px" }} />
            <IoAlertCircleSharp className="text-black" style={{ width: "30px", height: "30px" }} />
            <div
              onClick={() => setShowForm(true)}
              className="w-8 h-8 transform scale-200 bg-[#009688] rounded-full shadow flex items-center justify-center"
            >
              <CiMedicalCross className="text-white" />
            </div>
            <FaBell className="text-black" style={{ width: "30px", height: "30px" }} />
            <FaUser className="text-black" style={{ width: "30px", height: "30px" }} />
          </div>
        </div>
        {/* Report Modal */}
        {/* Report Modal */}
              {showForm && (
                <div className="absolute inset-0 bg-[#00000000] bg-opacity-40 flex items-center justify-center z-30">
                  <div className="bg-white p-6 rounded-lg w-11/12 max-w-md shadow-lg">
                    <h2 className="text-lg text-black font-bold mb-4">Create Report</h2>
        
                    <input
                      type="text"
                      placeholder="Title"
                      className="w-full border border-black p-2 mb-3 rounded text-black"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
        
                    <textarea
                      placeholder="Description"
                      className="w-full border border-black p-2 mb-3 rounded text-black"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <input
                          className="w-full border border-black p-2 rounded "
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
        
                    <VoiceAssistant/>
        
                    {preview && (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-40 object-cover mb-3 rounded"
                      />
                    )}
        
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setShowForm(false)}
                        className="px-4 py-2 bg-gray-300 rounded text-black"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-green-500 text-white rounded"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
      </div>
    </div>
  );
}
