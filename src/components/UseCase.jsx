"use client";

import React from "react";
import UseCaseCard from "./UseCaseCard";
import { motion } from "framer-motion";
import useCaseData from "@/data/usecase.json";


const UseCase = () => {
 

  return (
    <motion.div
      className="sm:px-20 sm:py-12 px-10 py-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}                   
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Heading */}
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-black text-[28px] sm:text-[34px] md:text-[48px] font-syne font-bold text-center sm:text-left">
          Why ClayCloud <span className="text-[#0a9cfa]">Technologies</span>
        </h1>
        <div className="h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300"></div>
      </div>

      {/* Cards */}
      <div className="mt-15 flex flex-wrap justify-center gap-10">
        {useCaseData.map((item) => (
          <UseCaseCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            shadowColor={item.shadowColor}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default UseCase;
