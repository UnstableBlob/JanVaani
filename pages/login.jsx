'use client';


import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import logo from '../images/logo.png';
import google from '../images/google-icon.png';


export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('mobile');
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center p-4">
      <Head>
        <title>JanVaani - Login</title>
        <meta name="description" content="JanVaani Civic App Login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Logo Section */}
      <div className="text-center mb-8">
        <Image 
        src={logo} 
        alt="JanVaani Logo" 
        width={120} 
        height={120} />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md">
        {/* Tabs */}
        <div className="flex bg-[#F3F3F3] rounded-full p-1 mb-6">
          <button
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
              activeTab === 'mobile' 
                ? 'bg-[#C4C4C4] text-black font-bold' 
                : 'text-[#414141]'
            }`}
            onClick={() => setActiveTab('mobile')}
          >
            Mobile Number
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-full text-sm font-medium ${
              activeTab === 'email' 
                ? 'bg-[#C4C4C4] text-black font-bold' 
                : 'text-[#414141]'
            }`}
            onClick={() => setActiveTab('email')}
          >
            Email
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === 'mobile' ? (
            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#B2B2B2] rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ) : (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#B2B2B2] rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#B2B2B2] rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Re-enter your Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-[#B2B2B2] rounded-lg placeholder-[#7A7A7A] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1976D2] text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Continue
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <p className="text-[#838383]">
            Don't have an account?{' '}
            <a href="#" className="text-[#1A315C] font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-[#E0E0E0]"></div>
          <span className="mx-4 text-[#838383] text-sm">OR</span>
          <div className="flex-grow border-t border-[#E0E0E0]"></div>
        </div>

        {/* Google Login Button */}
        <button className="w-full bg-[#EDEDED] text-[#414141] py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
          <Image src={google} alt="Google Icon" width={20} height={20} />
          Continue with Google
        </button>
      </div>
    </div>
  );
}