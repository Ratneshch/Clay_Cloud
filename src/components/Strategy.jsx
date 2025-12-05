"use client";

import Image from "next/image";
import React, { useRef, useEffect } from "react";
import Brain from "@/assets/Brain.png";
import clouldicon from "@/assets/clouldicon.png";
import graph from "@/assets/graph.png";
import { motion, useAnimation, useInView } from "framer-motion";


const Strategy = () => {
  const sectionRef = useRef(null);
   const cardsRef = useRef(null); 

  const cardsControls = useAnimation();
  const isInView = useInView(sectionRef, { margin: "-10% 0px -10% 0px" });


  // Trigger card animation
  useEffect(() => {
    if (isInView) {
      cardsControls.start("visible");
    }
  }, [isInView]);

  const cards = [
    {
      icon: Brain,
      Name: "AI Readiness Assessment",
      Content:
        "Evaluate your organization's AI maturity, data infrastructure, and talent capabilities to build a comprehensive AI transformation roadmap.",
    },
    {
      icon: clouldicon,
      Name: "Cloud Readiness Assessment",
      Content:
        "Analyze your current infrastructure, applications, and processes to create a strategic cloud migration and optimization plan.",
    },
    {
      icon: graph,
      Name: "Digital Maturity Assessment",
      Content:
        "Measure your organization's digital transformation progress across people, processes, technology, and culture dimensions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#121A2D] to-[#1D3784] min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-4 "
    >
      {/* 🔥 Updated Text Animation: Smooth Fade + Slide-in */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-syne font-bold text-center max-w-[90%] sm:max-w-[678px] mx-auto 
        text-[28px] sm:text-[36px] md:text-[48px] leading-[1.1] break-words text-white pt-8 md:pt-0 "
      >
        Strategy & Advisory

      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center font-liberation text-[16px] sm:text-[18px] md:text-[20px] max-w-[95%] sm:max-w-[840px] mx-auto pt-4 text-[#E7E7FF]"
      >
        Our Digital Advisory practice helps CXOs and IT leaders evaluate where
        they are and design actionable roadmaps to accelerate transformation. We
        assess readiness, identify opportunities, and guide your teams toward
        building data-driven, AI-first organizations.
      </motion.p>

      <ul
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6 pt-8 md:pt-10 max-w-6xl mx-auto"
      >
        {cards.map((card, index) => (
          <motion.li
            key={index}
            className={`card-item ${
              index === cards.length - 1 ? "pb-8 sm:pb-0" : ""
            }`}
            variants={{
              hidden: {
                opacity: 0,
                y: 60,
                scale: 0.92,
                filter: "blur(6px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 1.1,
                  delay: index * 0.3,
                  ease: "easeOut",
                },
              },
            }}
            initial="hidden"
            animate={cardsControls}
          >
            <div className="bg-[#FFFFFF1A] px-4 sm:px-6 py-6 rounded-[16px] border border-white/20 text-center shadow-lg backdrop-blur-md">
              <Image
                src={card.icon}
                alt={card.Name}
                width={56}
                height={56}
                className="mx-auto"
              />


              <h5 className="font-syne text-[20px] sm:text-[22px] md:text-[24px] font-bold text-white mb-3 pt-3">
                {card.Name}
              </h5>

              <p className="font-inter text-[13px] sm:text-[14px] md:text-[14px] text-[#9797A0] max-w-[90%] sm:max-w-[270px] mx-auto mb-5">
                {card.Content}
              </p>

              <button
                className="bg-white text-[#192C62] rounded-full px-5 sm:px-6 py-2 mx-auto block
              transition duration-300 hover:text-white hover:bg-[#192C62] hover:scale-105"
              >
                Talk to Us
              </button>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Strategy;
