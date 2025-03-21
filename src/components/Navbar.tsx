import React from 'react'
import { Mail } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Mail className="h-6 w-6 text-darkAqua mr-2" />
          <span className="font-bold text-xl text-darkGray">DoneResults</span>
        </div>
        <button className="bg-darkAqua hover:bg-opacity-90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Book a Call
        </button>
      </div>
    </nav>
  )
}

export default Navbar
