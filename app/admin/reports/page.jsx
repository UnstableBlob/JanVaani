"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../images/logobig.png";
import { RxHamburgerMenu } from "react-icons/rx";

// Placeholder pothole image; replace with actual Image import
const potholeImg = "/images/pothole.jpg";

export default function ReportsPage() {
  const [isOpen, setIsOpen] = useState(false);

const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);

  // Dummy data array for demo; replace with API data
  const issues = [
    {
      date: "05 Sept 2025, 10:45 AM",
      reporter: "Vivek Desai",
      name: "Pothole near Main Road",
      location: "Jamshedpur",
      authority: "Public Works Department (PWD) – Roads",
      assigned: "Mr. Rajesh Mehta",
    },
    {
      date: "06 Sept 2025, 08:20 PM",
      reporter: "Aarti Sharma",
      name: "Streetlight not working",
      location: "Ranchi",
      authority: "Electricity Board – Street Lighting Division",
      assigned: "Mr. Anil Kumar",
    },
    {
      date: "07 Sept 2025, 09:15 AM",
      reporter: "Vivek Singh",
      name: "Water leakage in Pipeline",
      location: "Dhanbad",
      authority: "Water Supply & Sewerage Department",
      assigned: "Mrs. Kavita Rao",
    },
    {
      date: "08 Sept 2025, 02:30 PM",
      reporter: "Ajay Patel",
      name: "Broken traffic signal",
      location: "Bokaro Steel City",
      authority: "Traffic Control & Transport Authority",
      assigned: "Ms. Neha Sinha",
    },
    {
      date: "09 Sept 2025, 07:50 AM",
      reporter: "Sunita Devi",
      name: "Overflowing garbage bin",
      location: "Hazaribagh",
      authority: "Municipal Sanitation Department",
      assigned: "Mr. Suresh Yadav",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-400 text-white flex flex-col p-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-blue-500 text-xl">
            <Image src={logo} alt="Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-lg font-semibold">JanVaani</span>
        </div>
        <nav className="flex flex-col gap-2">
          <a className="px-4 py-2 rounded hover:bg-blue-500">Dashboard</a>
          <a className="bg-blue-600 px-4 py-2 rounded font-medium">Analytics</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Reports</a>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-4 py-2 block font-medium bg-blue-500 text-white rounded hover:bg-blue-500 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              Departments
            </button>
            {isOpen && (
              <div className="ml-6 flex flex-col gap-1 text-sm">
                <a className="hover:underline cursor-pointer">Department 1</a>
                <a className="hover:underline cursor-pointer">Department 2</a>
                <a className="hover:underline cursor-pointer">Department 3</a>
                <a className="hover:underline cursor-pointer">Department 4</a>
              </div>
            )}
          </div>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Users</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Messages</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Calendar</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Files</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Settings</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Help & Support</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
      <div className=" flex items-center justify-between relative">
        <div className="flex items-center pl-2">
        <RxHamburgerMenu className='text-black' />
        <Image src={logo} alt="Logo" className="w-10 object-contain" />
        </div>
        <PlaceholderAvatar />
        <span
          className="absolute bottom-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(to right, rgba(247,136,10,1) 0%, rgba(255,255,255,1) 50%, rgba(26,143,62,1) 100%)",
          }}
        />
      </div>

      {/* Search Bar */}
          <div className="flex-1 pt-8 max-w-xl mx-8">
            <input
              className="w-full px-4 py-2 shadow-md border-black rounded border"
              type="text"
              placeholder="Search issues"
            />
          </div> 
        <div className="flex items-center gap-6 mb-6">
          <span className="px-2 py-1 bg-gray-200 rounded text-sm">
            Filter: Category ▼
          </span>
          <span className="px-2 py-1 bg-gray-200 rounded text-sm">
            Filter: Priority ▼
          </span>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center pb-4">
            <h2 className="text-2xl font-bold text-black">Reports</h2>
            {/* Sorting/filtering controls placeholder */}
            <div className="flex gap-2 text-black">
              <button className="hover:underline">Sort by</button>
              <button className="hover:underline">Filter by</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left border">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-3 px-4 font-semibold">Date</th>
                  <th className="py-3 px-4 font-semibold">Reported by</th>
                  <th className="py-3 px-4 font-semibold">Issue Name</th>
                  <th className="py-3 px-4 font-semibold">Issuing authority</th>
                  <th className="py-3 px-4 font-semibold">Assigned to</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="py-2 px-4">{issue.date}</td>
                    <td className="py-2 px-4">{issue.reporter}</td>
                    <td className="py-2 px-4 flex items-center gap-2">
                      <Image src={potholeImg} alt="" width={36} height={36} className="rounded shadow-sm" />
                      <div>
                        <div className="font-semibold">{issue.name}</div>
                        <div className="text-xs text-gray-500">{issue.location}</div>
                      </div>
                    </td>
                    <td className="py-2 px-4">{issue.authority}</td>
                    <td className="py-2 px-4">{issue.assigned}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
