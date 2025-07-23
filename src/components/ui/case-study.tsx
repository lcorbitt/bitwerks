import React from "react"
import Image from "next/image"
import Link from "next/link"

interface CaseStudyProps {
  title: string
  company: string
  description: string
  technologies: string[]
  imageSrc: string
  imageAlt: string
  caseStudyLink: string
  moreCaseStudiesLink: string
  className?: string
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
  className = "",
}: CaseStudyProps) {
  return (
    <div className={`w-full lg:w-2/3 lg:mx-auto bg-light dark:bg-tertiary rounded-xl p-8 shadow-lg dark:shadow-2xl ${className}`}>
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
                className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* More Case Studies Link */}
          <div className="flex justify-end">
            <Link
              href={moreCaseStudiesLink}
              className="text-gray-800 dark:text-gray-200 underline hover:text-brand transition-colors flex items-center gap-2"
            >
              More Case Studies
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
        
        {/* Right Section - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-64 h-80 rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 