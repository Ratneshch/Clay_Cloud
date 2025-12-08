"use client";

import React from "react";
import { motion } from "framer-motion";

const UseCaseCard = ({ icon, title, description, shadowColor }) => {
  return (
    <motion.div
      className="max-w-xs bg-white rounded-2xl px-10 py-5 flex flex-col items-center text-center transition-shadow duration-300"
      style={{
        boxShadow: `4px 4px 2px 3px ${shadowColor}`,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}                 
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-purple-100 p-4 rounded-lg mb-4">
        <img src={icon} alt={title} className="h-8 w-8" />
      </div>
      <h3 className="text-[18px] sm:text-[24px] font-inter mb-2 text-black font-bold">
        {title}
      </h3>
      <p className="text-gray-800 font-inter text-[14px] sm:text-[px]">
        {description}
      </p>
    </motion.div>
  );
};

export default UseCaseCard;
