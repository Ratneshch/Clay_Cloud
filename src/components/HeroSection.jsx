"use client";
import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { FaServer } from "react-icons/fa6";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";


const HeroSection = () => {
  return (
    <section className="hero-section relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f5f7ff] to-white pt-40 pb-24 font-inter">
      {/* Soft glow background */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="hero-glow h-72 w-72 bg-[radial-gradient(circle_at_center,#c7e2ff,transparent_60%)] opacity-70 blur-3xl" />
      </div>

      {/* FLOATING ICONS (ADDED) */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left bottom AI icon */}
        <div className="float-icon float-1 absolute left-12 bottom-20">
        
          <LuBrainCircuit className="h-16 w-14  text-green-300  fill-current  " />
        </div>

        {/* Left middle server icon */}
        <div className="float-icon float-2 absolute left-40 bottom-60 ">
          <div className="flex flex-col gap-1">
            
            <FaServer className="h-14 w-10 text-blue-300 fill-current " />
          </div>
        </div>

        {/* Right top cloud icon */}
        <div className="float-icon float-3 absolute right-30 top-16">
          <FaCloud className="h-20 w-16 text-blue-200  " />
        </div>

        {/* Right center chip icon */}
        <div className="float-icon float-4 absolute right-60 top-40">
          <IoHardwareChipOutline className="h-10 w-8 text-green-300" />
        </div>

        {/* Blur color things */}
      <div className="float-icon float-5 absolute right-50 bottom-46 -z-10">
  <div className="h-42 w-42 rounded-full bg-green-300 opacity-70 blur-3xl" />
</div>

 <div className="float-icon float-5 absolute left-56 top-36 -z-10">
  <div className="h-42 w-42 rounded-full bg-blue-400 opacity-70 blur-3xl" />
</div>

      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="hero-heading text-3xl md:text-[68px] font-extrabold text-slate-900 leading-tight">
          Redefining Digital
          <br className="hidden sm:block" />
          Transformation with
          <br className="hidden sm:block" />
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#2563EB] to-[#22C55E]">
            Cloud, AI &amp; Innovation
          </span>
        </h1>

        {/* Subtitle */}
       <p className="hero-subtitle mt-6 text-sm md:text-base lg:text-xl text-slate-600 max-w-2xl mx-auto">
  Empowering enterprises to accelerate digital growth through intelligent,<br/>
  cloud-native, and human-centric solutions.
</p>

        {/* CTA button */}
        <button className="hero-button mt-10 inline-flex items-center justify-center 
w-[206px] h-[68px] px-[48px] py-[20px] rounded-[16px]
text-sm md:text-base font-medium 
bg-[#111827] text-white shadow-md hover:bg-black/90 transition">
  Get Started
</button>

      </div>
      
    </section>
  );
};

export default HeroSection;
