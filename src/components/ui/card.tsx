"use client"

import * as React from "react"
import { LinkWithArrow } from "./link-with-arrow"
import { useRouter } from "next/navigation"
interface CardProps {
  title: string
  description: string
  linkText?: string
  linkHref: string
  children?: React.ReactNode
}

export function Card({ title, description, linkText, linkHref, children }: CardProps) {
  const router = useRouter()

  return (
    <div className="relative">
      {/* Icon - positioned outside the card to allow overflow */}
      <div className="absolute -top-8 md:-top-12 left-8 z-20">
        <div className="bg-gradient-to-br from-gray-900 to-black dark:from-brand dark:to-brand/90 rounded-2xl w-12 h-12 md:w-20 md:h-20 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-brand/25 transition-all duration-500 ease-out border border-gray-800 dark:border-brand/50">
          <div className="group-hover:scale-110 transition-all duration-500 ease-out">
            {children}
          </div>
        </div>
      </div>
      
      {/* Main Card Container */}
      <div className="border-accent dark:border-accent-800 relative bg-transparent rounded-3xl shadow-lg hover:shadow-2xl py-12 md:py-20 px-8 group hover:cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden border-2" onClick={() => router.push(linkHref)}>
        {/* Slide Reveal Background */}
        <div className="bg-accent dark:bg-accent-800 absolute inset-[-4px] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-3xl"></div>
      
        {/* Content with relative positioning */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 group-hover:text-white transition-colors duration-300">{title}</h3>
          {/* Description */}
          <p className="text-base text-gray-600 dark:text-gray-300 mb-8 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
            {description}
          </p>
          {/* Link */}
          <LinkWithArrow href={linkHref}>
            {linkText ? linkText : "Learn More"}
          </LinkWithArrow>
        </div>
      </div>
    </div>
  )
}
