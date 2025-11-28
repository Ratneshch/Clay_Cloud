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
    <section className="pb-10 pt-6 md:pb-12 md:pt-8 text-center bg-white overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold text-[#1e1b4b]">
        Our Technology Partners
      </h2>
      <p className="mt-3 text-xs sm:text-sm md:text-[18px] text-slate-600 max-w-xl mx-auto px-4">
        We collaborate with world-class technology providers to deliver
        cutting-edge transformation outcomes.
      </p>

      {/* Marquee */}
      <div className="relative mt-8 md:mt-12 w-full overflow-hidden">
        <div className="flex m-5 gap-4 sm:gap-6 md:gap-8 animate-marquee">
          {[...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="w-[180px] h-[90px] sm:w-[80px] sm:h-[50px] md:w-[206px] md:h-[108px] p-[1px] bg-white rounded-[18px] sm:rounded-[20px] md:rounded-[24px] shadow-md flex items-center justify-center border border-emerald-100">
              <Image
                src={logo}
                alt="Technology Partner"
                width={80}
                height={40}
                className="object-contain opacity-90 max-h-[60%] max-w-[70%]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyMarquee;
