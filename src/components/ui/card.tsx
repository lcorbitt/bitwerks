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

  const handleClick = () => {
    // Check if it's mobile (screen width < 768px)
    if (window.innerWidth < 768) {
      // Wait 1 second on mobile to allow animation to complete
      setTimeout(() => {
        router.push(linkHref)
      }, 1000)
    } else {
      // Navigate immediately on desktop
      router.push(linkHref)
    }
  }

  return (
    <div className="relative">
      {/* Icon */}
      <div className="absolute -top-8 md:-top-12 left-8 z-20">
        <div className="bg-brand rounded-2xl w-12 h-12 md:w-20 md:h-20 flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-brand/25 transition-all duration-500 ease-out">
          <div className="group-hover:scale-110 transition-all duration-500 ease-out">
            {children}
          </div>
        </div>
      </div>
      
      {/* Main Card Container */}
      <div className="dark:border-white/20 border-black/50 relative bg-transparent rounded-3xl shadow-lg hover:shadow-2xl py-12 md:py-20 px-8 group hover:cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden border" onClick={handleClick}>
        {/* Content with relative positioning */}
        <div className="relative z-10">
          <h3 className="text-2xl font-bold tracking-tight text-black dark:text-white mb-4 transition-colors duration-300 group-hover:text-brand">{title}</h3>
          {/* Description */}
          <p className="text-base mb-8 text-black dark:text-white transition-colors duration-300 leading-relaxed">
            {description}
          </p>
          {/* Link */}
          <LinkWithArrow href={linkHref} variant="default">
            {linkText ? linkText : "Learn More"}
          </LinkWithArrow>
        </div>
      </div>
    </div>
  )
}
