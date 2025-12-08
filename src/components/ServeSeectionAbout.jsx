"use client";
import { motion } from "framer-motion";
import useCases from "@/data/serve.json";
import ServeCard from "@/components/ServeCard";

const ServeSeectionAbout = () => {
  return (
    <div className="sm:px-20 sm:py-12 mt-20 px-10 py-6 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center flex-col"
      >
        <h1 className="text-black text-[28px] sm:text-[34px] md:text-[48px] font-syne font-bold text-center">
          Industries We <span className="text-[#0a9cfa]">Serve</span>
        </h1>
        <p className="text-[#9CA3AF] font-inter text-[20px] mb-4 text-center w-full">
          Deep domain expertise across multiple verticals
        </p>
        <div className="h-0.5 w-48 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300"></div>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
        {useCases.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <ServeCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ServeSeectionAbout