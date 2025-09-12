"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../images/logobig.png";
import { useRouter } from "next/navigation";

export default function Department1Page() {
  const [isOpen, setIsOpen] = useState(true); // Department section open by default
  const router = useRouter();

  // Example data for department table
  const deptRows = [
    {
      date: "05 Sept 2025, 10:45 AM",
      engineer: "Amit Kumar",
      task: "Vivek Desai",
      contact: "Mr. Rajesh Mehta",
      select: "", // Optionally, can add checkbox or button
    },
    {
      date: "06 Sept 2025, 08:20 PM",
      engineer: "Rohit Sharma",
      task: "Aarti Sharma",
      contact: "Mr. Anil Kumar",
      select: "",
    },
    {
      date: "07 Sept 2025, 09:15 AM",
      engineer: "Vivek Singh",
      task: "Vivek Singh",
      contact: "Mrs. Kavita Rao",
      select: "",
    },
    {
      date: "08 Sept 2025, 02:30 PM",
      engineer: "Ajay Patel",
      task: "Ajay Patel",
      contact: "Ms. Neha Sinha",
      select: "",
    },
    {
      date: "09 Sept 2025, 07:50 AM",
      engineer: "Sunita Devi",
      task: "Sunita Devi",
      contact: "Mr. Suresh Yadav",
      select: "",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-400 text-white flex flex-col p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-blue-500 text-xl">
            <Image src={logo} alt="Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-lg font-semibold">JanVaani</span>
        </div>
        <nav className="flex flex-col gap-2">
          <a onClick={() => router.push('/admin')} className="px-4 py-2 rounded hover:bg-blue-500">Dashboard</a>
          <a onClick={() => router.push('/admin/analytics')} className="px-4 py-2 rounded hover:bg-blue-500">Analytics</a>
          <a onClick={() => router.push('/admin/reports')} className="px-4 py-2 rounded hover:bg-blue-500">Reports</a>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 px-4 py-2 block font-medium text-white rounded focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              Departments
            </button>
            {isOpen && (
              <div className="ml-6 flex flex-col gap-1 text-sm mt-1">
                <a className="bg-blue-500 px-3 py-1 rounded cursor-pointer">Department 1</a>
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
      <main className="flex-1 py-8 px-8 text-black">
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-3">
            <span className="font-bold text-2xl">Department 1</span>
          </div>
          <div className="flex gap-2 text-gray-600 mr-5">
            <button className="hover:underline">Sort by</button>
            <button className="hover:underline flex items-center gap-1">
              <span>Filter by</span>
              <span className="text-lg">&#x1F50D;</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <table className="min-w-full text-left border-separate border-spacing-y-1">
            <thead>
              <tr>
                <th className="font-semibold pr-12 pb-3">Sr. No</th>
                <th className="font-semibold pr-12 pb-3">Junior Engineers</th>
                <th className="font-semibold pr-12 pb-3">Pending Tasks</th>
                <th className="font-semibold pr-12 pb-3">Contact No.</th>
                <th className="font-semibold pb-3">Select</th>
              </tr>
            </thead>
            <tbody>
              {deptRows.map((row, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2">{row.date}</td>
                  <td className="py-2">{row.engineer}</td>
                  <td className="py-2">{row.task}</td>
                  <td className="py-2">{row.contact}</td>
                  <td className="py-2">{row.select}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
