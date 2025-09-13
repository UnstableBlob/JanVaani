"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../images/logobig.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import issueimage1 from "../../../images/issue1.png";
import issueimage2 from "../../../images/issue2.jpg";

// Placeholder pothole image; replace with actual Image import
const potholeImg = "/images/pothole.jpg";

export default function ReportsPage() {
  const [isOpen, setIsOpen] = useState(false);

const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);

const PlaceholderSpinner = () => (
  <div className="w-5 h-5 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
);


const PotholeReportCard1 = () => (
    
    <div className="max-w-lg min max-h-screen mx-auto bg-gray-100 rounded-2xl shadow-lg p-6 text-black relative">
    {/* Close Icon top right */}
    <button className="absolute top-4 right-4 text-black w-10 h-10"
    onClick={() => setShowForm1(false)}>
      <IoClose className="w-full h-full" />
    </button>

    {/* Title and Metadata on same row */}
    <div className="flex-1 justify-between items-center">
      <h2 className="text-2xl font-bold">Pothole near Main Road</h2>
      <div className="text-right text-gray-700 text-sm">
        <div>Club Road</div>
        <div>5 Sept 2025 12:31 PM</div>
      </div>
    </div>

    {/* Top Row */}
    <div className="flex items-start gap-6">
      {/* Thumbnail Placeholder */}
      <div className="w-28 h-28 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
        <Image src={issueimage1} alt="Pothole" className="w-full h-full object-cover rounded" />
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
        <span className="text-gray-800">Vivek Desai</span>
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
      <Image src={issueimage1} alt="Pothole" className="w-full h-full object-cover rounded" />
    </div>
    {showSelect &&(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <SelectEngineers1 />
        </div>)}
  </div>
)

const PotholeReportCard2 = () => (
    
    <div className="max-w-lg min max-h-screen mx-auto bg-gray-100 rounded-2xl shadow-lg p-6 text-black relative">
    {/* Close Icon top right */}
    <button className="absolute top-4 right-4 text-black w-10 h-10"
    onClick={() => setShowForm2(false)}>
      <IoClose className="w-full h-full" />
    </button>

    {/* Title and Metadata on same row */}
    <div className="flex-1 justify-between items-center">
      <h2 className="text-2xl font-bold">Garbage not collected</h2>
      <div className="text-right text-gray-700 text-sm">
        <div>Rathod Street, Ranchi</div>
        <div>03 Sept 2025, 10:22 AM</div>
      </div>
    </div>

    {/* Top Row */}
    <div className="flex items-start gap-6">
      {/* Thumbnail Placeholder */}
      <div className="w-28 h-28 bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-semibold">
        <Image src={issueimage2} alt="Pothole" className="w-full h-full object-cover rounded" />
      </div>
      <div className="flex-1">
        <div className="mb-3">
          <span className="font-semibold block mb-1">Description:</span>
          <span className="text-gray-900">
            Garbage has been piling up on Main Road close to Albert Ekka Chowk as it has not been collected for several days. This is causing foul smell, blocking pedestrian movement, and creating an unhygienic environment that poses health risks, especially during the ongoing rains. The situation is worsening day by day, and immediate clearance is needed to prevent further inconvenience and ensure public health and safety.
          </span>
        </div>
        <div className="mb-1">
          <span className="font-semibold">Category:</span>{' '}
          <span className="text-gray-900">Garbage Collection</span>
        </div>
      </div>
    </div>

    {/* Issue Details */}
    <div className="grid grid-cols-3 gap-4 items-center">
      <div>
        <span className="block font-semibold mb-1">Reported by:</span>
        <span className="text-gray-800">Vivek Desai</span>
      </div>
      <div>
        <span className="block font-semibold mb-1">Issuing authority:</span>
        <span className="text-gray-800">Solid Waste Management</span>
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
      <Image src={issueimage2} alt="Pothole" className="w-full h-full object-cover rounded" />
    </div>
    {showSelect &&(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
        <SelectEngineers2 />
        </div>)}
  </div>
)

const initialEngineers1 = [
  { srNo: 1, name: "Amit Kumar", tasks: 4 },
  { srNo: 2, name: "Rohit Sharma", tasks: 2 },
  { srNo: 3, name: "Neha Singh", tasks: 6 },
  { srNo: 4, name: "Saurav Das", tasks: 1 },
  { srNo: 5, name: "Sneha Roy", tasks: 3 },
  { srNo: 6, name: "Aditya Verma", tasks: 7 },
];
const initialEngineers2 = [
  { srNo: 1, name: "Karan Mehta", tasks: 5 },
{ srNo: 2, name: "Priya Nair", tasks: 3 },
{ srNo: 3, name: "Arjun Reddy", tasks: 8 },
{ srNo: 4, name: "Simran Kaur", tasks: 2 },
{ srNo: 5, name: "Rahul Gupta", tasks: 4 },
{ srNo: 6, name: "Ishita Malhotra", tasks: 6 },
];

const SelectEngineers1 = () => {
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
        
        <h1 className="text-4xl font-bold">Public Works Department</h1>
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
          {initialEngineers1.map((eng, idx) => (
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

const SelectEngineers2 = () => {
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
        
        <h1 className="text-4xl font-bold">Solid Waste Management</h1>
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
          {initialEngineers2.map((eng, idx) => (
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
      date: "9 mins ago 12:31 PM",
      reporter: "Vivek Desai",
      name: "Pothole near main road",
      location: "Club Road, Ranchi",
      authority: "Public Works Department (PWD) – Roads",
      assigned: "Mr. Saurav Das",
    },
    {
      date: "2 days ago 10:22 AM",
      reporter: "Aarti Sharma",
      name: "Garbage not collected",
      location: "Rathod Street, Ranchi",
      authority: "Public Works Department (PWD) – Roads",
      assigned: "Ms. Simran Kaur",
    },
  ];

  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
const router = useRouter();


  return (
    <div className="flex min-h-screen bg-gray-100">
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
            {showForm1 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <PotholeReportCard1 />
            </div> )}
            {showForm2 && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
                <PotholeReportCard2 />
            </div> )}

          </div>
        </div>
      </main>
    </div>
  );
}
