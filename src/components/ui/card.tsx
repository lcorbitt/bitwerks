"use client"

import * as React from "react"

interface CardProps {
  title: string
  description: string
  linkText?: string
  linkHref: string
  children?: React.ReactNode
}

export function Card({ title, description, linkText, linkHref, children }: CardProps) {

  return (
    <div className="relative bg-light dark:bg-tertiary rounded-2xl shadow-md py-12 md:py-20 px-8 group hover:shadow-xl hover:cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 overflow-hidden">
      {/* Icon */}
      <div className="absolute -top-8 md:-top-12 left-8">
        <div className="bg-black dark:bg-brand rounded-xl w-16 h-16 md:w-24 md:h-24 flex items-center justify-center group-hover:shadow-md group-hover:shadow-black/50 transition-all duration-300 ease-in-out">
          <div className="group-hover:scale-110 transition-all duration-300 ease-out">
            {children}
          </div>
        </div>
      </div>
      
      {/* Circuit Animation Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
          {/* Circuit paths */}
          <path
            d="M50 50 L100 50 L100 100 L150 100 L150 150 L200 150 L200 200 L250 200 L250 250 L300 250"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="2"
            fill="none"
            className="circuit-path"
          />
          <path
            d="M350 50 L300 50 L300 100 L250 100 L250 150 L200 150 L200 200 L150 200 L150 250 L100 250"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="2"
            fill="none"
            className="circuit-path"
          />
          <path
            d="M200 50 L200 100 L150 100 L150 150 L100 150 L100 200 L50 200"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="2"
            fill="none"
            className="circuit-path"
          />
          <path
            d="M200 250 L200 200 L250 200 L250 150 L300 150 L300 100 L350 100"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="2"
            fill="none"
            className="circuit-path"
          />
          
          {/* Energy flow particles */}
          <circle r="3" fill="rgba(59, 130, 246, 0.8)" className="energy-particle">
            <animateMotion dur="2s" repeatCount="indefinite" path="M50 50 L100 50 L100 100 L150 100 L150 150 L200 150 L200 200 L250 200 L250 250 L300 250"/>
          </circle>
          <circle r="2" fill="rgba(59, 130, 246, 0.6)" className="energy-particle">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M350 50 L300 50 L300 100 L250 100 L250 150 L200 150 L200 200 L150 200 L150 250 L100 250"/>
          </circle>
          <circle r="2.5" fill="rgba(59, 130, 246, 0.7)" className="energy-particle">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M200 50 L200 100 L150 100 L150 150 L100 150 L100 200 L50 200"/>
          </circle>
        </svg>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-extrabold uppercase text-black dark:text-white mb-4 group-hover:text-brand dark:group-hover:text-brand transition-colors duration-300">{title}</h3>
      {/* Description */}
      <p className="text-lg text-tertiary dark:text-muted-dark mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
      {/* Link */}
      <a href={linkHref} className="hover:bg-gray-200 dark:hover:bg-black/30 rounded-md px-4 py-2 underline text-primary dark:text-light hover:text-brand dark:hover:text-brand transition-colors duration-200 ease-in-out inline-block">{linkText ? linkText : "Get Started"}</a>
      
      <style jsx>{`
        .circuit-path {
          stroke-dasharray: 10 5;
          animation: circuitFlow 3s linear infinite;
        }
        
        .energy-particle {
          filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.8));
        }
        
        @keyframes circuitFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 15; }
        }
      `}</style>
    </div>
  )
}
