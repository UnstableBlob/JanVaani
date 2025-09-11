"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../images/logobig.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


// Placeholder pothole image; replace with actual Image import
const potholeImg = "/images/pothole.jpg";

export default function ReportsPage() {
  const [isOpen, setIsOpen] = useState(false);

const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);

const PotholeReportCard = () => (
    
    <div className="max-w-xl mx-auto bg-gray-100 rounded-2xl shadow-lg p-6 space-y-6 text-black relative">
    {/* Close Icon top right */}
    <button className="absolute top-4 right-4 text-black w-10 h-10"
    onClick={() => setShowForm(false)}>
      <IoClose className="w-full h-full" />
    </button>

    {/* Title and Metadata on same row */}
    <div className="flex-1 justify-between items-center">
      <h2 className="text-2xl font-bold">Pothole near Main Road</h2>
      <div className="text-right text-gray-700 text-sm">
        <div>Jamshedpur</div>
        <div>05 Sept 2025, 10:45 AM</div>
      </div>
    </div>

    {/* Top Row */}
    <div className="flex items-start gap-6">
      {/* Thumbnail Placeholder */}
      <div className="w-28 h-28 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
        Image
      </div>
      <div className="flex-1">
        <div className="mb-3">
          <span className="font-semibold block mb-1">Description:</span>
          <span className="text-gray-900">
            A large pothole has developed on Main Road close to Albert Ekka Chowk. It is causing heavy traffic jams during peak hours and poses risk of accidents, especially for two-wheelers. The problem has been getting worse due to recent rains, and immediate repair is needed to prevent further damage and ensure commuter safety.
          </span>
        </div>
        <div className="mb-1">
          <span className="font-semibold">Category:</span>{' '}
          <span className="text-gray-900">Road / Public Works</span>
        </div>
      </div>
    </div>

    {/* Issue Details */}
    <div className="grid grid-cols-3 gap-4 items-center">
      <div>
        <span className="block font-semibold mb-1">Reported by:</span>
        <span className="text-gray-800">Mr. Rajesh Mehta</span>
      </div>
      <div>
        <span className="block font-semibold mb-1">Issuing authority:</span>
        <span className="text-gray-800">Public Works Department (PWD) – Roads</span>
      </div>
      <div>
        <span className="block font-semibold mb-1">Assigned to:</span>
        
        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded "
        onClick={() => setShowSelect(true)}>
          Select
        </button>
      </div>
    </div>

    {/* Main Image Placeholder */}
    <div className="w-full h-56 bg-gray-300 rounded-lg flex items-center justify-center text-2xl text-gray-500 font-semibold mt-2">
      Large Image
    </div>
    {showSelect &&(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <SelectEngineers />
        </div>)}
  </div>
)

const initialEngineers = [
  { srNo: 1, name: "Amit Kumar", tasks: 4 },
  { srNo: 2, name: "Rohit Sharma", tasks: 2 },
  { srNo: 3, name: "Neha Singh", tasks: 6 },
  { srNo: 4, name: "Saurav Das", tasks: 1 },
  { srNo: 5, name: "Sneha Roy", tasks: 3 },
  { srNo: 6, name: "Aditya Verma", tasks: 7 },
  // Multiple entries for Ramesh Yadav, all sharing srNo 7, as per screenshot
  { srNo: 7, name: "Ramesh Yadav", tasks: 5 },
  { srNo: 7, name: "Ramesh Yadav", tasks: 5 },
  { srNo: 7, name: "Ramesh Yadav", tasks: 5 },
  { srNo: 7, name: "Ramesh Yadav", tasks: 5 },
  { srNo: 7, name: "Ramesh Yadav", tasks: 5 },
];

const SelectEngineers = () => {
  // Only row 4 selected initially
  const [selected, setSelected] = useState([3]);

  const handleChange = idx => {
    if (selected.includes(idx)) {
      setSelected(selected.filter(i => i !== idx));
    } else {
      setSelected([...selected, idx]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-gray-100 rounded-2xl p-8 relative">
        <button className="absolute top-4 right-4 text-black w-10 h-10"
    onClick={() => setShowSelect(false)}>
      <IoClose className="w-full h-full" />
    </button>
      <div className="flex justify-between items-center mb-7">
        
        <h1 className="text-4xl font-bold">Public Works Dept.</h1>
        <div className="flex gap-5 text-gray-500 text-sm font-medium">
          <span>Sort by</span>
          <span>Filter by</span>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="font-semibold pb-4">Sr. No</th>
            <th className="font-semibold pb-4">Junior Engineers</th>
            <th className="font-semibold pb-4">Pending Tasks</th>
            <th className="font-semibold pb-4">Select</th>
          </tr>
        </thead>
        <tbody>
          {initialEngineers.map((eng, idx) => (
            <tr key={idx} className="border-none">
              <td className="py-2">{eng.srNo}.</td>
              <td className="py-2">{eng.name}</td>
              <td className="py-2">{eng.tasks}</td>
              <td className="py-2">
                <input
                  type="checkbox"
                  checked={selected.includes(idx)}
                  onChange={() => handleChange(idx)}
                  className="w-5 h-5 accent-green-600"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

  const [showForm, setShowForm] = useState(false);
    const [showSelect, setShowSelect] = useState(false);



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
          <div className="flex-1 items-center justify-between relative pt-8 max-w-xl mx-8">
            <input
              className="w-full text-black px-4 py-2 shadow-md border-black rounded border"
              type="text"
              placeholder="Search issues"
            />
          
        <div className=" text-black flex gap-4 mt-4">
          <span className="px-2 py-1 bg-gray-200 rounded text-sm">
            Filter: Category ▼
          </span>
          <span className="px-2 py-1 bg-gray-200 rounded text-sm">
            Filter: Priority ▼
          </span>
        </div>
        </div> 

        {/* Reports Table */}
        <div className="bg-white rounded-lg shadow px-5 pt-5 mx-5 mt-5">
          <div className="flex justify-between items-center pb-4">
            <h2 className="text-2xl font-bold text-black ">Reports</h2>
          </div>
          <div className="overflow-x-auto ">
            <table className="min-w-full text-left text-black">
              <thead>
                <tr className="bg-gray-100 rounded">
                  <th className="py-7 px-4 font-semibold">Date</th>
                  <th className="py-7 px-4 font-semibold">Reported by</th>
                  <th className="py-7 px-4 font-semibold">Issue Name</th>
                  <th className="py-7 px-4 font-semibold">Issuing authority</th>
                  <th className="py-7 px-4 font-semibold">Assigned to</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue, idx) => (
                  <tr key={idx} className="hover:bg-gray-50"
                  onClick={() => setShowForm(true)}>
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
            {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <PotholeReportCard />
            </div> )}
          </div>
        </div>
      </main>
    </div>
  );
}
