import React from 'react'
import cart from "../assets/cart.png"
import bag from "../assets/bag.png"
import plane from "../assets/plane.png"
import factory from "../assets/factory.png"
import heart from "../assets/heart.png"
import car from "../assets/car.png"
import ServeCard from './ServeCard'

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
    shadowColor: "#f8cad7"
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
    shadowColor: "#d9c4fd"
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
  }
];

  return (
    <div className='sm:px-20 sm:py-12 mt-20 px-10 py-6 flex flex-col items-center justify-center'>
        {/* First Part */}
        <div className='flex items-center justify-center flex-col'>
              <h1 className='text-black text-[28px] sm:text-[34px] md:text-[48px] font-syne font-bold text-center sm:text-left'>
                  Industries We <span className='text-[#0a9cfa]'>Serve</span>
              </h1>

              <p className='text-[#9CA3AF] font-inter text-[20px] mb-4 text-center w-1/1 sm:w-full'>Deep domain expertise across multiple verticals</p>

              <div className='h-0.5 w-50 bg-linear-to-r from-blue-500 via-blue-400 to-cyan-300'></div>
        </div>

        {/* second part */}
        <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-10'>
            {useCases.map(item =>(
                <ServeCard key={item.id} title={item.title} description={item.description} icon={item.icon} bgcolor={item.bgcolor} textcolor={item.textcolor} iconolor={item.iconolor} bordercolor={item.bordercolor} />
            ))}
        </div>

    </div>
  )
}

export default Serve