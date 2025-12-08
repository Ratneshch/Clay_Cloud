"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import resourcesData from "@/data/blogcontent.json"

const filterTypes = ["All", "Media", "Case Study", "Blog"];
const typeColors = ["bg-blue-200", "bg-green-200", "bg-purple-200", "bg-red-200", "bg-yellow-200", "bg-pink-200"];

export default function InsightsResources() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? resourcesData
      : resourcesData.filter((item) => item.type.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16">
      {/* Section Title */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false }} className="text-center mb-10">
       <div className="flex items-center justify-center flex-col mt-5 mb-5 px-4 sm:px-6 md:px-0">
        <h2 className="text-3xl sm:text-[48px] font-bold">
          Insights & <span className="text-blue-500">Resources</span>
        </h2>
        <p className="text-gray-500 mt-2">Stay updated with the latest trends and insights</p>
        <div className="h-[2px] w-24 sm:w-36 md:w-48 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300 mt-3 rounded" />
        </div>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.5 }} className="overflow-x-auto hide-scrollbar mb-10">
        <div className="flex gap-3 min-w-max justify-center">
          {filterTypes.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-inter font-medium transition whitespace-nowrap ${activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-100"
                }`}
            >
              
              {filter}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cards */}

      <div className="overflow-x-auto hide-scrollbar">
  <motion.div className="flex gap-6 my-10 min-w-[960px]">
    <AnimatePresence>
      {filteredData.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-[calc((100%/3)-16px)] flex flex-col"
        >
          <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />

          <div className="p-5 flex flex-col flex-1">
            <span
              className={`inline-block max-w-max text-xs font-medium font-inter text-black px-2 py-1 rounded-full ${typeColors[index % typeColors.length]}`}
            >
              {item.type}
            </span>

            <h3 className="mt-2 text-lg font-inter font-semibold">{item.title}</h3>
            <p className="mt-1 text-gray-500 font-inter text-sm">{item.short_desc}</p>

            <Link
              href={`/blog/${item.slug}`}
              className="mt-auto inline-block text-blue-500 font-inter font-medium hover:underline"
            >
              {item.linkText} →
            </Link>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
</div>



      {/* View All Button */}
      <motion.div className="flex justify-center mt-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.5 }}>
        <Link href="/blog">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-inter px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            View All
          </button>
        </Link>
      </motion.div>
    </section>
  );
}



