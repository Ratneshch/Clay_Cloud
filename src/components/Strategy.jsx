"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Brain from "@/assets/Brain.png";
import clouldicon from "@/assets/clouldicon.png";
import graph from "@/assets/graph.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Strategy = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const headingSplit = new SplitType(headingRef.current, { types: "chars" });
    const subSplit = new SplitType(subRef.current, { types: "chars" });

    gsap.set(headingSplit.chars, { color: "#4a5568" });
    gsap.set(subSplit.chars, { color: "#4a5568" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1600",
        scrub: true,
        pin: true,
      }
    });

    tl.to(headingSplit.chars, {
      color: "#ffffff",
      duration: 1,
      stagger: 0.045,
      ease: "none"
    });

    tl.to(subSplit.chars, {
      color: "#E7E7FF",
      duration: 1,
      stagger: 0.02,
      ease: "none"
    }, "+=0.5");

    // 🟦 Smooth Cinematic Card reveal
    tl.fromTo(
      cardsRef.current.querySelectorAll(".card-item"),
      { opacity: 0, y: 60, scale: 0.92, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 2.5,
        stagger: 0.5,
        ease: "expo.out"
      },
      "+=0.6"
    );

  }, []);

  const cards = [
    {
      icon: Brain,
      Name: "AI Readiness Assessment",
      Content: "Evaluate your organization's AI maturity, data infrastructure, and talent capabilities to build a comprehensive AI transformation roadmap.",
    },
    {
      icon: clouldicon,
      Name: "Cloud Readiness Assessment",
      Content: "Analyze your current infrastructure, applications, and processes to create a strategic cloud migration and optimization plan.",
    },
    {
      icon: graph,
      Name: "Digital Maturity Assessment",
      Content: "Measure your organization's digital transformation progress across people, processes, technology, and culture dimensions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#121A2D] to-[#1D3784] min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-6"
    >
      <h3
        ref={headingRef}
        className="text-[36px] sm:text-[42px] md:text-[48px] font-syne font-bold text-center max-w-[90%] sm:max-w-[678px] mx-auto"
        style={{ color: "#4a5568" }}
      >
        Strategy & Advisory
      </h3>

      <p
        ref={subRef}
        className="text-center font-liberation text-[16px] sm:text-[18px] md:text-[20px] max-w-[95%] sm:max-w-[840px] mx-auto pt-4"
        style={{ color: "#4a5568" }}
      >
        Our Digital Advisory practice helps CXOs and IT leaders evaluate where they are and design actionable roadmaps to accelerate transformation. We assess readiness, identify opportunities, and guide your teams toward building data-driven, AI-first organizations.
      </p>

      <ul
        ref={cardsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-6 pt-8 md:pt-10 max-w-6xl mx-auto"
      >
        {cards.map((card, index) => (
          <li key={index} className="card-item">
            <div className="bg-[#FFFFFF1A] px-4 sm:px-6 py-6 rounded-[16px] border border-white/20 text-center shadow-lg backdrop-blur-md">
              <Image
                src={card.icon}
                alt={card.Name}
                width={56}
                height={56}
                className="mx-auto mb-4"
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Strategy;
