"use client"
import React from 'react'

import { FaMapPin } from 'react-icons/fa';

const AboutUsIntro = () => {
    const darkText = "text-gray-900";
  const lightText = "text-gray-600";
  const accentColor = "text-[#0a9cfa]";
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    
              {/* Left Column: Text */}
              <div className="p-4">
                <h2 className={`text-4xl font-inter font-extrabold ${darkText}`}>
                  Transforming your bussiness with <span className={accentColor}>ClayCloud Technoligies.</span>
                </h2>
                <p className={`mt-6 text-lg ${lightText}`}>
                  At ClayCloud Technologies, we believe that technology—like clay—is raw potential waiting to be shaped into weapons of competitive advantage. We help organizations transform into agile, data-driven, and intelligent digital enterprises. We don’t just build software; we engineer the future of your business.
                </p>
                <p className={`mt-4 text-lg ${lightText} border-l-4 border-indigo-500 pl-4 italic`}>
                  Headquartered in Bangalore, India, and Delaware, USA, our dual-shore presence allows us to deliver continuous innovation, giving you a 24/7 edge.
                </p>
              </div>
    
              {/* Right Column: Image with Bold Elements (Mimicking the visual style) */}
              <div className="relative">
                {/* Bordered frame with a subtle rotation and shadow for a "badass" look */}
                <div className="p-2 border-4 border-indigo-600 rounded-3xl shadow-2xl transform rotate-1 transition duration-500 hover:rotate-0">
                  <img
                    // Placeholder image URL
                    src="https://via.placeholder.com/800x500/1E3A8A/FFFFFF?text=High-Tech+Strategy+Session"
                    alt="High-level team collaborating in a modern strategy session."
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                </div>
    
                {/* Bold, Overlapping Stat Card (Global Delivery Pin) */}
                <div className="absolute bottom-[-20px] left-[-30px] bg-rose-600 p-5 rounded-xl shadow-2xl text-white flex items-center space-x-3 transform -rotate-2 transition duration-500 hover:rotate-0">
                  <FaMapPin className="w-6 h-6" />
                  <div className="font-extrabold text-lg tracking-wider">GLOBAL REACH</div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default AboutUsIntro