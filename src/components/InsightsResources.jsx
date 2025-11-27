"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resourcesData } from "@/data/products";

const filterTypes = ["All", "Media", "Case Study", "Blog", "Events & Webinars"];

const typeColors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-purple-200",
  "bg-red-200",
  "bg-yellow-200",
  "bg-pink-200",
];

export default function InsightsResources() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredData =
    activeFilter === "All"
      ? resourcesData
      : resourcesData.filter((item) => item.type === activeFilter);

  return (
    <section className="px-4 sm:px-6 lg:px-20 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-[48px] font-bold">
          Insights & <span className="text-blue-500">Resources</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Stay updated with the latest trends and insights
        </p>
      </div>

      {/* Filter Buttons (horizontal scroll) */}
      <div className="overflow-x-auto hide-scrollbar mb-10">
        <div className="flex gap-3 min-w-max justify-center">
          {filterTypes.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-inter font-medium transition whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-blue-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Cards (horizontal scroll without scrollbar) */}
      <div className="overflow-x-auto hide-scrollbar -mx-4 px-4">
        <motion.div className="flex gap-6 min-w-max justify-center my-10">
          <AnimatePresence>
            {filteredData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex-shrink-0 w-[300px] sm:w-[320px] lg:w-[340px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <span
                    className={`text-xs font-medium font-inter text-black px-2 py-1 sm:px-3 rounded-full ${
                      typeColors[index % typeColors.length]
                    }`}
                  >
                    {item.type}
                  </span>
                  <h3 className="mt-2 text-lg font-inter font-semibold">{item.title}</h3>
                  <p className="mt-1 text-gray-500 font-inter text-sm">{item.description}</p>
                  <a
                    href={item.linkUrl}
                    className="mt-3 inline-block text-blue-500 font-inter font-medium hover:underline"
                  >
                    {item.linkText} →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-inter px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
          View All
        </button>
      </div>

     
    </section>
  );
}
