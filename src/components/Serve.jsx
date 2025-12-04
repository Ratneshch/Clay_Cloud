"use client";
import React from "react";
import { motion } from "framer-motion";

import cart from "../assets/cart.png";
import bag from "../assets/bag.png";
import plane from "../assets/plane.png";
import factory from "../assets/factory.png";
import heart from "../assets/heart.png";
import car from "../assets/car.png";

import ServeCard from "./ServeCard";

const Serve = () => {
  const useCases = [
    {
      id: 1,
      title: "Healthcare",
      description: "Digital health solutions, patient management, and telemedicine platforms",
      icon: heart,
      bgcolor: "#FBEBF1",
      textcolor: "#FF5151",
      bordercolor: "#FF5151",
      iconolor: "#f8cad7",
      shadowColor: "#f8cad7",
    },
    {
      id: 2,
      title: "Industrial",
      description: "IoT solutions, predictive maintenance, and smart manufacturing",
      icon: factory,
      bgcolor: "#d3e4fa",
      textcolor: "#1b56f0",
      bordercolor: "#1b56f0",
      iconolor: "#b0d5f6",
      shadowColor: "#b0d5f6",
    },
    {
      id: 3,
      title: "Retail",
      description: "E-commerce platforms, inventory management, and customer analytics",
      icon: cart,
      bgcolor: "#cdf9dd",
      textcolor: "#009f3a",
      bordercolor: "#009f3a",
      iconolor: "#a9eec7",
      shadowColor: "#a9eec7",
    },
    {
      id: 4,
      title: "Travel",
      description: "Booking systems, travel management, and customer experience platforms",
      icon: plane,
      bgcolor: "#eeddff",
      textcolor: "#9337ef",
      bordercolor: "#9337ef",
      iconolor: "#d9c4fd",
      shadowColor: "#d9c4fd",
    },
    {
      id: 5,
      title: "Automotive",
      description: "Connected vehicles, fleet management, and autonomous driving solutions",
      icon: car,
      bgcolor: "#feddc2",
      textcolor: "#f4750d",
      bordercolor: "#f4750d",
      iconolor: "#fcc2a5",
      shadowColor: "#fcc2a5",
    },
    {
      id: 6,
      title: "HR Tech",
      description: "Workforce management, talent acquisition, and employee engagement",
      icon: bag,
      bgcolor: "#bed0fd",
      textcolor: "#1b56f0",
      bordercolor: "#1b56f0",
      iconolor: "#9ac3fc",
      shadowColor: "#9ac3fc",
    },
  ];

  return (
    <div className="sm:px-20 sm:py-12 mt-20 px-10 py-6 flex flex-col items-center justify-center">

      {/* Heading animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex items-center justify-center flex-col"
      >
        <h1 className="text-black text-[28px] sm:text-[34px] md:text-[48px] font-syne font-bold text-center sm:text-left">
          Industries We <span className="text-[#0a9cfa]">Serve</span>
        </h1>

        <p className="text-[#9CA3AF] font-inter text-[20px] mb-4 text-center w-full">
          Deep domain expertise across multiple verticals
        </p>

        <div className="h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300"></div>
      </motion.div>

      {/* Cards with scroll animation */}
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10">
        {useCases.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ServeCard {...item} />
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Serve;
