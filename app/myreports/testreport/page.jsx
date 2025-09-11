
import Image from "next/image";
import logo from "../../../images/logobig.png";
import { FaSearch,FaMicrophone,FaBell,FaUser, FaHome} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { IoAlertCircleSharp } from "react-icons/io5";
import { CiMedicalCross } from "react-icons/ci";



const PlaceholderAvatar = () => (
  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
    <span className="text-xs text-gray-600 font-bold">SM</span>
  </div>
);

export default function ReportStatus() {
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
            Image
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
