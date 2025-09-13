// pages/dashboard.jsx

"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../images/logobig.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import issueimage1 from "../../images/issue1.png";
import issueimage2 from "../../images/issue2.jpg";
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

// Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon path issues with Next.js
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);



export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-400 text-white flex flex-col p-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-blue-500 text-xl">
            {/* LOGO PLACEHOLDER     */}
            <span>
              <Image src={logo} alt="Logo" className="w-10 object-contain" />
            </span>
          </div>
          <span className="text-lg font-semibold">JanVaani</span>
        </div>
        {/* Sidebar Links */}
        <nav className="flex flex-col gap-2">
          <a
            onClick={() => router.push("/admin")}
            className="px-4 py-2 rounded hover:bg-blue-500"
          >
            Dashboard
          </a>
          <a
            onClick={() => router.push("/admin/analytics")}
            className="px-4 py-2 rounded hover:bg-blue-500"
          >
            Analytics
          </a>
          <a
            onClick={() => router.push("/admin/reports")}
            className="px-4 py-2 rounded hover:bg-blue-500"
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
          <a className="px-4 py-2 rounded hover:bg-blue-500">Users</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Messages</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Calendar</a>

          <a className="px-4 py-2 rounded hover:bg-blue-500">Settings</a>
          <a className="px-4 py-2 rounded hover:bg-blue-500">Help & Support</a>
        </nav>
      </aside>

      {/* Main Content */}

      <main className=" flex-1">
        {/* Header */}
        <div className=" flex items-center justify-between relative">
          <div className="flex items-center pl-2">
            <RxHamburgerMenu className="text-black" />
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

        {/* Leaflet Map replacing placeholder */}
        <div className="px-4 mb-3 pt-4">
          <MapContainer
            center={[23.3441, 85.3096]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-48 md:h-64 rounded-lg border border-gray-400"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[23.3441, 85.3096]}>
              <Popup>Ranchi, Jharkhand, India</Popup>
            </Marker>
          </MapContainer>

          <div className="mb-10 flex justify-center pt-5">
            <button className="bg-blue-500 text-white px-8 py-2 rounded-full font-medium">
              View Map
            </button>
          </div>
        </div>

        {/* Dashboard Boxes */}
        <div className="flex-1 gap-8 max-w-3xl mx-auto text-black">
          <div className="bg-[#99E1AF] rounded-lg p-2 flex items-center justify-center font-semibold text-lg text-center">
            {/* Graphs Section */}
                    <div className="flex items-center justify-center w-full">
                      {/* Bar Chart */}
                      <div className="bg-white shadow rounded-xl p-2 text-black w-full">
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
            
                    </div>
          </div>
          <div className="bg-[#99E1AF] rounded-lg p-10 flex items-center justify-center font-semibold text-lg text-center">
            <div className="overflow-x-auto "> Recent Reports
            <table className="min-w-full text-left text-black">
              <tbody>
                  <tr className="hover:bg-gray-50"
                  onClick={() => setShowForm1(true)}>
                    <td className="py-2 px-4">9 mins ago 12:31 PM</td>
                    <td className="py-2 px-4">Vivek Desai</td>
                    <td className="py-2 px-4 flex items-center gap-2">
                      <Image src={issueimage1} alt="" width={36} height={36} className="rounded shadow-sm" />
                      <div>
                        <div className="font-semibold">Pothole near Main Road</div>
                        <div className="text-xs text-gray-500">Club Road, Ranchi</div>
                      </div>
                    </td>
                    <td className="py-2 px-4">Public Works Department</td>
                    <td className="py-2 px-4">Mr. Saurav Das</td>
                  </tr>
                  <tr className="hover:bg-gray-50"
                  onClick={() => setShowForm2(true)}>
                    <td className="py-2 px-4">2 days ago10:22 AM</td>
                    <td className="py-2 px-4">Vivek Desai</td>
                    <td className="py-2 px-4 flex items-center gap-2">
                      <Image src={issueimage2} alt="" width={36} height={36} className="rounded shadow-sm" />
                      <div>
                        <div className="font-semibold">Garbage not collected</div>
                        <div className="text-xs text-gray-500">Rathod Street, Ranchi</div>
                      </div>
                    </td>
                    <td className="py-2 px-4">Solid Waste Management</td>
                    <td className="py-2 px-4">Ms.	Simran Kaur</td>
                  </tr>
              </tbody>
            </table>

          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
