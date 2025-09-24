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
    <div className="relative">
      {/* Icon - positioned outside the card to allow overflow */}
      <div className="absolute -top-8 md:-top-12 left-8 z-20">
        <div className="bg-gradient-to-br from-gray-900 to-black dark:from-brand dark:to-brand/80 rounded-2xl w-12 h-12 md:w-20 md:h-20 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-brand/25 transition-all duration-500 ease-out border border-gray-800 dark:border-brand/50">
          <div className="group-hover:scale-110 transition-all duration-500 ease-out">
            {children}
          </div>
        </div>
      </div>
      
      {/* Main Card Container */}
      <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl py-12 md:py-20 px-8 group hover:cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700">
      
      {/* Slide Reveal Background */}
        <div className="-ml-1 absolute inset-0 bg-gradient-to-r from-brand to-brand/90 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-3xl"></div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 group-hover:text-white transition-colors duration-300">{title}</h3>
        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-300 mb-8 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
        {/* Link */}
        <a href={linkHref} className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300 ease-in-out border-b-2 border-transparent group-hover:border-white/50 pb-1">
          {linkText ? linkText : "Get Started"}
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      </div>
    </div>
  )
}
