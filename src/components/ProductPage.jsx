// ProductPage.jsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/data/products";

import { RiRobot2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";

export default function ProductPage() {
  const icons = { users: <FaUsers />, robot: <RiRobot2Fill /> };

  const ProductCard = ({ icon, title, subtitle, description, image, tags }) => {
    const tagColors = [
      "bg-blue-200",
      "bg-green-200",
      "bg-purple-200",
      "bg-red-200",
      "bg-yellow-200",
      "bg-pink-200",
    ];

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setAnimate(true);
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={animate ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.7 }}
        className="w-full sm:w-80 md:w-96 lg:w-[624px] px-5 h-auto lg:h-[480px]"
      >
        <div className="bg-white rounded-2xl shadow-[8px_10px_20px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.12)] p-4 sm:p-5 md:p-6 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
          {/* Icon + Title */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-xl sm:text-2xl">
              {icon}
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-inter font-semibold">
                {title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-base font-inter text-gray-500">
                {subtitle}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-sm lg:text-base font-inter text-gray-600 ">
            {description}
          </p>

          {/* Image */}
          <motion.img
            src={image}
            alt={title}
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover mb-2 rounded-xl mt-3 sm:mt-4"
            whileHover={{ scale: 1.02 }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mt-2 sm:mt-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-0.5 sm:px-3 sm:py-1 font-inter rounded-full text-xs sm:text-xs ${
                  tagColors[index % tagColors.length]
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  // -----------------------------------------
  // Product Page UI
  // -----------------------------------------
  return (
    <main className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 max-w-screen-xl mx-auto">
      {/* Heading */}
      <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold">
          Intelligent <span className="text-blue-500">Solutions</span>
        </h2>
        <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
          Purpose-built products that solve real business challenges
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 lg:gap-30">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            icon={icons[item.icon]}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            image={item.image}
            tags={item.tags}
          />
        ))}
      </div>
    </main>
  );
}
