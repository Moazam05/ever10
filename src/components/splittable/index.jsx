import React from 'react'
import HeroSection from './hero-section'
import HowItWorks from './how-it-works'
import GetYourAppSection from './get-your-app-section/index';
import IntegrationSection from './integration-section';
import './index.css'

const Splittable = () => (
  <>
    <HeroSection />
    <HowItWorks />
    <GetYourAppSection />
    <IntegrationSection />
  </>
)

export default Splittable;