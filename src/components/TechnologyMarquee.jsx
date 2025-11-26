"use client";
import React from "react";
import Image from "next/image";

const partners = [
  "/images/amazon.png",
  "/images/Microsoft.png",
  "/images/Databricks.png",
];

const TechnologyMarquee = () => {
  return (
    <section className="pb-12 pt-6 text-center bg-white overflow-hidden">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b]">
        Our Technology Partners
      </h2>
      <p className="mt-3 text-slate-600 text-sm md:text-base max-w-xl mx-auto">
        We collaborate with world-class technology providers to deliver
        cutting-edge transformation outcomes.
      </p>

      {/* Marquee */}
      <div className="relative mt-12 w-full overflow-hidden">
        <div className="flex gap-8 animate-marquee">
          {[...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="min-w-[220px] h-[110px] bg-white rounded-xl shadow-md flex items-center justify-center border border-emerald-100"
            >
              <Image
                src={logo}
                alt="Technology Partner"
                width={80}
                height={40}
                className="object-contain opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default TechnologyMarquee;
