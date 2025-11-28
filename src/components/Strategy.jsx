import Image from "next/image";
import React from "react";
import Brain from "@/assets/Brain.png";
import clouldicon from "@/assets/clouldicon.png";
import graph from "@/assets/graph.png";

const Strategy = () => {
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
    <section className="bg-gradient-to-br from-[#121A2D] to-[#1D3784] py-16 px-4 sm:px-6 md:px-6">
      <h3 className="text-[36px] sm:text-[42px] md:text-[48px] font-syne font-bold text-center text-white max-w-[90%] sm:max-w-[678px] mx-auto">
        Strategy & Advisory
      </h3>
      <p className="text-center font-liberation text-[16px] sm:text-[18px] md:text-[20px] max-w-[95%] sm:max-w-[840px] mx-auto text-[#B8B8C7] pt-4">
        Our Digital Advisory practice helps CXOs and IT leaders evaluate where they are and design actionable roadmaps to accelerate transformation. We assess readiness, identify opportunities, and guide your teams toward building data-driven, AI-first organizations.
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-12 md:pt-16 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <li key={index}>
            <div className="bg-[#FFFFFF1A] px-4 sm:px-6 py-6 rounded-[16px] border border-white/20 text-center">
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
              <button className="bg-white text-[#192C62] rounded-full px-5 sm:px-6 py-2 mx-auto block 
                transition duration-300 hover:text-white hover:bg-[#192C62] hover:scale-105">
                <span className="font-inter text-[14px] sm:text-[16px] text-current">
                  Talk to Us
                </span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Strategy;
