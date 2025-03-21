import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WhatWeDo from './components/WhatWeDo'
import ProofAndData from './components/ProofAndData'
import PersonalNote from './components/PersonalNote'
import Differentiators from './components/Differentiators'
import ProcessSteps from './components/ProcessSteps'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <ProofAndData />
      <PersonalNote />
      <Differentiators />
      <ProcessSteps />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
