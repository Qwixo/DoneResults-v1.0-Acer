import React from 'react'
import { Shield } from 'lucide-react'

const Guarantee = () => {
  return (
    <section className="py-12 bg-darkAqua">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Shield className="h-16 w-16 text-white mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Guaranteed Meetings. Or You Don't Pay.
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto mb-8">
          We're so confident in our ability to book you warm, high-intent leads that if we ever fail, you only cover system fees—nothing more.
        </p>
        <button className="bg-white hover:bg-gray-100 text-darkAqua px-8 py-4 rounded-md text-lg font-medium transition-colors shadow-lg">
          Get Started Risk-Free
        </button>
      </div>
    </section>
  )
}

export default Guarantee
