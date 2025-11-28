import AboutCloud from '@/components/AboutCloud'
import HeroSection from '@/components/HeroSection'
import InsightsResources from '@/components/InsightsResources'
import ProductPage from '@/components/ProductPage'
import Serve from '@/components/Serve'
import TalkToUs from '@/components/TalkToUs'
import TechnologyMarquee from '@/components/TechnologyMarquee'
import UseCase from '@/components/UseCase'
import Services from '@/components/Services'
import Strategy from '@/components/Strategy'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <TechnologyMarquee/>
      <Services/>
      <Strategy/>
      <UseCase />
      <Serve />
      <AboutCloud />
      <InsightsResources/>
      <TalkToUs/>
    </div>
  )
}

export default page
