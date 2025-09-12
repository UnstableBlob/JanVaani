// pages/dashboard.jsx

"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../images/logobig.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/navigation';


// Leaflet imports
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icon path issues with Next.js
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);

export default function Dashboard() {

const [isOpen, setIsOpen] = useState(false);
const router = useRouter();
    
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
          <a onClick={() => router.push('/admin')} className="px-4 py-2 rounded font-medium hover:bg-blue-500">Dashboard</a>
          <a onClick={() => router.push('/admin/analytics')} className="px-4 py-2 rounded hover:bg-blue-500">Analytics</a>
          <a onClick={() => router.push('/admin/reports')} className="px-4 py-2 rounded hover:bg-blue-500">Reports</a>
          <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`px-4 py-2 block font-medium text-white rounded hover:bg-blue-500 focus:outline-none ${isOpen ? 'bg-blue-500' : ''}`}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                Departments
            </button>
             {isOpen && (
            <div className="flex flex-col gap-1 text-sm bg-blue-500 rounded p-2">
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
      
      <main className=" flex-1">
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

      {/* Leaflet Map replacing placeholder */}
        <div className="px-4 mb-3 pt-4">
          <MapContainer center={[23.3441, 85.3096]} zoom={13} scrollWheelZoom={false} className="w-full h-48 md:h-64 rounded-lg border border-gray-400">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[23.3441, 85.3096]}>
                <Popup>
                Ranchi, Jharkhand, India
                </Popup>
            </Marker>
            </MapContainer>

          <div className="mb-10 flex justify-center pt-5">
            <button className="bg-blue-500 text-white px-8 py-2 rounded-full font-medium">
              View Map
            </button>
          </div>
        </div>

        {/* Dashboard Boxes */}
        <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto text-black">
          <div className="bg-[#99E1AF] rounded-lg p-10 flex items-center justify-center font-semibold text-lg text-center">
            Analytics - last week (graph)
          </div>
          <div className="bg-[#99E1AF] rounded-lg p-10 flex items-center justify-center font-semibold text-lg text-center">
            Reports - what's today
          </div>
          <div className="bg-[#99E1AF] rounded-lg p-10 flex items-center justify-center font-semibold text-lg text-center">
            Recent notifications
          </div>
          <div className="bg-[#99E1AF] rounded-lg p-10 flex items-center justify-center font-semibold text-lg text-center">
            Recent notifications
          </div>
        </div>
      </main>
    </div>
  );
}
