import AboutCloud from '@/components/AboutCloud'
import HeroSection from '@/components/HeroSection'
import Serve from '@/components/Serve'
import TechnologyMarquee from '@/components/TechnologyMarquee'
import UseCase from '@/components/UseCase'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <TechnologyMarquee/>
      <Services/>
      <UseCase />
      <Serve />
      <AboutCloud />
    </div>
  )
}

export default page
