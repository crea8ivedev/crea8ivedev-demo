'use client'

import React from 'react'

import Hero from '@/views/Hero'
import WhyRevvit from '@/views/WhyRevvit'
import Features from '@/views/Features'
import BuySell from '@/views/BuySell'
import Reviews from '@/views/Reviews'
import CommonSection from '@/components/CommonSection'

const Home = () => {
  return (
    <CommonSection>
      <Hero />
      <WhyRevvit />
      <Features />
      <BuySell />
      <Reviews />
    </CommonSection>
  )
}

export default Home
