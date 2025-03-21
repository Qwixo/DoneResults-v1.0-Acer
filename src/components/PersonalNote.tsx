import React from 'react'

const PersonalNote = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-darkGray mb-6">We Failed (a Lot)—So You Don't Have To</h2>
            <p className="text-darkGray mb-6 text-lg">
              I'm Jan, founder of DoneResults. I tested countless cold email strategies—most flopped—until I finally cracked the code. This worked so well for my video marketing agency that I had to hire more people just to handle the lead flow. Now, I'd love to share that same system with you.
            </p>
            <p className="text-darkGray text-lg">
              After years of trial and error, we've developed a system that consistently delivers warm, high-intent leads directly to your calendar. No more guesswork, no more wasted time on strategies that don't work.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-darkAqua to-lightAqua opacity-20 rounded-full blur"></div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                alt="Jan, founder of DoneResults" 
                className="relative rounded-lg shadow-lg w-full max-w-sm object-cover h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalNote
