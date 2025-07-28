"use client"

import { useState, useEffect } from "react"

export function DeviceShowcase() {
  const [currentDevice, setCurrentDevice] = useState(0)
  const devices = ["mobile", "tablet", "laptop"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % devices.length)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-16">
      <div className="relative aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
        {/* Mobile Device */}
        <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          currentDevice === 0 ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Mobile Frame */}
            <div className="relative w-32 h-56 bg-black rounded-3xl p-2">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                {/* Status Bar */}
                <div className="h-6 bg-gray-100 flex justify-between items-center px-3 text-xs">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                    <div className="w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-3">
                  <div className="h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded mb-2 w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded mb-3 w-1/2"></div>
                  <div className="h-8 bg-blue-500 rounded mb-2"></div>
                  <div className="h-8 bg-green-500 rounded mb-2"></div>
                  <div className="h-8 bg-purple-500 rounded"></div>
                </div>
              </div>
              {/* Home Button */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Tablet Device */}
        <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          currentDevice === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Tablet Frame */}
            <div className="relative w-48 h-32 bg-black rounded-2xl p-2">
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                {/* Status Bar */}
                <div className="h-8 bg-gray-100 flex justify-between items-center px-4 text-sm">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-blue-500 rounded"></div>
                    <div className="h-8 bg-green-500 rounded"></div>
                    <div className="h-8 bg-purple-500 rounded"></div>
                    <div className="h-8 bg-orange-500 rounded"></div>
                  </div>
                </div>
              </div>
              {/* Home Button */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Laptop Device */}
        <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
          currentDevice === 2 ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Laptop Frame */}
            <div className="relative">
              {/* Screen */}
              <div className="w-64 h-40 bg-black rounded-t-lg p-1">
                <div className="w-full h-full bg-white rounded-t-lg overflow-hidden">
                  {/* Menu Bar */}
                  <div className="h-6 bg-gray-100 flex items-center px-3 text-xs">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="ml-2">Website</span>
                  </div>
                  {/* Browser Content */}
                  <div className="p-4">
                    <div className="h-3 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded mb-3 w-1/2"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-6 bg-blue-500 rounded"></div>
                      <div className="h-6 bg-green-500 rounded"></div>
                      <div className="h-6 bg-purple-500 rounded"></div>
                      <div className="h-6 bg-orange-500 rounded"></div>
                      <div className="h-6 bg-pink-500 rounded"></div>
                      <div className="h-6 bg-indigo-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Base */}
              <div className="w-72 h-2 bg-gray-600 rounded-b-lg"></div>
              {/* Keyboard */}
              <div className="w-72 h-8 bg-gray-700 rounded-b-lg flex items-center justify-center">
                <div className="w-16 h-1 bg-gray-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Device Labels */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-8">
            {devices.map((device, index) => (
              <div
                key={device}
                className={`text-sm font-medium transition-colors duration-300 ${
                  currentDevice === index
                    ? "text-brand"
                    : "text-gray-400 dark:text-gray-500"
                }`}
              >
                {device.charAt(0).toUpperCase() + device.slice(1)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
