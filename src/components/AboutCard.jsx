"use client";
import React from 'react'
import { motion } from "framer-motion";

const AboutCard = ({ title, description, icon, bgcolor, textcolor, shadowColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full sm:w-[190px] md:w-[230px] lg:w-[270px] h-[180px] rounded-2xl px-6 py-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-[1.03]"
      style={{ backgroundColor: bgcolor, boxShadow: `4px 4px 2px 3px ${shadowColor}` }}
    >
      <img src={icon.src} alt={title} className="mb-3" />

      <h3 className="text-[20px] font-bold font-syne" style={{ color: textcolor }}>
        {title}
      </h3>

      <p className="text-[14px] mt-1 font-inter" style={{ color: textcolor }}>
        {description}
      </p>
    </motion.div>
  )
}

export default AboutCard;
