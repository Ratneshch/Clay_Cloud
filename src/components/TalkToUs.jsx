import React from 'react'

const TalkToUs = () => {
  return (
    <section className="w-full md:px-20 px-10">
      <div className="w-full bg-[#F8F8F8] rounded-xl py-12 flex flex-col items-center justify-center text-center shadow-sm">
        
        <h2 className="text-xl md:text-[48px] md:w-200 w-50 font-bold font-syne text-[#000000] leading-tight">
          Ready to Transform Your{" "}
          <span className="text-[#2377FF] font-syne">
            Business?
          </span>
        </h2>

        <p className="text-[#9CA3AF] mt-4 font-inter text-sm md:text-[20px] max-w-xl">
          Let's discuss how ClayCloud Technologies can help you achieve your digital transformation goals.
        </p>

        <button
          className="mt-6 md:px-18 md:py-4 px-8 py-2 rounded-full text-white text-sm font-semibold font-inter
          bg-linear-to-r from-[#3943FF] to-[#2EC8FF] shadow-md hover:opacity-90 transition-all"
        >
          TALK TO US
        </button>
      </div>
    </section>
  )
}

export default TalkToUs