import React from 'react'
import UseCaseCard from './UseCaseCard'
import ppl from "../assets/ppl.png";
import cloud from "../assets/cloud.png";
import earth from "../assets/earth.png";
import hand from "../assets/hand.png";
import bulb from "../assets/bulb.png";


const UseCase = () => {
    const useCaseData = [
  {
    id: 1,
    title: "Cloud-Native DNA",
    description: "Deep expertise across AWS, Azure, and Databricks ecosystems.",
    icon: cloud,
    shadowColor: "#7677CD"
  },
  {
    id: 2,
    title: "AI-Driven Innovation",
    description: "Building intelligent solutions powered by advanced AI and GenAI models.",
    icon: bulb,
    shadowColor: "#e901f5"
  },
  {
    id: 3,
    title: "Customer-First Mindset",
    description: "Every engagement is outcome-focused and co-created with clients.",
    icon: hand,
    shadowColor: "#075515"
  },
  {
    id: 4,
    title: "Global Delivery Model",
    description: "Agile teams across India and the US for continuous delivery.",
    icon: earth,
    shadowColor: "#017991"
  },
  {
    id: 5,
    title: "Strong Partner Ecosystem",
    description: "Strategic alliances that accelerate customer success.",
    icon: ppl,
    shadowColor: "#0365b5"
  }
];
  return (
    <div className='sm:px-20 sm:py-12 px-10 py-6 flex flex-col items-center justify-center'>
        {/* First Part */}
        <div className='flex items-center justify-center flex-col'>
              <h1 className='text-black text-[28px] sm:text-[34px] md:text-[48px] font-syne font-bold text-center sm:text-left'>
                  Why ClayCloud <span className='text-[#0a9cfa]'>Technologies</span>
              </h1>

              <div className='h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300'></div>
        </div>

        {/* second part */}
        <div className='mt-15 flex flex-wrap justify-center gap-10'>
            {useCaseData.map(item =>(
                <UseCaseCard key={item.id} title={item.title} description={item.description} icon={item.icon} shadowColor={item.shadowColor} />
            ))}
        </div>

    </div>
  )
}

export default UseCase