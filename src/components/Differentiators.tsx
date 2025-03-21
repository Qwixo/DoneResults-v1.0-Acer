import React from 'react'
import { Gauge, Shield, Bot, MessageSquareMore, Lightbulb } from 'lucide-react'

const Differentiators = () => {
  const features = [
    {
      icon: <Gauge className="h-8 w-8 text-darkAqua" />,
      title: "Adaptable Speed & Scale",
      description: "We tailor outreach volume to match your capacity."
    },
    {
      icon: <Shield className="h-8 w-8 text-darkAqua" />,
      title: "Dedicated Subdomains",
      description: "Protect your main domain's reputation and maximize deliverability."
    },
    {
      icon: <Bot className="h-8 w-8 text-darkAqua" />,
      title: "AI-Powered Personalization",
      description: "No spammy templates; every email is custom-crafted."
    },
    {
      icon: <MessageSquareMore className="h-8 w-8 text-darkAqua" />,
      title: "Multi-Step Follow-Ups",
      description: "80% of conversions happen after the first email."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-darkAqua" />,
      title: "Always Testing New AI Tools",
      description: "We stay on the cutting edge for cost-efficiency and performance."
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkGray mb-4">What Makes DoneResults Different</h2>
          <p className="text-lg text-darkGray max-w-3xl mx-auto">
            Our unique approach combines cutting-edge AI technology with proven outreach strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-lightAqua bg-opacity-20 p-4 rounded-full inline-flex mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-darkGray mb-2">{feature.title}</h3>
              <p className="text-darkGray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentiators
