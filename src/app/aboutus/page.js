"use client";
import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { FaServer } from "react-icons/fa6";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";
import UseCase from "@/components/UseCase";
import AboutCloud from "@/components/AboutCloud";
import TechnologyMarquee from "@/components/TechnologyMarquee";
import TalkToUs from "@/components/TalkToUs";
import Serve from "@/components/Serve";
import { FaMapPin } from 'react-icons/fa';
import { motion } from "framer-motion";
import ServeCard from "@/components/ServeCard";
import cart from "../../assets/cart.png";
import bag from "../../assets/bag.png";
import plane from "../../assets/plane.png";
import factory from "../../assets/factory.png";
import heart from "../../assets/heart.png";
import car from "../../assets/car.png";

export default function AboutPage(){
    const darkText = "text-gray-900";
    const lightText = "text-gray-600";
    const accentColor = "text-[#0a9cfa]";

    const useCases = [
        {
          id: 1,
      title: "Healthcare",
      description: "Digital health solutions, patient management, and telemedicine platforms",
      icon: heart,
      bgcolor: "#FEF4E7",       // cream tone background
      textcolor: "#D97A00",     // warm amber text
      bordercolor: "#D97A00",   // matching border
      iconolor: "#FADFC2",      // soft pastel cream
      shadowColor: "#FADFC2",   // matching shadow
        },
        {
          id: 2,
          title: "Industrial",
          description: "IoT solutions, predictive maintenance, and smart manufacturing",
          icon: factory,
          bgcolor: "#d3e4fa",
          textcolor: "#1b56f0",
          bordercolor: "#1b56f0",
          iconolor: "#b0d5f6",
          shadowColor: "#b0d5f6",
        },
        {
          id: 3,
          title: "Retail",
          description: "E-commerce platforms, inventory management, and customer analytics",
          icon: cart,
          bgcolor: "#cdf9dd",
          textcolor: "#009f3a",
          bordercolor: "#009f3a",
          iconolor: "#a9eec7",
          shadowColor: "#a9eec7",
        },
        {
          id: 4,
          title: "Travel",
          description: "Booking systems, travel management, and customer experience platforms",
          icon: plane,
          bgcolor: "#eeddff",
          textcolor: "#9337ef",
          bordercolor: "#9337ef",
          iconolor: "#d9c4fd",
          shadowColor: "#d9c4fd",
        },
        {
          id: 5,
          title: "Automotive",
          description: "Connected vehicles, fleet management, and autonomous driving solutions",
          icon: car,
          bgcolor: "#feddc2",
          textcolor: "#f4750d",
          bordercolor: "#f4750d",
          iconolor: "#fcc2a5",
          shadowColor: "#fcc2a5",
        },
        {
          id: 6,
          title: "HR Tech",
          description: "Workforce management, talent acquisition, and employee engagement",
          icon: bag,
          bgcolor: "#bed0fd",
          textcolor: "#1b56f0",
          bordercolor: "#1b56f0",
          iconolor: "#9ac3fc",
          shadowColor: "#9ac3fc",
        },
      ];
    return(
        <>
        <section className="hero-section relative w-full overflow-hidden bg-linear-to-b from-white via-[#f5f7ff] to-white pt-28 md:pt-40 pb-16 md:pb-24 font-inter">
              {/* Soft glow background */}
              <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="hero-glow h-56 w-56 md:h-72 md:w-72 bg-[radial-gradient(circle_at_center,#c7e2ff,transparent_60%)] opacity-70 blur-3xl" />
              </div>
        
              {/* FLOATING ICONS (hidden on very small screens) */}
              <div className="pointer-events-none absolute inset-0 hidden sm:block">
                {/* Left bottom AI icon */}
                <div className="float-icon float-1 absolute left-4 bottom-10 md:left-12 md:bottom-20">
                  <LuBrainCircuit className="h-10 w-10 md:h-16 md:w-14 text-green-300 fill-current" />
                </div>
        
                {/* Left middle server icon */}
                <div className="float-icon float-2 absolute left-6 top-1/3 md:left-36 md:top-1/2">
                  <FaServer className="h-8 w-8 md:h-14 md:w-10 text-blue-300 fill-current" />
                </div>
        
                {/* Right top cloud icon */}
                <div className="float-icon float-3 absolute right-4 top-10 md:right-10 md:top-16">
                  <FaCloud className="h-10 w-10 md:h-20 md:w-16 text-blue-200" />
                </div>
        
                {/* Right center chip icon */}
                <div className="float-icon float-4 absolute right-10 top-1/2 md:right-24 md:top-40">
                  <IoHardwareChipOutline className="h-8 w-8 md:h-10 md:w-8 text-green-300" />
                </div>
        
                {/* Blur color glows */}
                <div className="float-icon float-5 absolute right-4 bottom-8 md:right-38 md:bottom-58 -z-10">
                  <div className="h-28 w-28 md:h-40 md:w-40 rounded-full bg-green-300 opacity-70 blur-3xl" />
                </div>
        
                <div className="float-icon float-5 absolute left-6 top-14 md:left-64 md:top-32 -z-10">
                  <div className="h-28 w-28 md:h-40 md:w-40 rounded-full bg-blue-400 opacity-70 blur-3xl" />
                </div>
              </div>
        
              <div className="relative max-w-4xl mx-auto px-4 text-center">
                {/* Heading */}
                <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-bold text-slate-900 ">
                  About<span className="block  text-transparent bg-clip-text bg-linear-to-r from-[#2563EB] via-[#2563EB] to-[#22C55E]">Us</span>
                </h1>
        
                {/* Subtitle */}
                <p className="hero-subtitle mt-4 sm:mt-6 text-sm md:text-base lg:text-xl text-slate-600 max-w-2xl mx-auto">
                  At ClayCloud Technologies, we empower enterprises to become agile, data-driven, intelligent digital enterprises.<br className="hidden sm:block" />
                  With deep expertise in AI, Cloud, and Digital Engineering, we deliver measurable business outcomes across the globe.
                </p>
              </div>
            </section>
            <TechnologyMarquee />
            
            {/* intro section */}
            <section className="px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                
                {/* Left Column: Text */}
                <div className="p-4">
                    <h2 className={`text-4xl font-syne font-extrabold ${darkText}`}>
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
        {/* closed intro section */}

        {/* empowering secction */}

            <div className="sm:px-20 sm:py-12 mt-20 px-10 py-6 flex flex-col items-center justify-center">
            
                  {/* Heading animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    className="flex items-center justify-center flex-col"
                  >
                    <h1 className="text-black text-[28px] sm:text-[34px] md:text-[48px] font-syne font-bold text-center sm:text-left">
                      Empowering Sectors<span className="text-[#0a9cfa]">Globally</span>
                    </h1>
            
                    <p className="text-[#9CA3AF] font-inter text-[20px] mb-4 text-center w-full">
                      Deep domain expertise across multiple verticals
                    </p>
            
                    <div className="h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300"></div>
                  </motion.div>
            
                  {/* Cards with scroll animation */}
                  <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
                    {useCases.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.15 }}
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <ServeCard {...item} />
                      </motion.div>
                    ))}
                  </div>
            
                </div>
            <div className="mt-15">
            <UseCase />
            </div>
            <div className="mt-15">
            <TalkToUs />
            </div>
            <AboutCloud />
            </>
    )
}