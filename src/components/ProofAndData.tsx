import React from 'react'
import { BarChart3, TrendingUp, Users } from 'lucide-react'

const ProofAndData = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-darkGray mb-4">Real Results & Proof</h2>
          <p className="text-lg text-darkGray max-w-3xl mx-auto">
            Here's what our system is doing right now—consistently scheduling 10+ meetings a week.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-darkGray">Email Campaign Performance</h3>
              <BarChart3 className="h-5 w-5 text-darkAqua" />
            </div>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="text-darkGray font-medium">Open Rate</span>
                  <span className="text-darkAqua font-bold">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-darkAqua h-2.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="text-darkGray font-medium">Reply Rate</span>
                  <span className="text-darkAqua font-bold">32%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-darkAqua h-2.5 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="text-darkGray font-medium">Meeting Conversion</span>
                  <span className="text-darkAqua font-bold">12%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-darkAqua h-2.5 rounded-full" style={{ width: '12%' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-darkGray">Key Performance Metrics</h3>
              <TrendingUp className="h-5 w-5 text-darkAqua" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <Users className="h-8 w-8 text-darkAqua mx-auto mb-2" />
                <div className="text-2xl font-bold text-darkAqua">10+</div>
                <div className="text-sm text-darkGray">Meetings/Week</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <div className="text-2xl font-bold text-darkAqua">$15K+</div>
                <div className="text-sm text-darkGray">Avg. Deal Size</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <div className="text-2xl font-bold text-darkAqua">3-5</div>
                <div className="text-sm text-darkGray">Days to First Meeting</div>
              </div>
              <div className="bg-gray-100 p-4 rounded-md text-center">
                <div className="text-2xl font-bold text-darkAqua">24/7</div>
                <div className="text-sm text-darkGray">Automated Outreach</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProofAndData
