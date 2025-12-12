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
    <div className={`w-full lg:w-2/3 lg:mx-auto bg-light dark:bg-tertiary rounded-xl p-6 md:p-8 shadow-lg dark:shadow-2xl z-20 ${className}`}>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text Content */}
        <div className="space-y-10 lg:order-1 w-full">
          {/* Title and Company - appears first on mobile */}
          <div className="order-1 lg:order-none">
            {/* Case Study Label */}
            <div className="text-sm font-semibold uppercase tracking-wider text-brand">
              {title}
            </div>
            
            {/* Company Name */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                {company}
              </h3>
            </div>
          </div>
          
          {/* Image Section - appears between company and description on mobile */}
          <div className="flex justify-center lg:hidden order-2 my-10">
            <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className={`object-cover ${imageClassName} ${orientation}`}
              />
            </div>
          </div>
          
          {/* Description and rest of content - appears after image on mobile */}
          <div className="order-3 lg:order-none space-y-10">
            {/* Description */}
            <div className="space-y-4">
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
        </div>
        
        {/* Right Section - Image (desktop only) */}
        <div className="hidden lg:flex justify-end lg:order-2">
          <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className={`object-cover ${imageClassName} ${orientation}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
} 