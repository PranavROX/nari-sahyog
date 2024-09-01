import React from 'react'

export default function RingStatus() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6 text-black">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">Ring Status</h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
            <p>Ring is connected and active</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Battery Status</h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
            </div>
            <p className="mt-1">70% battery remaining</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Last Synced</h2>
            <p>Today at 2:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}