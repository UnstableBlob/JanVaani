"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from '../../images/logobig.png';
import { FaSearch,FaMicrophone,FaBell,FaUser, FaHome} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

import { IoAlertCircleSharp } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";
import { createClient } from "@supabase/supabase-js";


const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);


const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">d
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);

const PlaceholderIssueImage = () => (
  <div className="w-12 h-12 bg-black rounded"></div>
);
const PlaceholderSpinner = () => (
  <div className="w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
);


const issues = [
  {
    id: 1,
    status: "pending",
    time: "9 mins ago",
    title: "Pothole near Main Rd"
  },
  {
    id: 2,
    status: "resolved",
    time: "2 hours ago",
    title: "Pothole near Main Rd"
  },
  {
    id: 3,
    status: "resolved",
    time: "3 hours ago",
    title: "Pothole near Main Rd"
  }
];





export default function Myreports() {

  const [issues, setIssues] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

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
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      setDescription(event.results[0][0].transcript);
    };
    recognition.start();
  };

  const handleSubmit = async () => {
    try {
      const { data } = await supabase.auth.getSession();
      const token = data?.session?.access_token;

      let imageUrl = null;

      // Upload image to Cloudinary if selected
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

      // Send report to API
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          imageUrl,
        }),
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
    <div className="w-full mx-auto bg-white min-h-screen rounded shadow-md overflow-visible relative flex flex-col">
      {/* Header */}
      <div
  className="flex items-center justify-between p-2 relative"
  style={{ position: 'relative' }}
>
  <Image src={logo} alt="Logo" className="w-10 object-contain" />
  <PlaceholderAvatar />
  <span
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
        height: '3px', // thickness of the line
      background: 'linear-gradient(to right, rgba(247, 136, 10, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(26, 143, 62, 1) 100%)',
    }}
    />
    </div>


      {/* Recent Issues Card */}
       <div className="px-4 py-2 flex-1 overflow-auto">
        <div className="rounded-lg shadow border border-black p-3 max-h-[300px] overflow-y-auto">
          <h2 className="font-bold text-lg text-black mb-2">Recent Issues</h2>
          {issues.map((issue) => (
            <div className="flex items-center mb-3 last:mb-0" key={issue._id}>
              <PlaceholderIssueImage src={issue.imageUrl} />
              <div className="flex-1 ml-3">
                <span className="font-bold text-sm text-gray-700">
                  {issue.title}
                </span>
                <div className="text-xs text-gray-500">{issue.createdAt}</div>
              </div>
              {issue.status === "pending" ? (
                <PlaceholderSpinner />
              ) : (
                <FaCircleCheck className="text-[#3C9718]" />
              )}
            </div>
          ))}
        </div>
      </div>
    
     {/* Bottom Navigation Bar */}
    
      <div className="sticky bottom-5 left-0 w-full max-w-xs mx-auto px-1 py-1 flex justify-between items-center z-20 bg-[linear-gradient(to_right,_rgba(247,_136,_10,_1)_0%,_rgba(255,_255,_255,_1)_50%,_rgba(26,_143,_62,_1)_100%)] rounded-full shadow">
        <div className="w-full max-w-sm mx-auto px-4 py-2 bg-white flex justify-between items-center z-20 rounded-full shadow">
          <FaHome className="text-black" style={{ width: '30px', height: '30px' }} />
          <IoAlertCircleSharp className="text-black" style={{ width: '30px', height: '30px' }} />
          <div className="w-8 h-8 transform scale-200 bg-[#009688] rounded-full shadow flex items-center justify-center">
           <CiMedicalCross className="text-white" />
          </div>
          <FaBell className="text-black" style={{ width: '30px', height: '30px' }} />
          <FaUser className="text-black" style={{ width: '30px', height: '30px' }} />
        </div>
      </div>
    </div> 
      );
    }
    