import React from "react";

const PlaceholderLogo = () => (
  <div className="w-8 h-8 bg-gray-300 rounded"></div>
);
const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);
const PlaceholderIssueImage = () => (
  <div className="w-12 h-12 bg-gray-200 rounded"></div>
);
const PlaceholderSpinner = () => (
  <div className="w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
);
const PlaceholderCheck = () => (
  <div className="w-5 h-5 rounded-full bg-green-400 flex items-center justify-center">
    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20">
      <path d="M5 13l4 4L15 7" />
    </svg>
  </div>
);
const PlaceholderIcon = ({ children }) => (
  <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">{children}</div>
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

export default function CivicIssueReportingApp() {
  return (
    <div className="w-full max-w-md mx-auto bg-white min-h-screen rounded shadow-md overflow-visible relative flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <PlaceholderLogo />
        <PlaceholderAvatar />
      </div>

      {/* Search Bar */}
      <div className="px-4 mb-3">
        <div className="flex items-center bg-white rounded-lg shadow border px-3 py-2">
          <input
            className="flex-1 bg-transparent outline-none text-gray-700 text-sm md:text-base"
            placeholder="Search issues"
            type="text"
          />
          <PlaceholderIcon>
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <circle cx="9" cy="9" r="7"/>
              <line x1="15" y1="15" x2="19" y2="19" />
            </svg>
          </PlaceholderIcon>
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
        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold shadow text-sm md:text-base">
          Report an issue
        </button>
        <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold shadow text-sm md:text-base">
          My reports
        </button>
      </div>

      {/* Recent Issues Card */}
      <div className="px-4 py-2 flex-1 overflow-auto">
        <div className="bg-white rounded-lg shadow border p-3 max-h-[300px] md:max-h-[400px] overflow-y-auto">
          <h2 className="font-bold text-lg mb-2">Recent Issues</h2>
          {issues.map((issue) => (
            <div className="flex items-center mb-3 last:mb-0" key={issue.id}>
              <PlaceholderIssueImage />
              <div className="flex-1 ml-3">
                <span className="font-bold text-sm text-gray-700">{issue.title}</span>
                <div className="text-xs text-gray-500">{issue.time}</div>
              </div>
              {issue.status === "pending" ? <PlaceholderSpinner /> : <PlaceholderCheck />}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="sticky bottom-0 left-0 w-full max-w-md mx-auto px-4 py-2 bg-white shadow border-t flex justify-between items-center z-20">
        <PlaceholderIcon>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <rect x="3" y="7" width="14" height="10" rx="2" />
            <rect x="7" y="3" width="6" height="4" />
          </svg>
        </PlaceholderIcon>
        <PlaceholderIcon>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8" />
            <text x="10" y="14" textAnchor="middle" fontSize="10" fill="gray">!</text>
          </svg>
        </PlaceholderIcon>
        <div className="w-12 h-12 bg-green-500 rounded-full shadow flex items-center justify-center -mt-6 border-4 border-white">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <line x1="10" y1="5" x2="10" y2="15" />
            <line x1="5" y1="10" x2="15" y2="10" />
          </svg>
        </div>
        <PlaceholderIcon>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path d="M10 3v1M10 16v1M4.22 4.22l.7.7M15.08 15.08l.7.7M3 10h1M16 10h1M4.22 15.08l.7-.7M15.08 4.22l.7-.7" />
            <circle cx="10" cy="13" r="3"/>
          </svg>
        </PlaceholderIcon>
        <PlaceholderIcon>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="8" r="3" />
            <rect x="7" y="13" width="6" height="4" rx="2"/>
          </svg>
        </PlaceholderIcon>
      </div>
    </div>
  );
}
