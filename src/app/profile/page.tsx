import React from 'react'

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 py-12 px-4 ">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6 text-black">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">My Profile</h1>
        <div className="mb-4">
          {/* <img src="/placeholder.svg?height=100&width=100" alt="Profile" className="rounded-full w-24 h-24 mb-2" /> */}
          <h2 className="text-xl font-semibold">Jane Doe</h2>
          <p className="text-gray-600">jane.doe@example.com</p>
        </div>
        <div className="space-y-2">
          <p><strong>Phone:</strong> +1 234 567 8900</p>
          <p><strong>Emergency Contact:</strong> John Doe (+1 987 654 3210)</p>
          <p><strong>Address:</strong> 123 Safety Street, Secure City, 12345</p>
        </div>
      </div>
    </div>
  )
}