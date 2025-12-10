import Image from "next/image"
import Link from "next/link"
import { LinkWithArrow } from "./link-with-arrow"

interface CaseStudy {
  id: string
  company: string
  image: string
  alt: string
  href: string
}

interface CaseStudiesShowcaseProps {
  caseStudies: CaseStudy[]
  className?: string
}

export function CaseStudiesShowcase({ caseStudies, className = "" }: CaseStudiesShowcaseProps) {
  return (
    <div className={`relative w-full max-w-2xl mx-auto h-[28rem] ${className}`}>
      {/* Case Study 1 - Top Left */}
      <div className="absolute top-0 left-0 w-80 h-48 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 z-30 group">
        <Image
          src={caseStudies[0]?.image || "/placeholder-case-study-1.jpg"}
          alt={caseStudies[0]?.alt || "Case study 1"}
          fill
          className="object-cover object-left"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-lg font-bold">{caseStudies[0]?.company || "Company 1"}</h3>
          <LinkWithArrow href={caseStudies[0]?.href || "#"} variant="white">
            Case study
          </LinkWithArrow>
        </div> */}
      </div>

      {/* Case Study 2 - Top Right */}
      <div className="absolute top-8 -right-56 w-80 h-48 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 z-20 group">
        <Image
          src={caseStudies[1]?.image || "/placeholder-case-study-2.jpg"}
          alt={caseStudies[1]?.alt || "Case study 2"}
          fill
          className="object-cover object-left transition-transform duration-300"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-lg font-bold">{caseStudies[1]?.company || "Company 2"}</h3>
          <LinkWithArrow href={caseStudies[1]?.href || "#"} variant="white">
            Case study
          </LinkWithArrow>
        </div> */}
      </div>

      {/* Case Study 3 - Bottom Left */}
      <div className="absolute bottom-0 left-16 w-80 h-48 rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 z-10 group">
        <Image
          src={caseStudies[2]?.image || "/placeholder-case-study-3.jpg"}
          alt={caseStudies[2]?.alt || "Case study 3"}
          fill
          className="object-cover object-left transition-transform duration-300"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* <div className="absolute bottom-3 left-3 text-white">
          <h3 className="text-lg font-bold">{caseStudies[2]?.company || "Company 3"}</h3>
          <LinkWithArrow href={caseStudies[2]?.href || "#"} variant="white">
            Case study
          </LinkWithArrow>
        </div> */}
      </div>
    </div>
  )
}
