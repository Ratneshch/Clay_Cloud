'use client'
import React, { useState, useRef } from 'react'
import { GoDotFill } from "react-icons/go";
import { BiSolidRightArrowSquare } from "react-icons/bi";

import ai from "@/assets/ai.jpeg"
import data from "@/assets/data.jpg"
import gen from "@/assets/gen.jpeg"
import Generative from "@/assets/Generative.jpeg"
import app from "@/assets/app.png"
import application from "@/assets/application.jpeg"
import devops from "@/assets/devops.jpeg"
import cloud from "@/assets/cloud.jpg"
import Advisory from "@/assets/Advisory.png"
import Consulting from "@/assets/Consulting.png"
import cyber from "@/assets/cyber.png"
import security from "@/assets/security.png"
import service from "@/assets/service.png"
import manage from "@/assets/manage.png"
import ui from "@/assets/ui.png"
import ux from "@/assets/ux.jpg"

const Services = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const scrollRef = useRef(null)
    const btnRefs = useRef([])

    const Buttons = [
        {
            Name: "Data & AI Services",
            Heading: "Turn your data into a strategic advantage.",
            Description:
                "We design and implement end-to-end data platforms, AI/ML models, and analytics solutions that help you make faster, smarter decisions.",
            tab1: "What we offer:",
            content: [
                "Data Strategy & Architecture",
                "Data Lake & Data Warehouse Modernization (AWS Redshift, Azure Synapse, Databricks)",
                "Machine Learning Model Development & MLOps",
                "Advanced Analytics & Business Intelligence",
                "AI Readiness Assessment & AI Governance Frameworks"
            ],
            tab2: "Value Delivered:",
            value: [
                "Improved decision intelligence",
                "Faster insights-to-action cycle",
                "Scalable AI adoption roadmap"
            ],
            images: [ai, data]
        },

        {
            Name: "Generative AI (GenAI) Solutions",
            Heading:
                "Harness the power of GenAI to reinvent experiences, operations, and productivity.",
            Description:
                "From automating knowledge workflows to building conversational copilots, we help enterprises integrate GenAI responsibly and effectively.",
            tab1: "Our GenAI offerings:",
            content: [
                "Custom Copilots for Enterprises (OpenAI, AWS Bedrock, Azure OpenAI)",
                "Intelligent Document Processing",
                "HR & Talent Management AI Solutions",
                "Knowledge Search and Summarization Bots",
                "Responsible AI & Model Fine-tuning Services"
            ],
            tab2: "Our Differentiator:",
            value: [
                "AI-based HR Tech Suite enabling smarter payroll, learning, and workforce productivity"
            ],
            images: [gen, Generative]
        },

        {
            Name: "DevOps & Cloud Engineering",
            Heading: "Accelerate your product delivery with modern DevOps practices.",
            Description:
                "We help you design, build, and operate cloud-native environments that ensure reliability, security, and scalability.",
            tab1: "Capabilities:",
            content: [
                "CI/CD Pipeline Automation",
                "Infrastructure as Code (IaC)",
                "Containerization & Kubernetes",
                "Cloud Cost Optimization & FinOps",
                "Observability & Reliability Engineering"
            ],
            tab2: "Benefits:",
            value: [
                "Faster time-to-market",
                "Improved deployment reliability",
                "Optimized cloud spend"
            ],
            images: [devops, cloud]
        },

        {
            Name: "Application Modernization",
            Heading:
                "Transform legacy applications into cloud-ready, scalable, and future-proof systems.",
            Description:
                "Our frameworks help organizations migrate, refactor, or rebuild applications with minimal disruption.",
            tab1: "Offerings:",
            content: [
                "Cloud Migration & Re-platforming",
                "API-first and Microservices Architecture",
                "Serverless & Event-driven Systems",
                "Legacy App Refactoring & Modern UI Integration"
            ],
            tab2: "Outcome:",
            value: [
                "Future-ready digital platforms",
                "Improved scalability and agility",
                "Enhanced performance and security"
            ],
            images: [app, application]
        },

        {
            Name: "UI/UX Design & Engineering",
            Heading:
                "Deliver intuitive, human-centered experiences that engage and delight users.",
            Description:
                "Our UI/UX practice combines design thinking with modern front-end engineering.",
            tab1: "We specialize in:",
            content: [
                "UX Research & Strategy",
                "UI Design Systems & Prototyping",
                "Frontend Engineering (React, Angular, Flutter)",
                "Accessibility & Performance Optimization"
            ],
            tab2: "Result:",
            value: [
                "Consistent, responsive, and delightful digital experiences"
            ],
            images: [ui, ux]
        },

        {
            Name: "Cybersecurity Services",
            Heading: "Build digital trust with proactive and adaptive security solutions.",
            Description:
                "We secure your applications, data, and cloud environments against evolving threats.",
            tab1: "Services:",
            content: [
                "Security Posture Assessment",
                "Cloud Security & Compliance (AWS, Azure)",
                "Identity & Access Management",
                "Threat Detection & Incident Response",
                "Data Privacy & Governance Frameworks"
            ],
            tab2: "Outcomes:",
            value: [
                "Strengthened security posture",
                "Compliance with global standards",
                "Continuous monitoring and defense"
            ],
            images: [cyber, security]
        },

        {
            Name: "Managed Services",
            Heading:
                "Focus on growth while we manage your digital infrastructure.",
            Description:
                "Our 24x7 managed services ensure your systems are secure, optimized, and always-on.",
            tab1: "Managed Offerings:",
            content: [
                "Cloud Operations & Monitoring",
                "Application & Database Management",
                "Backup, Disaster Recovery & Business Continuity",
                "IT Service Management (ITSM) & Automation"
            ],
            tab2: "Why ClayCloud Technologies:",
            value: [
                "Proactive support model",
                "Flexible engagement models",
                "Predictable performance with measurable SLAs"
            ],
            images: [manage, service]
        },

        {
            Name: "Cloud Consulting & Advisory",
            Heading:
                "Define your cloud and digital transformation roadmap with expert guidance.",
            Description:
                "We bring a balanced mix of strategy, technology, and execution excellence.",
            tab1: "Advisory Services:",
            content: [
                "Cloud Readiness Assessment",
                "Digital Maturity Assessment",
                "AI Readiness Assessment",
                "Cloud Cost Optimization",
                "Governance & FinOps Consulting"
            ],
            tab2: "Outcome:",
            value: [
                "A clear, executable transformation roadmap aligned with business goals"
            ],
            images: [Consulting, Advisory]
        }
    ];

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

            <h2 className='text-[24px] md:text-[48px] font-bold text-[#03045E]'>
                Our Core Consulting Services
            </h2>

            <div className='md:pt-14 pt-8'>

                {/* TABS */}
                <ul className="flex py-4 overflow-x-auto hidescrollbar whitespace-nowrap">
                    {Buttons.map((item, index) => (
                        <li
                            key={index}
                            ref={(el) => (btnRefs.current[index] = el)}
                            className="inline-block w-[70%] sm:w-[40%] md:w-[22%] flex-shrink-0 text-center"
                        >
                            <button
                                onClick={() => handleButtons(index)}
                                className={`text-[16px] sm:text-[14px] md:text-[16px] font-semibold text-[#1e1b4b] relative pb-2 ${activeIndex === index
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
                                    {Buttons[activeIndex].Heading}
                                </h2>

                                <p className='font-inter text-[16px] sm:text-[17px] md:text-[18px] text-[#374151] mt-4 text-start'>
                                    {Buttons[activeIndex].Description}
                                </p>

                                <h3 className='font-inter text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-[#0077B6] mt-7 text-start'>
                                    {Buttons[activeIndex].tab1}
                                </h3>

                                <ul className='mt-2'>
                                    {Buttons[activeIndex].content.map((para, i) => (
                                        <li key={i}>
                                            <p className='font-inter text-[15px] sm:text-[16px] md:text-[16px] text-[#374151] mt-2 flex items-start'>
                                                <GoDotFill className='mr-2 text-[#00B4D8] mt-1' /> {para}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className='font-inter text-[18px] sm:text-[19px] md:text-[20px] font-semibold text-[#0077B6] mt-7 text-start'>
                                    {Buttons[activeIndex].tab2}
                                </h3>

                                <ul className='mt-2'>
                                    {Buttons[activeIndex].value.map((val, ind) => (
                                        <li key={ind}>
                                            <p className='font-inter text-[15px] sm:text-[16px] md:text-[16px] text-[#374151] mt-2 flex items-start'>
                                                <BiSolidRightArrowSquare className='mr-2 mt-1' /> {val}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* IMAGES */}
                            <div className='w-full md:w-[45%] flex flex-col gap-4'>
                                {Buttons[activeIndex].images?.map((img, k) => (
                                    <img
                                        key={k}
                                        src={img.src}
                                        alt={Buttons[activeIndex].Name}
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
