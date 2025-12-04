'use client'
import React, { useState, useRef } from 'react'
import { GoDotFill } from "react-icons/go";
import { BiSolidRightArrowSquare } from "react-icons/bi";
import { services } from '@/data/services';
import {motion} from "framer-motion"

const Services = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const scrollRef = useRef(null)
    const btnRefs = useRef([])

    const handleButtons = (index) => {
        setActiveIndex(index)
        btnRefs.current[index]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        })
    }

    return (
        <section className='pb-12 pt-6 text-center bg-white overflow-hidden'>
            <motion.div
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
      <div className="flex items-center justify-center flex-col">
            <h2 className='text-[24px] md:text-[48px] font-bold text-[#03045E]'>
                Our Core Consulting Services
            </h2>
            <div className="h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300"></div>
            </div>
            </motion.div>

            <div className='md:pt-14 pt-8'>

                {/* TABS */}
                <ul className="flex py-4 overflow-x-auto hidescrollbar whitespace-nowrap">
                    {services.map((item, index) => (
                        <li
                            key={index}
                            ref={(el) => (btnRefs.current[index] = el)}
                            className="inline-block w-[70%] sm:w-[40%] md:w-[22%] flex-shrink-0 text-center"
                        >
                            <button
                                onClick={() => handleButtons(index)}
                                className={`cursor-pointer text-[16px] sm:text-[14px] md:text-[16px] font-semibold text-[#1e1b4b] relative pb-2 ${activeIndex === index
                                    ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-gradient-to-r after:from-[#0077B6] after:to-[#00B4D8]"
                                    : ""
                                    }`}
                            >
                                {item.Name}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* CONTENT */}
                {activeIndex !== null && (
                    <div key={activeIndex} className="animate-fadeInUp">

                        <section className='flex flex-col md:flex-row items-start justify-start mt-10 px-4 sm:px-6 md:px-10 gap-6'>

                            {/* TEXT */}
                            <div className='w-full md:w-[55%]'>
                                <h2 className='font-inter text-[26px] sm:text-[28px] md:text-[30px] font-bold text-[#03045E] text-start'>
                                    {services[activeIndex].Heading}
                                </h2>

                                <p className='font-inter text-[16px] sm:text-[17px] md:text-[18px] text-[#374151] mt-4 text-start'>
                                    {services[activeIndex].Description}
                                </p>
                                <div className='flex justify-start'>
                                <button className=' cursor-pointer mt-6 md:px-18 md:py-4 px-8 py-2 rounded-full text-white text-sm font-semibold font-inter   bg-linear-to-r from-[#3943FF] to-[#2EC8FF] shadow-md hover:opacity-90 transition-all'>
                                    Learn more
                                </button>
                            </div>
                            </div>
                            
                            {/* IMAGES */}
                            <div className='w-full md:w-[45%] flex flex-col gap-4'>
                                {services[activeIndex].images?.map((img, k) => (
                                    <img
                                        key={k}
                                        src={img.src}
                                        alt={services[activeIndex].Name}
                                        className='w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover rounded-lg shadow-md'
                                    />
                                ))}
                            </div>
                        </section>

                    </div>
                )}

            </div>
        </section>
    )
}

export default Services
