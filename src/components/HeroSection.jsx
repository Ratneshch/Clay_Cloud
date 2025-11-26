"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f5f7ff] to-white pt-45 pb-24">
      {/* Soft glow background */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="hero-glow h-72 w-72 bg-[radial-gradient(circle_at_center,#c7e2ff,transparent_60%)] opacity-70 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="hero-heading text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Redefining Digital
          <br className="hidden sm:block" />
          Transformation with
          <br className="hidden sm:block" />
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#2563EB] to-[#22C55E]">
            Cloud, AI &amp; Innovation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle mt-6 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          Empowering enterprises to accelerate digital growth through intelligent,<br/>
          cloud-native, and human-centric solutions.
        </p>

        {/* CTA button */}
        <button className="hero-button mt-10 inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm md:text-base font-medium bg-[#111827] text-white shadow-md hover:bg-black/90 transition">
          Get Started
        </button>
      </div>
      
    </section>
  );
};

export default HeroSection;
