import React from 'react'
import { Search, Mail, Calendar } from 'lucide-react'

const ProcessSteps = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-darkAqua" />,
      number: "1",
      title: "Discovery & ICP",
      description: "We learn about your business and define your ideal client."
    },
    {
      icon: <Mail className="h-10 w-10 text-darkAqua" />,
      number: "2",
      title: "AI-Powered Outreach",
      description: "We craft & send personalized emails, set up subdomains, and ensure deliverability."
    },
    {
      icon: <Calendar className="h-10 w-10 text-darkAqua" />,
      number: "3",
      title: "Meetings on Your Calendar",
      description: "We book calls via Google Meet; you close the deals."
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkGray mb-4">Our Simple 3-Step Process</h2>
          <p className="text-lg text-darkGray max-w-3xl mx-auto">
            We've streamlined our approach to make it easy for you to start seeing results quickly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-lightAqua transform -translate-x-1/2 z-0"></div>
              )}
              <div className="bg-white p-6 rounded-lg shadow-md relative z-10 h-full flex flex-col items-center text-center">
                <div className="bg-lightAqua bg-opacity-20 p-4 rounded-full inline-flex mb-4">
                  {step.icon}
                </div>
                <div className="bg-darkAqua text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-darkGray mb-2">{step.title}</h3>
                <p className="text-darkGray">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
