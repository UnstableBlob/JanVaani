"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import logo from "../images/logobig.png";
import { FaSearch,FaMicrophone,FaBell,FaUser, FaHome} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoAlertCircleSharp } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";
import { createClient } from "@supabase/supabase-js";
import VoiceAssistant from "./components/voiceassistant";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// ---- UI placeholders ----
const PlaceholderLogo = () => (
  <Image src={logo} alt="Logo" className="w-10 object-contain" />
);

const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);

const PlaceholderIssueImage = ({ src }) => (
  <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden flex items-center justify-center">
    {src ? (
      <img src={src} alt="Issue" className="w-full h-full object-cover" />
    ) : null}
  </div>
);

const PlaceholderSpinner = () => (
  <div className="w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
);

const PlaceholderCheck = () => (
  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
    <svg
      className="w-3 h-3 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 20 20"
    >
      <path d="M5 13l4 4L15 7" />
    </svg>
  </div>
);

const PlaceholderIcon = ({ children }) => (
  <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
    {children}
  </div>
);

export default function CivicIssueReportingApp() {
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

  // const handleVoiceInput = () => {
  //   const recognition = new (window.SpeechRecognition ||
  //     window.webkitSpeechRecognition)();
  //   recognition.lang = "en-US";
  //   recognition.onresult = (event) => {
  //     setDescription(event.results[0][0].transcript);
  //   };
  //   recognition.start();
  // };

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

    const router = useRouter();


  return (
    <div className="w-full mx-auto bg-white min-h-screen rounded shadow-md flex flex-col relative">
      {/* Header */}
      <div className="flex items-center justify-between p-2 relative">
        <PlaceholderLogo />
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
      

      {/* Search Bar */}
      <div className="px-4 pt-5 mb-3">
        <div className="flex items-center bg-white rounded-lg shadow border px-3 py-2">
          <FaSearch className="text-black" />
          <input
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm md:text-base"
            placeholder="Search issues"
            type="text"
          />
          <FaMicrophone className="text-black" />
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="px-4 mb-3">
        <div className="w-full h-48 md:h-64 bg-gray-300 rounded-lg border border-gray-400 flex items-center justify-center text-gray-600 font-semibold">
          Map Placeholder
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 justify-center pb-2 px-4">
        <button
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold shadow text-sm md:text-base"
          onClick={() => setShowForm(true)}
        >
          Report an issue
        </button>
        <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold shadow text-sm md:text-base"
        onClick={() => router.push('/myreports')}>
          My reports
        </button>
      </div>

      {/* Recent Issues */}
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
                <PlaceholderCheck />
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

        <div

        onClick={() => setShowForm(true)}

        className="w-8 h-8 transform scale-200 bg-[#009688] rounded-full shadow flex items-center justify-center">

        <CiMedicalCross className="text-white" />

        </div>

        <FaBell className="text-black" style={{ width: '30px', height: '30px' }} />

        <FaUser className="text-black" style={{ width: '30px', height: '30px' }} />

        </div>

        </div>

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

// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import logo from "../images/logobig.png";
// import { FaSearch, FaMicrophone, FaBell, FaUser, FaHome } from "react-icons/fa";
// import { FaCircleCheck } from "react-icons/fa6";
// import { IoAlertCircleSharp } from "react-icons/io5";
// import { CiMedicalCross } from "react-icons/ci";
// import { createClient } from "@supabase/supabase-js";

// // --- Supabase client ---
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// // --- Placeholders ---
// const PlaceholderAvatar = () => (
//   <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
//     <span className="text-xs text-gray-600 font-bold">SM</span>
//   </div>
// );

// const PlaceholderIssueImage = ({ src }) =>
//   src ? (
//     <Image src={src} alt="Issue" width={48} height={48} className="rounded" />
//   ) : (
//     <div className="w-12 h-12 bg-black rounded"></div>
//   );

// const PlaceholderSpinner = () => (
//   <div className="w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
// );

// export default function CivicIssueReportingApp() {
//   const [issues, setIssues] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [formOpen, setFormOpen] = useState(false);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState(null);

//   // 🎤 Voice to text (browser API)
//   const startVoiceInput = () => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;
//     if (!SpeechRecognition) {
//       alert("Speech Recognition not supported in this browser.");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US";

//     recognition.onresult = (event) => {
//       setDescription(event.results[0][0].transcript);
//     };

//     recognition.start();
//   };

//   // 📌 Fetch user issues
//   useEffect(() => {
//     const fetchReports = async () => {
//       setLoading(true);
//       const { data } = await supabase.auth.getSession();
//       const token = data?.session?.access_token;
//       if (!token) return;

//       const res = await fetch("/api/reports", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       const json = await res.json();
//       setIssues(json.reports || []);
//       setLoading(false);
//     };
//     fetchReports();
//   }, []);

//   // 📌 Handle new report submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const { data } = await supabase.auth.getSession();
//     const token = data?.session?.access_token;

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     if (image) formData.append("image", image);

//     const res = await fetch("/api/reports", {
//       method: "POST",
//       headers: { Authorization: `Bearer ${token}` },
//       body: formData,
//     });

//     const json = await res.json();
//     setIssues((prev) => [json.report, ...prev]);
//     setFormOpen(false);
//     setTitle("");
//     setDescription("");
//     setImage(null);
//     setLoading(false);
//   };

//   return (
//     <div className="w-full mx-auto bg-white min-h-screen rounded shadow-md overflow-visible relative flex flex-col">
//       {/* Header */}
//       <div className="flex items-center justify-between p-2 relative">
//         <Image src={logo} alt="Logo" className="w-10 object-contain" />
//         <PlaceholderAvatar />
//         <span
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             right: 0,
//             height: "3px",
//             background:
//               "linear-gradient(to right, rgba(247,136,10,1) 0%, rgba(255,255,255,1) 50%, rgba(26,143,62,1) 100%)",
//           }}
//         />
//       </div>

//       {/* Search Bar */}
//       <div className="px-4 pt-5 mb-3">
//         <div className="flex items-center bg-white rounded-lg shadow border px-3 py-2">
//           <FaSearch className="text-black" />
//           <input
//             className="flex-1 bg-transparent outline-none text-gray-700 text-sm md:text-base"
//             placeholder="Search issues"
//             type="text"
//           />
//           <FaMicrophone className="text-black" />
//         </div>
//       </div>

//       {/* Map Placeholder */}
//       <div className="px-4 mb-3">
//         <div className="w-full h-48 md:h-64 bg-gray-300 rounded-lg border border-gray-400 flex items-center justify-center text-gray-600 font-semibold">
//           Map Placeholder
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-2 justify-center pb-2 px-4">
//         <button
//           onClick={() => setFormOpen(true)}
//           className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold shadow text-sm md:text-base"
//         >
//           Report an issue
//         </button>
//         <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold shadow text-sm md:text-base">
//           My reports
//         </button>
//       </div>

//       {/* Report Form */}
//       {formOpen && (
//         <form
//           onSubmit={handleSubmit}
//           className="p-4 bg-gray-100 rounded-lg mx-4 mb-4 shadow"
//         >
//           <input
//             type="text"
//             placeholder="Title"
//             className="w-full mb-2 px-3 py-2 border rounded"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//           <textarea
//             placeholder="Description"
//             className="w-full mb-2 px-3 py-2 border rounded"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//           <input
//             type="file"
//             accept="image/*"
//             className="mb-2"
//             onChange={(e) => setImage(e.target.files?.[0] || null)}
//           />
//           <button
//             type="button"
//             onClick={startVoiceInput}
//             className="mb-2 px-3 py-1 bg-green-500 text-white rounded"
//           >
//             🎤 Speak
//           </button>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold shadow"
//           >
//             {loading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       )}

//       {/* Recent Issues */}
//       <div className="px-4 py-2 flex-1 overflow-auto">
//         <div
//           className="rounded-lg shadow border border-black p-5 max-h-[300px] md:max-h-[400px] overflow-y-auto"
//           style={{ backgroundColor: "#EBEAEA" }}
//         >
//           <h2 className="font-bold text-lg text-black mb-2">Recent Issues</h2>
//           {loading && <p>Loading...</p>}
//           {!loading &&
//             issues.map((issue) => (
//               <div className="flex items-center mb-3 last:mb-0" key={issue._id}>
//                 <PlaceholderIssueImage src={issue.imageUrl} />
//                 <div className="flex-1 ml-3">
//                   <span className="font-bold text-sm text-gray-700">
//                     {issue.title}
//                   </span>
//                   <div className="text-xs text-gray-500">
//                     {issue.description}
//                   </div>
//                 </div>
//                 {issue.status === "pending" ? (
//                   <PlaceholderSpinner />
//                 ) : (
//                   <FaCircleCheck className="text-[#3C9718]" />
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>

//       {/* Bottom Navigation */}
//       <div className="sticky bottom-5 left-0 w-full max-w-xs mx-auto px-1 py-1 flex justify-between items-center z-20 bg-[linear-gradient(to_right,_rgba(247,_136,_10,_1)_0%,_rgba(255,_255,_255,_1)_50%,_rgba(26,_143,_62,_1)_100%)] rounded-full shadow">
//         <div className="w-full max-w-sm mx-auto px-4 py-2 bg-white flex justify-between items-center z-20 rounded-full shadow">
//           <FaHome
//             className="text-black"
//             style={{ width: "30px", height: "30px" }}
//           />
//           <IoAlertCircleSharp
//             className="text-black"
//             style={{ width: "30px", height: "30px" }}
//           />
//           <div className="w-8 h-8 transform scale-200 bg-[#009688] rounded-full shadow flex items-center justify-center">
//             <CiMedicalCross className="text-white" />
//           </div>
//           <FaBell
//             className="text-black"
//             style={{ width: "30px", height: "30px" }}
//           />
//           <FaUser
//             className="text-black"
//             style={{ width: "30px", height: "30px" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
