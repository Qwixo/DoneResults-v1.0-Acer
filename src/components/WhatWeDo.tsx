import React from 'react'
import { Bot, Calendar, Mail } from 'lucide-react'

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-darkGray mb-6">What We Do & Why It Benefits You</h2>
            <p className="text-darkGray mb-8 text-lg">
              We handle everything from domain setup to personalizing each email, so you get warm leads booked to your calendar via Google Meet. Save time, get high-quality leads, and focus on closing deals.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-lightAqua bg-opacity-20 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-darkAqua" />
                </div>
                <div>
                  <h3 className="font-semibold text-darkGray">Complete Email Management</h3>
                  <p className="text-darkGray">From setup to sending, we handle the entire process.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-lightAqua bg-opacity-20 p-3 rounded-full mr-4">
                  <Bot className="h-6 w-6 text-darkAqua" />
                </div>
                <div>
                  <h3 className="font-semibold text-darkGray">AI-Powered Personalization</h3>
                  <p className="text-darkGray">Every email is custom-crafted for maximum response rates.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-lightAqua bg-opacity-20 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-darkAqua" />
                </div>
                <div>
                  <h3 className="font-semibold text-darkGray">Meetings Directly to Your Calendar</h3>
                  <p className="text-darkGray">Qualified leads book directly into your Google Calendar.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-darkAqua to-lightAqua opacity-30 blur-xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="AI-powered email illustration" 
                className="relative rounded-lg shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
