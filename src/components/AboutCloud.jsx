import React from 'react'
import tower from "../assets/tower.png"
import log from "../assets/log.png"
import handshake from "../assets/handshake.png"
import whitebag from "../assets/whitebag.png"
import bluebulb from "../assets/bluebulb.png"
import diffheart from "../assets/diffheart.png"
import sheild from "../assets/sheild.png"
import AboutCard from './AboutCard'

const AboutCloud = () => {
    const cardData = [
    {
      id: 1,
      title: "About Us",
      description: "Our mission, vision, and values",
      icon: tower,
      bgcolor: "#010A83",
      shadowColor: "#FFFFFF",
      textcolor: "#FFFFFF",
    },
    {
      id: 2,
      title: "Leadership",
      description: "Meet our executive team",
      icon: log,
      bgcolor: "#010A83",
      shadowColor: "#FFFFFF",
      textcolor: "#FFFFFF",
    },
    {
      id: 3,
      title: "Partners",
      description: "Strategic partnerships",
      icon: handshake,
      bgcolor: "#010A83",
      shadowColor: "#FFFFFF",
      textcolor: "#FFFFFF",
    },
    {
      id: 4,
      title: "Careers",
      description: "Join our team",
      icon: whitebag,
      bgcolor: "#010A83",
      shadowColor: "#FFFFFF",
      textcolor: "#FFFFFF",
    },
  ];

  const valuesData = [
  {
    icon: bluebulb,
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technology",
    iconBg: "bg-blue-100 text-blue-600",
  },
  {
    icon: diffheart,
    title: "Customer Success",
    description: "Your success is our success",
    iconBg: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: sheild,
    title: "Trust & Integrity",
    description: "Building lasting relationships",
    iconBg: "bg-indigo-100 text-indigo-600",
  },
];


  return (
    <div className='sm:px-20 sm:py-12 mt-20 px-10 py-6 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center flex-col'>
              <h1 className='text-black text-[28px] sm:text-[34px] md:text-[48px] font-syne font-bold text-center sm:text-left'>
                  About <span className='text-[#0a9cfa]'>ClayCloud</span>
              </h1>

              <p className='text-[#9CA3AF] font-inter text-[20px] mb-4 text-center w-1/1 sm:w-full'>Building the future of digital transformation</p>

              <div className='h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300'></div>
        </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-15 px-4">
              {cardData.map((item) => (
                  <AboutCard
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      bgcolor={item.bgcolor}
                      textcolor={item.textcolor}
                      shadowColor={item.shadowColor}
                  />
              ))}
          </div>

          <div className="w-full bg-[#f7f7f7] rounded-3xl px-8 py-10 flex flex-col items-center mt-15 justify-center">
              <h2 className="text-3xl text-black text-center font-bold mb-10">Our Core Values</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-center">
                  {valuesData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center justify-center gap-4">
                          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.iconBg}`}>
                              <img src={item.icon.src} alt={item.title} className="mb-3 pt-3" />
                          </div>

                          <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                          <p className="text-sm font-inter text-[#5A5A5A] max-w-[350px]">{item.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  )
}

export default AboutCloud