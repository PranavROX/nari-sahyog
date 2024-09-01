'use client'

import React from 'react'

const SOSButton: React.FC = () => {
  const handleSOSAlert = () => {
    // This is where we'll add our SOS magic later!
    console.log('SOS Alert sent!')
  }

  return (
    <button 
      onClick={handleSOSAlert}
      className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
    >
      Send SOS Alert
    </button>
  )
}

export default SOSButton