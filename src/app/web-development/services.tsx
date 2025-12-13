import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { Heading2 } from "@/components/ui/heading"
import { ServiceCards } from "@/components/ui/service-cards"
import { webDevelopmentServices } from "@/components/ui/web-development-cards"
import dynamic from "next/dynamic"
import { Suspense } from "react"

// Lazy load heavy components
// const LazyDeviceShowcase = dynamic(() => import("@/components/ui/device-showcase"), {
//   loading: () => <div className="pb-20">
//     <div className="container">
//       <div className="animate-pulse">
//         <div className="h-64 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded-lg mb-8"></div>
//         <div className="flex justify-center space-x-4">
//           <div className="h-32 w-24 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
//           <div className="h-32 w-24 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
//           <div className="h-32 w-24 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// })

const LazyCaseStudy = dynamic(() => import("@/components/ui/case-study").then(mod => ({ default: mod.CaseStudy })), {
  loading: () => <div className="pt-20 px-4 md:px-8 bg-white dark:bg-primary max-w-screen-2xl mx-auto">
    <div className="container">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/2 mb-8"></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-5/6"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
})


export default function Services() {
  return (
    <section className="bg-white dark:bg-black py-0 -mt-48 z-20 relative">
      <div className="container pt-0">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Heading2 className="mb-8">
            Boost your Brand & Conversions
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            We provide expert web design and development services, focusing on the details of each project and delivering highly optimized custom solutions that combine beautiful design with powerful functionality.
          </p>
        </div>

        <ServiceCards services={webDevelopmentServices} />
      </div>

      <div className="pt-20 px-4 md:px-8 bg-white dark:bg-primary max-w-screen-2xl mx-auto">
        <Suspense fallback={<div className="container">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-64 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded w-5/6"></div>
                <div className="flex flex-wrap gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-[#1f1f1f]/70 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>}>
          <LazyCaseStudy
            title="Case Study"
            company="Hodinkee"
            description="In collaboration with BitWerks, Hodinkee successfully implemented a new design system, improved the user experience of their applications, and developed essential internal tools to enhance operational efficiency."
            technologies={["React", "Tailwind", "Ruby on Rails", "PostgreSQL"]}
            imageSrc="/hodinkee-mockup.png"
            imageAlt="Hodinkee case study"
            caseStudyLink="/case-studies/hodinkee"
            moreCaseStudiesLink="/our-work"
            orientation="center"
            device="mobile"
          />
        </Suspense>
      </div>
    </section>
  )
} 