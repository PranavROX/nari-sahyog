import React from 'react'

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6 text-black">
        <h1 className="text-3xl font-bold text-purple-800 mb-4">Settings</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-2">Notifications</h2>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
              <span className="ml-2">Enable push notifications</span>
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Privacy</h2>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
              <span className="ml-2">Share location with emergency contacts</span>
            </label>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Account</h2>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md">Change Password</button>
          </div>
        </div>
      </div>
    </div>
  )
}