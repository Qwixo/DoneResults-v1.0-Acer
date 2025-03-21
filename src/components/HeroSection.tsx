import React from 'react'

const HeroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          Want More Clients? <br className="hidden md:block" />
          <span className="text-darkAqua">Guaranteed</span>—Or You Don't Pay.
        </h1>
        <p className="text-lg md:text-xl text-darkGray max-w-3xl mx-auto mb-10">
          We leverage AI-powered cold email to deliver warm, high-intent leads. 
          If we fail, you don't pay.
        </p>
        <button className="bg-darkAqua hover:bg-opacity-90 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors shadow-lg">
          Book a Free Strategy Call
        </button>
      </div>
    </section>
  )
}

export default HeroSection
