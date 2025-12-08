"use client";

import React, { useState } from "react";
import { BsGraphUp } from "react-icons/bs";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaStar, FaAngleUp, FaAngleDown } from "react-icons/fa6";

export default function ClayCloudHR({ product }) {
  const hero = product.hero;
  

  // Accordion state
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtons = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = product.sections; // your accordion data
  const Payroll = product.defaultImage; // default image

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center font-[Poppins] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero.image})` }}
        ></div>

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-3xl mx-auto text-center px-4 text-white mt-16 md:mt-10">
          <h1 className="text-3xl md:text-5xl font-[Poly] leading-tight">
            {hero.heading}
          </h1>

          <p className="mt-6 text-lg md:text-[22px] font-light">
            {hero.subheading}
          </p>
        </div>

        {/* Left Floating Card */}
        <div className="hidden md:flex absolute left-8 top-60 bg-white p-3 shadow-lg rounded-lg items-center gap-2">
          <div className="bg-[#FAA307] p-2 rounded-md">
            <BsGraphUp className="text-white text-xl" />
          </div>
          <div>
            <p className="font-bold">45%</p>
            <p className="text-gray-600 text-xs">{hero.efficiency}</p>
          </div>
        </div>

        {/* Right Floating Card */}
        <div className="hidden md:flex absolute right-8 top-72 bg-white p-3 shadow-lg rounded-lg items-center gap-2">
          <div className="bg-[#FAA307] p-2 rounded-md">
            <FaClock className="text-white text-xl" />
          </div>
          <div>
            <p className="font-bold">80hrs</p>
            <p className="text-gray-600 text-xs">{hero.saved}</p>
          </div>
        </div>

        {/* HERO FOOTER */}
        <div className="absolute bottom-6 w-full text-center text-white">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-yellow-500 text-2xl" />
              <span>{hero.nocard}</span>
            </div>

            <div className="flex items-center gap-2">
              <IoIosPeople className="text-yellow-500 text-2xl" />
              <span>{hero.trust}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500 text-2xl" />
              <span>{hero.rating}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACCORDION + IMAGE SECTION (ADDED) ================= */}
      <div className="bg-gradient-to-br from-[#FFF8E7] to-[#FFFFFF] py-12 px-4 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[26px] md:text-[40px] lg:text-[48px] font-Poppins font-bold text-[#03071E] leading-snug">
            Combine All Your HR Systems Into One Platform
          </h1>
          <p className="mt-3 text-[14px] md:text-[18px] text-gray-600 font-Roboto">
            Eliminate data silos and streamline your HR operations with our
            comprehensive suite of integrated tools.
          </p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-12 gap-10 lg:gap-20">
          
          {/* Left Accordion Section */}
          <div className="w-full lg:w-1/2 space-y-5">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`w-full p-5 bg-white shadow-md rounded-xl border transition-all duration-300 ${
                  activeIndex === index
                    ? "border-[#FAA307] border-2"
                    : "border-[#E2E2E2]"
                }`}
              >
                <button
                  onClick={() => handleButtons(index)}
                  className="flex justify-between items-center w-full"
                >
                  <div className="flex items-center gap-3 text-left">
                    <img
                      src={section.icon}
                      alt={section.title}
                      className="h-8 w-8 bg-[#FAA3071A] p-2 rounded-md"
                    />
                    <p className="font-Poppins font-semibold text-[15px] md:text-[18px] text-[#03071E]">
                      {section.title}
                    </p>
                  </div>

                  {activeIndex === index ? (
                    <FaAngleUp className="text-[#FAA307] text-lg" />
                  ) : (
                    <FaAngleDown className="text-gray-500 text-lg" />
                  )}
                </button>

                {activeIndex === index && (
                  <div className="mt-3 space-y-3">
                    <p className="font-Roboto text-[14px] text-gray-600 leading-relaxed">
                      {section.description}
                    </p>

                    <div className="block lg:hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-auto object-cover rounded-2xl shadow-md mt-3"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Image (Desktop only) */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center">
            {sections.map(
              (section, index) =>
                activeIndex === index && (
                  <img
                    key={section.id}
                    src={section.image}
                    alt={section.title}
                    className="w-full max-w-[600px] h-auto object-cover rounded-2xl shadow-md transition-all duration-300"
                  />
                )
            )}

            {activeIndex === null && (
              <img
                src={Payroll}
                alt="Default HR"
                className="w-full max-w-[600px] h-auto object-cover rounded-2xl shadow-md opacity-70"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
