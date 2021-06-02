import React from 'react'
import HeroSection from './hero-section/index'
import HowItWorks from './how-it-works/index'
import GetYourAppSection from './get-your-app-section/index';
import WhyItMatters from './why-it-matters/index';
import './index.css'

const Realign = () => (
  <>
    <HeroSection />
    <WhyItMatters />
    <HowItWorks />
    <GetYourAppSection />
  </>
)

export default Realign;