import React from 'react'

export default function Help() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6 text-black">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">Help & Support</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
            <ul className="list-disc list-inside">
              <li>How do I activate the SOS alert?</li>
              <li>What should I do if I feel unsafe?</li>
              <li>How can I update my emergency contacts?</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>Email: support@naarisahyog.com</p>
            <p>Phone: +1 800 123 4567</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Emergency Helpline</h2>
            <p className="text-red-600 font-bold">Call 911 for immediate assistance</p>
          </div>
        </div>
      </div>
    </div>
  )
}