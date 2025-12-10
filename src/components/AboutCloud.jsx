"use client";

import React from 'react'
import data from "@/data/about.json";
import AboutCard from '@/components/AboutCard'
import { motion } from "framer-motion";

const AboutCloud = () => {
 const { cardData, valuesData } = data;

  return (
    <div className='sm:px-20 sm:py-12 mt-20 px-10 py-6 flex flex-col items-center justify-center'>

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className='flex items-center justify-center flex-col'
      >
        <h1 className='text-black text-[28px] sm:text-[34px] md:text-[48px] font-syne font-bold text-center sm:text-left'>
          About <span className='text-[#0a9cfa]'>ClayCloud</span>
        </h1>

        <p className='text-[#9CA3AF] font-inter text-[20px] mb-4 text-center w-1/1 sm:w-full'>
          Building the future of digital transformation
        </p>

        <div className='h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300'></div>
      </motion.div>

      {/* About Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-15 px-4">
        {cardData.map((item, index) => (
          <AboutCard
            key={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
            bgcolor={item.bgcolor}
            textcolor={item.textcolor}
            shadowColor={item.shadowColor}
          />
        ))}
      </div>

      {/* Core Values Section */}
      <div className="w-full bg-[#f7f7f7] rounded-3xl px-8 py-10 flex flex-col items-center mt-15 justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-black text-center font-bold mb-10"
        >
          Our Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-center">
          {valuesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.iconBg}`}>
                <img src={item.icon} alt={item.title} className="mb-3 pt-3" />
              </div>

              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="text-sm font-inter text-[#5A5A5A] max-w-[350px]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutCloud;
