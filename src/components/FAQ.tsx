import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How soon until I see results?",
      answer: "Most clients start seeing meetings booked within the first 7-14 days of campaign launch. The exact timeline depends on your industry and target audience, but our system is designed to generate results quickly."
    },
    {
      question: "Does this work for any industry?",
      answer: "While our system works exceptionally well for B2B services, SaaS, and professional services, we've had success across many industries. During our discovery call, we'll evaluate if your specific industry and target audience are a good fit for our approach."
    },
    {
      question: "Seriously, no results = no pay?",
      answer: "Yes, we stand by our guarantee. If we don't deliver the agreed-upon number of qualified meetings, you only pay for the basic system costs—not our service fee. We're that confident in our ability to deliver results."
    },
    {
      question: "What if I'm new to cold email?",
      answer: "Perfect! Our system is fully managed, meaning we handle everything from setup to execution. You don't need any prior experience with cold email—just the ability to show up to meetings and close deals."
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkGray mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-darkGray max-w-3xl mx-auto">
            Get answers to common questions about our AI-powered cold email service.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-darkGray">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-darkAqua" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-darkAqua" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white p-5 rounded-b-lg shadow-sm mt-px">
                  <p className="text-darkGray">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
