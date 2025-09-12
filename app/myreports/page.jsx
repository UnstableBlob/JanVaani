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
import { useRouter } from "next/navigation";
import issueimage1 from "../../images/issue1.png";
import issueimage2 from "../../images/issue2.jpg";


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

const ReportDetails1 = () => {
  return (
    <div className="max-w-md mx-auto bg-white font-mulish flex flex-col">
      {/* Header */}
      {/* <div className="flex items-center justify-between p-4 relative">
        <Image src={logo} alt="Logo" className="w-10 object-contain" />
        <PlaceholderAvatar />
        <span
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(to right, rgba(247,136,10,1) 0%, rgba(255,255,255,1) 50%, rgba(26,143,62,1) 100%)",
          }}
        />
      </div> */}


      <main className="flex-grow px-4 pt-4 pb-20">
        {/* Report Title and Meta */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900">Pothole near main road</h2>
          <div className="flex space-x-2 text-xs text-gray-500 mt-1">
            <span>9 mins ago</span>
            <span>12:31 PM</span>
          </div>
          <p className="text-base text-gray-700 mt-1">Club Road, Ranchi</p>

          {/* Image placeholder */}
          <div className="mt-4 rounded-lg h-40 w-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
            <Image src={issueimage1} alt="Issue" className="h-full w-full object-cover rounded-lg"/>
          </div>
        </section>

        {/* Progress Tracker */}
        <nav className="mt-6 px-2">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border-4 border-indigo-600 bg-indigo-600"></div>
            <div className="flex-1 h-1.5 bg-gray-300 mx-3 rounded"></div>
            <div className="w-5 h-5 rounded-full border-4 border-gray-300 bg-gray-200"></div>
            <div className="flex-1 h-1.5 bg-gray-300 mx-3 rounded"></div>
            <div className="w-5 h-5 rounded-full border-4 border-gray-300 bg-gray-200"></div>
          </div>
          <div className="flex justify-between text-sm mt-1 px-1">
            <span className="text-indigo-600 font-semibold">Sent</span>
            <span className="text-gray-400">Acknowledgement</span>
            <span className="text-gray-400">Resolved</span>
          </div>
        </nav>

        {/* Status Descriptions
        <section className="mt-8 space-y-6 text-gray-700 text-base">
          <div>
            <p className="font-bold text-gray-900">Sent</p>
            <p className="mt-1">
              Your report has been submitted successfully and shared with the municipal team.
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900">Acknowledgement</p>
            <p className="mt-1">
              The concerned department has reviewed your report and assigned it for action.
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900">Resolved</p>
            <p className="mt-1">
              The problem has been fixed. Thank you for helping improve your community!
            </p>
          </div>
        </section> */}
      </main>

      {/* Bottom Navigation Bar */}
          
            {/* <div className="sticky bottom-5 left-0 w-full max-w-xs mx-auto px-1 py-1 flex justify-between items-center z-20 bg-[linear-gradient(to_right,_rgba(247,_136,_10,_1)_0%,_rgba(255,_255,_255,_1)_50%,_rgba(26,_143,_62,_1)_100%)] rounded-full shadow">
              <div className="w-full max-w-sm mx-auto px-4 py-2 bg-white flex justify-between items-center z-20 rounded-full shadow">
                <FaHome className="text-black" style={{ width: '30px', height: '30px' }} />
                <IoAlertCircleSharp className="text-black" style={{ width: '30px', height: '30px' }} />
                <div className="w-8 h-8 transform scale-200 bg-[#009688] rounded-full shadow flex items-center justify-center">
                 <CiMedicalCross className="text-white" />
                </div>
                <FaBell className="text-black" style={{ width: '30px', height: '30px' }} />
                <FaUser className="text-black" style={{ width: '30px', height: '30px' }} />
              </div>
            </div> */}
          </div> 
  );
}

const ReportDetails2 = () => {
  return (
    <div className="max-w-md mx-auto bg-white font-mulish flex flex-col">
 
      <main className="flex-grow px-4 pt-4 pb-20">
        {/* Report Title and Meta */}
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900">Garbage not collected</h2>
          <div className="flex space-x-2 text-xs text-gray-500 mt-1">
            <span>2 days ago</span>
            <span> 10:22 AM</span>
          </div>
          <p className="text-base text-gray-700 mt-1">Rathod Street, Ranchi</p>

          {/* Image placeholder */}
          <div className="mt-4 rounded-lg h-40 w-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg">
            <Image src={issueimage2} alt="Issue" className="h-full w-full object-cover rounded-lg"/>
          </div>
        </section>

        {/* Progress Tracker */}
        <nav className="mt-6 px-2">
          <div className="flex items-center">
            <div className="w-5 h-5 rounded-full border-4 border-indigo-600 bg-indigo-600"></div>
            <div className="flex-1 h-1.5 bg-indigo-600 mx-3 rounded"></div>
            <div className="w-5 h-5 rounded-full border-4 border-indigo-600 bg-indigo-600"></div>
            <div className="flex-1 h-1.5 bg-indigo-600 mx-3 rounded"></div>
            <div className="w-5 h-5 rounded-full border-4 border-indigo-600 bg-indigo-600"></div>
          </div>
          <div className="flex justify-between text-sm mt-1 px-1">
            <span className="text-indigo-600 font-semibold">Sent</span>
            <span className="text-indigo-600">Acknowledgement</span>
            <span className="text-indigo-600">Resolved</span>
          </div>
        </nav>

        {/* Status Descriptions
        <section className="mt-8 space-y-6 text-gray-700 text-base">
          <div>
            <p className="font-bold text-gray-900">Sent</p>
            <p className="mt-1">
              Your report has been submitted successfully and shared with the municipal team.
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900">Acknowledgement</p>
            <p className="mt-1">
              The concerned department has reviewed your report and assigned it for action.
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900">Resolved</p>
            <p className="mt-1">
              The problem has been fixed. Thank you for helping improve your community!
            </p>
          </div>
        </section> */}
      </main>

      {/* Bottom Navigation Bar */}
          
            {/* <div className="sticky bottom-5 left-0 w-full max-w-xs mx-auto px-1 py-1 flex justify-between items-center z-20 bg-[linear-gradient(to_right,_rgba(247,_136,_10,_1)_0%,_rgba(255,_255,_255,_1)_50%,_rgba(26,_143,_62,_1)_100%)] rounded-full shadow">
              <div className="w-full max-w-sm mx-auto px-4 py-2 bg-white flex justify-between items-center z-20 rounded-full shadow">
                <FaHome className="text-black" style={{ width: '30px', height: '30px' }} />
                <IoAlertCircleSharp className="text-black" style={{ width: '30px', height: '30px' }} />
                <div className="w-8 h-8 transform scale-200 bg-[#009688] rounded-full shadow flex items-center justify-center">
                 <CiMedicalCross className="text-white" />
                </div>
                <FaBell className="text-black" style={{ width: '30px', height: '30px' }} />
                <FaUser className="text-black" style={{ width: '30px', height: '30px' }} />
              </div>
            </div> */}
          </div> 
  );
}

const Issues = () => {
  const [expanded1, setExpanded1] = React.useState(false);
const [expanded2, setExpanded2] = React.useState(false);

return (
  <>

            {/*issue 1*/}
              <div className="flex items-center mb-3 last:mb-0">
                <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                    <Image src={issueimage1} alt="Issue" className="w-full h-full object-cover" />
                </div>
              <div className="flex-1 ml-3">
                <span className="font-bold text-sm text-gray-700">
                  Pothole near main road
                </span>
                <div className="text-xs text-gray-500">9 mins ago 12:31 PM</div>
              </div>
                <PlaceholderSpinner />
                <button
                className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
                onClick={() => setExpanded1(!expanded1)}
              >
                {expanded1 ? "Close" : "Expand"}
              </button>
              
            </div>
            {(expanded1) && (
            <div className="mb-6 p-4 bg-gray-100 rounded-xl shadow-md transition-all duration-300">
              {/* Your expanded content div here */}
              <ReportDetails1 report={null} /> 
              {/* Update ReportStatus component as needed to support no issue param */}
            </div>
          )}

            
            
            {/*issue 2*/}
            <div className="flex items-center mb-3 last:mb-0">
              <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
                    <Image src={issueimage2} alt="Issue" className="w-full h-full object-cover" />
                </div>
              <div className="flex-1 ml-3">
                <span className="font-bold text-sm text-gray-700">
                  Garbage not collected
                </span>
                <div className="text-xs text-gray-500">2 days ago 10:22 AM</div>
              </div>
                <FaCircleCheck className="text-[#3C9718]"/>
                <button
        className="ml-2 px-2 py-1 bg-green-500 text-white rounded"
        onClick={() => setExpanded2(!expanded2)}
      >
        {expanded2 ? "Close" : "Expand"}
      </button>
            </div>

            {expanded2 && (
      <div className="mb-6 p-4 bg-gray-100 rounded-xl shadow-md transition-all duration-300">
        {/* Your expanded content div here */}
        <ReportDetails2 report={null} /> 
        {/* Update ReportStatus component as needed to support no issue param */}
      </div>
    )}
    {/* Independent toggle buttons */}
      
      



    {/* Issue list without expand buttons */}
    {/* {issues.map((issue) => (
      <div
        className="flex items-center mb-3 last:mb-0"
        key={issue._id}
      >
        <PlaceholderIssueImage src={issue.imageUrl} />
        <div className="flex-1 ml-3">
          <span className="font-bold text-sm text-gray-700">{issue.title}</span>
          <div className="text-xs text-gray-500">{issue.createdAt}</div>
        </div>
        {issue.status === "pending" ? (
          <PlaceholderSpinner />
        ) : (
          <FaCircleCheck className="text-[#3C9718]" />
        )}
      </div>
    ))} */}
  </>
);
}

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

    const [department, setDepartment] = useState("");
  

  const router = useRouter();
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
          <div className="rounded-lg shadow-md  p-3 overflow-y-auto">
            <h2 className="font-bold text-lg text-black mb-2">Recent Issues</h2>
            

            <Issues />
            
            {/* {issues.map((issue) => {
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
            })} */}
          </div>
        </div>
        
        {/* Bottom Navigation Bar */}
        <div className="sticky bottom-5 left-0 w-full max-w-xs mx-auto px-1 py-1 flex justify-between items-center z-20 bg-[linear-gradient(to_right,_rgba(247,_136,_10,_1)_0%,_rgba(255,_255,_255,_1)_50%,_rgba(26,_143,_62,_1)_100%)] rounded-full shadow">
          <div className="w-full max-w-sm mx-auto px-4 py-2 bg-white flex justify-between items-center z-20 rounded-full shadow">
            <FaHome 
            onClick={() => router.push('/')}
            className="text-black" style={{ width: "30px", height: "30px" }} />
            <IoAlertCircleSharp 
            onClick={() => router.push('/myreports')}
            className="text-black" style={{ width: "30px", height: "30px" }} />
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
              {showForm && (
                <div className="absolute inset-0 bg-[#00000000] bg-opacity-40 flex items-center justify-center z-50">
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
                    {/* <input
                          className="w-full border border-black p-2 rounded "
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                        /> */}
                        {/* ✅ Camera + Gallery */}
                      <input
                        className="w-full border border-black p-2 rounded"
                        type="file"
                        accept="image/*"
                        capture="environment"
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
        
                    
                    <select
                        className="w-full border border-black p-2 mb-3 rounded text-black"
                        value={department}
                        onChange={e => setDepartment(e.target.value)}
                      >
                        <option value="">Select Department</option>
                        <option value="1"></option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                        <option value="4">Department 4</option>
                      </select>
                      <div className="flex justify-center gap-2 pb-4 ">
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
