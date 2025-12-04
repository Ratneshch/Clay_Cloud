"use client";
import React from 'react'

const ServeCard = ({title, description, icon, bgcolor, iconolor, textcolor, bordercolor}) => {
  return (
    <div
      className="
        w-full sm:w-[280px] md:w-[310px] lg:w-[350px]
        h-60
        rounded-2xl px-6 flex flex-col
        items-center text-center
        transition-shadow duration-300
        border
      "
      style={{ backgroundColor: bgcolor, borderColor: bordercolor }}
    >
      <div
        className="p-4 rounded-lg mb-2 mt-8"
        style={{ backgroundColor: iconolor }}
      >
        <img src={icon.src} alt={title} className="h-8 w-8" />
      </div>

      <h3 className="text-[18px] sm:text-[20px] font-syne mb-2 mt-2 font-bold" style={{ color: textcolor }}>
        {title}
      </h3>
      
      <p className="font-inter text-[14px] sm:text-[17px] font-medium" style={{ color: textcolor }}>
        {description}
      </p>
    </div>
  )
}

export default ServeCard
