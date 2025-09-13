"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../images/logobig.png";

import { useRouter } from "next/navigation";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Department1Page() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  // Example data for analytics
  const reportData = [
    { name: "Mon", reports: 5 },
    { name: "Tue", reports: 8 },
    { name: "Wed", reports: 12 },
    { name: "Thu", reports: 6 },
    { name: "Fri", reports: 15 },
    { name: "Sat", reports: 10 },
    { name: "Sun", reports: 4 },
  ];

  const pieData = [
    { name: "Resolved", value: 65 },
    { name: "Pending", value: 25 },
    { name: "In Progress", value: 10 },
  ];

  const COLORS = ["#00C49F", "#FF8042", "#0088FE"];

  return (
    <div className="flex min-h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-400 text-white flex flex-col p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-blue-500 text-xl">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <span className="text-lg font-semibold">JanVaani</span>
        </div>
        <nav className="flex flex-col gap-2">
          <a
            onClick={() => router.push("/admin")}
            className="px-4 py-2 rounded hover:bg-blue-500 cursor-pointer"
          >
            Dashboard
          </a>
          <a
            onClick={() => router.push("/admin/analytics")}
            className="px-4 py-2 rounded hover:bg-blue-500 cursor-pointer"
          >
            Analytics
          </a>
          <a
            onClick={() => router.push("/admin/reports")}
            className="px-4 py-2 rounded hover:bg-blue-500 cursor-pointer"
          >
            Reports
          </a>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-blue-500 px-4 py-2 block font-medium text-white rounded focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              Departments
            </button>
            {isOpen && (
              <div className="ml-6 flex flex-col gap-1 text-sm mt-1">
                <a
                  className="hover:bg-blue-500 px-3 py-1 rounded cursor-pointer"
                  onClick={() => router.push("/admin/department1")}
                >
                  Solid Waste Management
                </a>
                <a
                  className="hover:bg-blue-500 px-3 py-1 rounded cursor-pointer"
                  onClick={() => router.push("/admin/department2")}
                >
                  Public Works Dept.
                </a>
                <a
                  className="hover:bg-blue-500 px-3 py-1 rounded cursor-pointer"
                  onClick={() => router.push("/admin/department3")}
                >
                  Electricity Dept.
                </a>
                <a
                  className="hover:bg-blue-500 px-3 py-1 rounded cursor-pointer"
                  onClick={() => router.push("/admin/department4")}
                >
                  Water Supply Dept.
                </a>
              </div>
            )}
          </div>
          <a className="px-4 py-2 rounded hover:bg-blue-500 cursor-pointer">
            Users
          </a>
          <a className="px-4 py-2 rounded hover:bg-blue-500 cursor-pointer">
            Messages
          </a>
          <a className="px-4 py-2 rounded hover:bg-blue-500 cursor-pointer">
            Calendar
          </a>
          <a className="px-4 py-2 rounded hover:bg-blue-500 cursor-pointer">
            Settings
          </a>
          <a className="px-4 py-2 rounded hover:bg-blue-500 cursor-pointer">
            Help & Support
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="text-gray-600 text-sm">Total Reports</h3>
            <p className="text-2xl font-bold text-blue-600">150</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="text-gray-600 text-sm">Resolved</h3>
            <p className="text-2xl font-bold text-green-600">98</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="text-gray-600 text-sm">Pending</h3>
            <p className="text-2xl font-bold text-red-500">52</p>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="grid grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="bg-white shadow rounded-xl p-6 text-black">
            <h3 className="text-gray-600 font-semibold mb-4">
              Reports per Day
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={reportData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="reports" fill="#4F46E5" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-gray-600 font-semibold mb-4">Task Status</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-white shadow rounded-xl p-6 text-black ">
          <h3 className="text-gray-600 font-semibold mb-4">
            Department Performance
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium">Solid Waste Management</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full w-[75%]"></div>
              </div>
              <span className="text-xs text-gray-500">75% completed</span>
            </div>
            <div>
              <p className="text-sm font-medium">Public Works Dept.</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full w-[60%]"></div>
              </div>
              <span className="text-xs text-gray-500">60% completed</span>
            </div>
            <div>
              <p className="text-sm font-medium">Electricity Dept.</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full w-[40%]"></div>
              </div>
              <span className="text-xs text-gray-500">40% completed</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
