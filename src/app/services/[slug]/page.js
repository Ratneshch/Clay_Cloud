


"use client";
import React from "react";
import { useParams } from "next/navigation";
import { LuBrainCircuit } from "react-icons/lu";
import { services } from "@/data/services.json";
import { FaServer } from "react-icons/fa6";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import Image from "next/image";

const Page = () => {
  const params = useParams();
  const { slug } = params;

  const service = services.find((item) => item.slug === slug);

  const images = Array.isArray(service.images)
    ? service.images
    : [service.images];

  return (
    <>
      <section className="hero-section relative w-full overflow-hidden bg-linear-to-b from-white via-[#f5f7ff] to-white pt-28 md:pt-40 pb-16 md:pb-24 font-inter">
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="hero-glow h-56 w-56 md:h-72 md:w-72 bg-[radial-gradient(circle_at_center,#c7e2ff,transparent_60%)] opacity-70 blur-3xl" />
        </div>

        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          <div className="float-icon float-1 absolute left-4 bottom-10 md:left-12 md:bottom-20">
            <LuBrainCircuit className="h-10 w-10 md:h-16 md:w-14 text-green-300 fill-current" />
          </div>

          <div className="float-icon float-2 absolute left-6 top-1/3 md:left-36 md:top-1/2">
            <FaServer className="h-8 w-8 md:h-14 md:w-10 text-blue-300 fill-current" />
          </div>

          <div className="float-icon float-3 absolute right-4 top-10 md:right-10 md:top-16">
            <FaCloud className="h-10 w-10 md:h-20 md:w-16 text-blue-200" />
          </div>

          <div className="float-icon float-4 absolute right-10 top-1/2 md:right-24 md:top-40">
            <IoHardwareChipOutline className="h-8 w-8 md:h-10 md:w-8 text-green-300" />
          </div>

          <div className="float-icon float-5 absolute right-4 bottom-8 md:right-38 md:bottom-58 -z-10">
            <div className="h-28 w-28 md:h-40 md:w-40 rounded-full bg-green-300 opacity-70 blur-3xl" />
          </div>

          <div className="float-icon float-5 absolute left-6 top-14 md:left-64 md:top-32 -z-10">
            <div className="h-28 w-28 md:h-40 md:w-40 rounded-full bg-blue-400 opacity-70 blur-3xl" />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-bold text-slate-900">
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#2563EB] via-[#2563EB] to-[#22C55E]">
              {service.Name}
            </span>
          </h1>

          <p className="hero-subtitle mt-4 sm:mt-6 text-sm md:text-base lg:text-xl text-slate-600 max-w-2xl mx-auto">
            {service.Description}
          </p>
        </div>
      </section>

      <section className="md:mt-10">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:p-16 px-4 text-center md:text-start">
            <h1 className="text-3xl md:text-3xl lg:text-[68px] font-bold text-slate-900">
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#2563EB] via-[#2563EB] to-[#22C55E]">
                {service.tag1}
              </span>
            </h1>

            <ul>
              {service.values.map((value, i) => (
                <li key={i}>
                  <p className="font-inter text-[14px] md:text-[16px] text-[#374151] mt-4 text-start flex items-start gap-2 px-4 md:px-6 max-w-full">
                    <GoDotFill className="mt-1 text-[#5179fc] flex-shrink-0" />
                    {value}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[20%] pt-6 md:pt-10 flex justify-center md:block">
            <motion.div
              animate={{ x: 0, y: [0, 20, 0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-[70%] sm:w-[50%] md:w-[40%] h-[200px] sm:h-[250px] md:h-[350px] md:absolute md:right-10"
            >
              <img
                src={images[0]}
                alt={service.Name}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIXED BRAIN ICON SECTION */}
      <section className="">
        <div className="w-full bg-[#f7f7f7] rounded-3xl px-8 py-10 flex flex-col items-center mt-15 justify-center">
          <h2 className="text-3xl text-black text-center font-bold mb-10">
            {service.tag2}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-center">
            {service.values2.map((item, index) => (
              <div key={index} className="flex flex-col items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 0.8 }}>
                  {/*  FIXED IMAGE */}
                  <Image src="/images/brain.png" alt="icon" width={70} height={50} />
                </motion.div>

                <h3 className="text-lg font-semibold text-black w-[70%]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-10">
        <div className="flex items-center flex-col justify-center">
          <h1 className="font-inter text-[30px] mb-4 w-[320px] md:w-full text-center font-bold text-black">
            {service.text}
          </h1>
          <div className="h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300"></div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-8 pt-10 px-10 place-items-center">
          {service.details.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="w-full max-w-[350px] h-[240px] rounded-2xl p-[2px] bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300 transition"
            >
              <div className="w-full h-full rounded-2xl bg-white hover:bg-gray-200 transition flex flex-col justify-start gap-4 px-6 py:3 md:py-6">
                <h1 className="text-[18px] sm:text-[20px] font-syne font-bold pt-6">
                  {item.title}
                </h1>

                <p className="font-inter text-[12px] sm:text-[14px] font-medium text-gray-700 leading-relaxed w-full">
                  {item.info}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
