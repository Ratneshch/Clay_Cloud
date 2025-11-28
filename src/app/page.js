import AboutCloud from '@/components/AboutCloud'
import HeroSection from '@/components/HeroSection'
import InsightsResources from '@/components/InsightsResources'
import ProductPage from '@/components/ProductPage'
import Serve from '@/components/Serve'
import TalkToUs from '@/components/TalkToUs'
import TechnologyMarquee from '@/components/TechnologyMarquee'
import UseCase from '@/components/UseCase'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <TechnologyMarquee/>
      <ProductPage/>
      <UseCase />
      <Serve />
      <AboutCloud />
      <InsightsResources/>
      <TalkToUs/>
    </div>
  )
}

export default page
