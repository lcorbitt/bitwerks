"use client"

import { useState, useEffect } from "react"

export function DeviceShowcase() {
  const [currentDevice, setCurrentDevice] = useState(0)
  const devices = ["mobile", "tablet", "laptop"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prev) => (prev + 1) % devices.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-16">
      <div className="relative aspect-[16/9]">
        {/* Single Device Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Device Frame */}
          <div className={`relative transition-all duration-1000 ease-in-out ${
            currentDevice === 0 
              ? "w-24 h-40 bg-black rounded-2xl p-1 rotate-0" // Mobile - vertical
              : currentDevice === 1 
                ? "w-40 h-28 bg-black rounded-xl p-1 rotate-180" // Tablet - horizontal
                : "w-56 h-36 bg-black rounded-lg p-1 rotate-0" // Laptop - vertical
          } ${currentDevice === 1 ? "rotate-[-180deg]" : ""}`}>
            {/* Screen */}
            <div className={`w-full h-full bg-white rounded-lg overflow-hidden transition-all duration-1000 ease-in-out ${
              currentDevice === 0 ? "rounded-xl" : currentDevice === 1 ? "rounded-lg" : "rounded"
            }`}>
              {/* Status Bar */}
              <div className={`bg-gray-100 flex justify-between items-center px-2 transition-all duration-1000 ease-in-out ${
                currentDevice === 0 ? "h-4 text-xs" : currentDevice === 1 ? "h-5 text-sm" : "h-6 text-sm"
              }`}>
                <span>9:41</span>
                <div className="flex space-x-1">
                  <div className="bg-black rounded-full w-1 h-1"></div>
                  <div className="bg-black rounded-full w-1 h-1"></div>
                  <div className="bg-black rounded-full w-1 h-1"></div>
                </div>
              </div>
              
              {/* Content Grid */}
              <div className={`p-2 transition-all duration-1000 ease-in-out ${
                currentDevice === 0 ? "grid-cols-1 gap-1" : currentDevice === 1 ? "grid-cols-2 gap-2" : "grid-cols-3 gap-2"
              } grid`}>
                <div className="h-3 bg-blue-500 rounded"></div>
                <div className="h-3 bg-green-500 rounded"></div>
                <div className="h-3 bg-purple-500 rounded"></div>
                <div className="h-3 bg-orange-500 rounded"></div>
                <div className="h-3 bg-pink-500 rounded"></div>
                <div className="h-3 bg-indigo-500 rounded"></div>
              </div>
            </div>
            
            {/* Home Button - Only for mobile */}
            {currentDevice === 0 && (
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-400 rounded-full"></div>
            )}
          </div>
          
          {/* Laptop Base - Only for laptop */}
          {currentDevice === 2 && (
            <div className="absolute top-full left-0 w-full h-2 bg-gray-600 rounded-b-lg"></div>
          )}
        </div>
      </div>
    </div>
  )
}
