import React from "react"
import Image from "next/image"
import Link from "next/link"
import { LinkWithArrow } from "./link-with-arrow"

interface CaseStudyProps {
  title: string
  company: string
  description: string
  technologies: string[]
  imageSrc: string
  imageAlt: string
  caseStudyLink: string
  moreCaseStudiesLink: string
  orientation?: string
  className?: string
  device?: "mobile" | "desktop"
  imageClassName?: string
}

export function CaseStudy({
  title,
  company,
  description,
  technologies,
  imageSrc,
  imageAlt,
  caseStudyLink,
  moreCaseStudiesLink,
  orientation = "center",
  className = "",
  device = "desktop",
  imageClassName = "",
}: CaseStudyProps) {
  return (
    <div className={`w-full lg:w-2/3 lg:mx-auto bg-light dark:bg-tertiary rounded-xl p-8 shadow-lg dark:shadow-2xl z-20 ${className}`}>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text Content */}
        <div className="space-y-6">
          {/* Case Study Label */}
          <div className="text-sm font-semibold uppercase tracking-wider text-brand">
            {title}
          </div>
          
          {/* Company Name and Description */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              {company}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
              <br />
              {/* <Link 
                href={caseStudyLink}
                className="text-gray-800 dark:text-gray-200 underline hover:text-brand transition-colors"
              >
                {company} Case Study.
              </Link> */}
            </p>
          </div>
          
          {/* Technology Tags */}
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-accent/50 text-white text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* More Case Studies Link */}
          <div className="flex justify-start">
            <LinkWithArrow href={moreCaseStudiesLink}>
              More Case Studies
            </LinkWithArrow>
          </div>
        </div>
        
        {/* Right Section - Image */}
        <div className={`flex justify-center lg:justify-end ${device === "desktop" ? "scale-75" : ""}`}>
          {device === "mobile" ? (
            // Mobile Device Mockup
            <div className="relative">
              {/* Device Frame */}
              <div className="w-40 h-80 bg-gray-800 rounded-[1.5rem] p-2 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[1rem] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-bl-full rounded-br-full z-10"></div>
                  {/* Image */}
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={`object-cover ${imageClassName} ${orientation}`}
                  />
                </div>
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
            </div>
          ) : (
            // Desktop Monitor Mockup
            <div className="relative w-full max-w-sm mx-auto">
              {/* Laptop Screen */}
              <div className="w-full aspect-[16/10] bg-gray-800 rounded-tl-md rounded-tr-md shadow-2xl relative">
                {/* Screen Bezel */}
                <div className="absolute inset-2 bg-black rounded-tl-md rounded-tr-md overflow-hidden">
                  {/* Image */}
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className={`object-cover ${imageClassName} ${orientation}`}
                  />
                </div>
                {/* Laptop Base */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-3 bg-gray-500 rounded-bl-sm rounded-br-sm">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-[0.3rem] bg-gray-700 rounded-bl-full rounded-br-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 