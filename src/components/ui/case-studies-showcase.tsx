import Image from "next/image"
import Link from "next/link"

interface CaseStudy {
  id: string
  company: string
  image: string
  alt: string
  href?: string
}

interface CaseStudiesShowcaseProps {
  caseStudies: CaseStudy[]
  className?: string
}

const ShowcaseCard = ({
  study,
  className,
  zIndex,
}: {
  study: CaseStudy
  className: string
  zIndex: string
}) => {
  const inner = (
    <>
      <Image
        src={study.image}
        alt={study.alt}
        fill
        className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 text-white">
        <h3 className="text-lg font-bold">{study.company}</h3>
        {study.href ? (
          <span className="mt-1 inline-flex items-center text-sm font-medium text-white/90 group-hover:text-white">
            Case study →
          </span>
        ) : null}
      </div>
    </>
  )

  if (study.href) {
    return (
      <Link
        href={study.href}
        className={`${className} ${zIndex} group block overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
      >
        <div className="relative h-full w-full">{inner}</div>
      </Link>
    )
  }

  return (
    <div className={`${className} ${zIndex} group overflow-hidden rounded-lg shadow-lg transition-shadow duration-300`}>
      <div className="relative h-full w-full">{inner}</div>
    </div>
  )
}

export function CaseStudiesShowcase({ caseStudies, className = "" }: CaseStudiesShowcaseProps) {
  const [first, second, third] = caseStudies

  return (
    <div className={`relative mx-auto h-[28rem] w-full max-w-2xl ${className}`}>
      <ShowcaseCard
        study={first ?? { id: "1", company: "Clickk", image: "/clickk-website.png", alt: "Case study 1" }}
        className="absolute left-0 top-0 h-48 w-80"
        zIndex="z-30"
      />
      <ShowcaseCard
        study={second ?? { id: "2", company: "Clickk", image: "/clickk-case-study.png", alt: "Case study 2" }}
        className="absolute -right-56 top-8 h-48 w-80"
        zIndex="z-20"
      />
      <ShowcaseCard
        study={third ?? { id: "3", company: "Hodinkee", image: "/hodinkee-mockup.png", alt: "Case study 3" }}
        className="absolute bottom-0 left-16 h-48 w-80"
        zIndex="z-10"
      />
    </div>
  )
}
