"use client";

import React from "react";
import Link from "next/link"
import { motion } from "framer-motion";

const TalkToUs = () => {
  return (
    <section className="w-full mb-20  md:px-20 px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="w-full bg-[#F8F8F8] rounded-xl py-12 flex flex-col items-center justify-center text-center shadow-sm"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="text-xl md:text-[48px] md:w-200 w-50 font-bold font-syne text-[#000000] leading-tight"
        >
          Ready to Transform Your{" "}
          <span className="text-[#2377FF] font-syne">Business?</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: false }}
          className="text-[#9CA3AF] mt-4 font-inter text-sm md:text-[20px] max-w-xl"
        >
          Let's discuss how ClayCloud Technologies can help you achieve your
          digital transformation goals.
        </motion.p>

        {/* Button */}
        <Link href='/contact'>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
          className="mt-6 md:px-18 md:py-4 px-8 py-2 rounded-full text-white text-sm font-semibold font-inter
            bg-linear-to-r from-[#3943FF] to-[#2EC8FF] shadow-md hover:opacity-90 transition-all"
        >
          TALK TO US
        </motion.button>
         </Link>
      </motion.div>
    
    </section>
  );
};

export default TalkToUs;
