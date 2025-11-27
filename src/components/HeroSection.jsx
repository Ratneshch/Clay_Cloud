"use client";
import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { FaServer } from "react-icons/fa6";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";

const HeroSection = () => {
  return (
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
          Redefining Digital
          <br className="hidden sm:block" />
          Transformation with
          <br className="hidden sm:block" />
          <span className="block  text-transparent bg-clip-text bg-linear-to-r from-[#2563EB] via-[#2563EB] to-[#22C55E]">
            Cloud, AI &amp; Innovation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle mt-4 sm:mt-6 text-sm md:text-base lg:text-xl text-slate-600 max-w-2xl mx-auto">
          Empowering enterprises to accelerate digital growth through intelligent,<br className="hidden sm:block" />
          cloud-native, and human-centric solutions.
        </p>

        {/* CTA button */}
        <button className="hero-button mt-8 sm:mt-10 inline-flex items-center justify-center sm:w-auto sm:min-w-[180px] md:w-[206px] md:h-[68px] px-8 py-3 md:px-12 md:py-5 rounded-xl md:rounded-2xl text-sm md:text-base font-medium bg-[#111827] text-white shadow-md hover:bg-black/90 transition">
          Get Started
        </button>

      </div>
    </section>
  );
};

export default HeroSection;
