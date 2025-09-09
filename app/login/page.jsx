// 'use client';

// import { useState } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import logo from '../../images/logo.png';
// import google from '../../images/google-icon.png';

// export default function LoginPage() {
//   const [activeTab, setActiveTab] = useState('mobile');
//   const [formData, setFormData] = useState({ mobile: '', email: '' });
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [isOtpStep, setIsOtpStep] = useState(false);
//   const [message, setMessage] = useState('');
//   const [identifierForOtp, setIdentifierForOtp] = useState('');

//   // handle tab change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // OTP input as per screenshot
//   const handleOtpChange = (e, idx) => {
//     const { value } = e.target;
//     if (!/^\d?$/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[idx] = value;
//     setOtp(newOtp);
//     if (value && idx < 5 && document.getElementById(`otp-${idx + 1}`))
//       document.getElementById(`otp-${idx + 1}`).focus();
//   };

//   // this function triggers OTP UI for mobile/email
//   const handleContinue = async (e) => {
//     e.preventDefault();
//     if (activeTab === 'mobile' && formData.mobile.length === 10) {
//       setIdentifierForOtp(formData.mobile);
//       setMessage(`We've sent a 6-digit verification code to your mobile number +91 ${formData.mobile}`);
//       setIsOtpStep(true);
//       // Add API call here to send mobile OTP
//     } else if (activeTab === 'email' && formData.email.length > 5) {
//       setIdentifierForOtp(formData.email);
//       setMessage(`We've sent a 6-digit verification code to your email ${formData.email}`);
//       setIsOtpStep(true);
//       // Add API call here to send email OTP
//     }
//   };

//   // handle OTP submit (verification)
//   const handleOtpSubmit = async (e) => {
//     e.preventDefault();
//     const otpCode = otp.join('');
//     if (otpCode.length !== 6) {
//       setMessage('Please enter the full 6-digit code.');
//       return;
//     }
//     // Add API verification here
//     setMessage('Verifying...');
//     setTimeout(() => {
//       setMessage('Login successful!');
//       // Redirect/token logic
//     }, 1000);
//   };

//   const handleResend = () => {
//     if (activeTab === 'mobile') {
//       // Resend mobile OTP API here
//       setMessage(`Resent OTP to +91 ${identifierForOtp}`);
//     } else if (activeTab === 'email') {
//       // Resend email OTP API here
//       setMessage(`Resent OTP to ${identifierForOtp}`);
//     }
//   };

  

//   return (
    
//     <div className="min-h-screen flex flex-col items-center justify-center p-4"
//       style={{
//         background: "linear-gradient(to bottom, rgba(247, 136, 10, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(26, 143, 62, 1) 100%)"
//       }}
//     >
//       <Head>
//         <title>JanVaani - Login</title>
//         <meta name="description" content="JanVaani Civic App Login" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* Logo */}
//       <div className="text-center mb-8">
//         <Image src={logo} alt="JanVaani Logo" width={300} height={300} />
//       </div>

//       <div className="w-full max-w-md">
//         {/* Tabs (only if not in OTP step) */}
//         {!isOtpStep && (
//           <div className="flex bg-[#BDBDBD] rounded-full p-1 mb-6 max-w-xs align-middle mx-auto">
//             <button
//               className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
//                 activeTab === 'mobile' ? 'bg-[#FFFFFF] text-black font-bold' : 'text-[#414141]'
//               }`}
//               onClick={() => setActiveTab('mobile')}
//             >Mobile Number</button>
//             <button
//               className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
//                 activeTab === 'email' ? 'bg-[#FFFFFF] text-black font-bold' : 'text-[#414141]'
//               }`}
//               onClick={() => setActiveTab('email')}
//             >Email</button>
//           </div>
//         )}

//         {/* Input Form (visible if not OTP step) */}
//         {!isOtpStep && (
//           <form onSubmit={handleContinue} className="space-y-4">
//             {activeTab === 'mobile' ? (
//               <div>
//                 <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="mobile"
//                   name="mobile"
//                   placeholder="Enter mobile number"
//                   value={formData.mobile}
//                   onChange={handleInputChange}
//                   className="bg-white w-full px-4 py-3 border-3 border-[#B2B2B2] rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                   maxLength={10}
//                   required
//                 />
//               </div>
//             ) : (
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter email address"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="bg-white w-full px-4 py-3 border-3 border-[#B2B2B2] rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                   required
//                 />
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-[#1976D2] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
//             >
//               Continue
//             </button>
//           </form>
//         )}

//         {/* OTP Verification Card (shown for both email/mobile, matches screenshot) */}
//         {isOtpStep && (
//           <form onSubmit={handleOtpSubmit} className="space-y-4">
//             <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-2 text-center text-black">
//               <div className="mb-2">{message}</div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Enter Verification Code:
//               </label>
//               <div className="flex justify-center gap-2 mb-2">
//                 {otp.map((digit, idx) => (
//                   <input
//                     key={idx}
//                     id={`otp-${idx}`}
//                     type="text"
//                     inputMode="numeric"
//                     value={digit}
//                     onChange={e => handleOtpChange(e, idx)}
//                     maxLength={1}
//                     className="w-10 h-12 text-2xl text-center border-2 border-[#bdbdbd] rounded-md"
//                   />
//                 ))}
//               </div>
//               <div className="text-sm text-gray-500">
//                 Didn't receive the code?{' '}
//                 <button type="button" onClick={handleResend} className="text-[#1976D2] underline hover:text-blue-600">
//                   Resend
//                 </button>
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#1976D2] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
//             >
//               Log in
//             </button>
//           </form>
//         )}

//         {/* Divider and Google Login (only if not in OTP step) */}
//         {!isOtpStep && (
//           <>
//             <div className="flex items-center my-6">
//               <div className="flex-grow border-t border-[#000000]"></div>
//               <span className="mx-4 text-[#000000] text-sm">OR</span>
//               <div className="flex-grow border-t border-[#000000]"></div>
//             </div>
//             <button className="w-full bg-[#EDEDED] text-[#414141] py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
//               <Image src={google} alt="Google Icon" width={20} height={20} />
//               Continue with Google
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logo from '../../images/logo.png';
import google from '../../images/google-icon.png';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('mobile');
  const [formData, setFormData] = useState({ mobile: '', email: '' });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [message, setMessage] = useState('');
  const [identifierForOtp, setIdentifierForOtp] = useState('');

  // handle form input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle OTP input
  const handleOtpChange = (e, idx) => {
    const { value } = e.target;
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
    if (value && idx < 5) {
      const next = document.getElementById(`otp-${idx + 1}`);
      if (next) next.focus();
    }
  };

  // request OTP
  const handleContinue = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === 'mobile' && formData.mobile.length === 10) {
        const res = await fetch('/api/auth/mobile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone: `+91${formData.mobile}` }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setIdentifierForOtp(formData.mobile);
        setMessage(`We've sent a 6-digit verification code to your mobile number +91 ${formData.mobile}`);
        setIsOtpStep(true);
      } else if (activeTab === 'email' && formData.email.length > 5) {
        const res = await fetch('/api/auth/email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: formData.email }),
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);

        setIdentifierForOtp(formData.email);
        setMessage(`We've sent a 6-digit verification code to your email ${formData.email}`);
        setIsOtpStep(true);
      }
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  // verify OTP
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setMessage('Please enter the full 6-digit code.');
      return;
    }

    try {
      const endpoint = activeTab === 'mobile' ? '/api/auth/mobile/verify' : '/api/auth/email/verify';
      const body =
        activeTab === 'mobile'
          ? { phone: `+91${identifierForOtp}`, token: otpCode }
          : { email: identifierForOtp, token: otpCode };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessage('✅ Login successful!');
      // redirect after login
      window.location.href = '/dashboard';
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    }
  };

  // resend OTP
  const handleResend = async () => {
    if (activeTab === 'mobile') {
      await fetch('/api/auth/mobile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: `+91${identifierForOtp}` }),
      });
      setMessage(`Resent OTP to +91 ${identifierForOtp}`);
    } else if (activeTab === 'email') {
      await fetch('/api/auth/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: identifierForOtp }),
      });
      setMessage(`Resent OTP to ${identifierForOtp}`);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        background:
          'linear-gradient(to bottom, rgba(247, 136, 10, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(26, 143, 62, 1) 100%)',
      }}
    >
      <Head>
        <title>JanVaani - Login</title>
        <meta name="description" content="JanVaani Civic App Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Logo */}
      <div className="text-center mb-8">
        <Image src={logo} alt="JanVaani Logo" width={300} height={300} />
      </div>

      <div className="w-full max-w-md">
        {/* Tabs */}
        {!isOtpStep && (
          <div className="flex bg-[#BDBDBD] rounded-full p-1 mb-6 max-w-xs mx-auto">
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                activeTab === 'mobile' ? 'bg-white text-black font-bold' : 'text-[#414141]'
              }`}
              onClick={() => setActiveTab('mobile')}
            >
              Mobile Number
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
                activeTab === 'email' ? 'bg-white text-black font-bold' : 'text-[#414141]'
              }`}
              onClick={() => setActiveTab('email')}
            >
              Email
            </button>
          </div>
        )}

        {/* Input Form */}
        {!isOtpStep && (
          <form onSubmit={handleContinue} className="space-y-4">
            {activeTab === 'mobile' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter mobile number"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="bg-white w-full px-4 py-3 border-3 border-[#B2B2B2] rounded-lg focus:outline-none text-black"
                  maxLength={10}
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white w-full px-4 py-3 border-3 border-[#B2B2B2] rounded-lg focus:outline-none text-black"
                  required
                />
              </div>
            )}

            <button type="submit" className="w-full bg-[#1976D2] text-white py-3 rounded-lg font-bold">
              Continue
            </button>
          </form>
        )}

        {/* OTP Form */}
        {isOtpStep && (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <div className="bg-white bg-opacity-70 p-4 rounded-lg mb-2 text-center text-black">
              <div className="mb-2">{message}</div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Enter Verification Code:</label>
              <div className="flex justify-center gap-2 mb-2">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-${idx}`}
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, idx)}
                    maxLength={1}
                    className="w-10 h-12 text-2xl text-center border-2 border-[#bdbdbd] rounded-md"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                Didn't receive the code?{' '}
                <button type="button" onClick={handleResend} className="text-[#1976D2] underline">
                  Resend
                </button>
              </div>
            </div>
            <button type="submit" className="w-full bg-[#1976D2] text-white py-3 rounded-lg font-bold">
              Log in
            </button>
          </form>
        )}

        {/* Divider and Google Login */}
        {!isOtpStep && (
          <>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-black"></div>
              <span className="mx-4 text-black text-sm">OR</span>
              <div className="flex-grow border-t border-black"></div>
            </div>
            <a
              href="/api/auth/google"
              className="w-full bg-[#EDEDED] text-[#414141] py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200"
            >
              <Image src={google} alt="Google Icon" width={20} height={20} />
              Continue with Google
            </a>
          </>
        )}
      </div>
    </div>
  );
}
