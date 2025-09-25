import { Heading2 } from "@/components/ui/heading"
import { ServiceCards } from "@/components/ui/service-cards"
import { whiteLabelServices } from "@/components/ui/white-label-cards"
import dynamic from "next/dynamic"
import { Suspense } from "react"

// Lazy load heavy components
// const LazyDeviceShowcase = dynamic(() => import("@/components/ui/device-showcase"), {
//   loading: () => <div className="pb-20">
//     <div className="container">
//       <div className="animate-pulse">
//         <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8"></div>
//         <div className="flex justify-center space-x-4">
//           <div className="h-32 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
//           <div className="h-32 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
//           <div className="h-32 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// })

const LazyCaseStudy = dynamic(() => import("@/components/ui/case-study").then(mod => ({ default: mod.CaseStudy })), {
  loading: () => <div className="pt-20 px-8 bg-white dark:bg-primary max-w-screen-2xl mx-auto">
    <div className="container">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-8"></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
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
          <Suspense fallback={<div className="pb-20">
            <div className="container">
              <div className="animate-pulse">
                <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg mb-8"></div>
                <div className="flex justify-center space-x-4">
                  <div className="h-32 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="h-32 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="h-32 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>}>
            {/* <LazyDeviceShowcase /> */}
          </Suspense>

          <Heading2 className="mb-8">
            White Label Development Services We Provide
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            Partner with us to deliver custom websites and applications under your brand. We handle development, so you can focus on growing your agency.
          </p>
        </div>

        <ServiceCards services={whiteLabelServices} />
      </div>

      <div className="pt-20 px-8 bg-white dark:bg-primary max-w-screen-2xl mx-auto z-10">
        <Suspense fallback={<div className="container">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
                <div className="flex flex-wrap gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>}>
          <LazyCaseStudy
            title="Case Study"
            company="Digital Marketing Agency"
            description="By partnering with BitWerks for white label development, Digital Marketing Agency successfully delivered 15+ custom websites for their clients, improving their client retention by 60% and expanding their service offerings."
            technologies={["Custom Development", "SEO Optimization", "Performance Tuning", "Client Management"]}
            imageSrc="/portfolio/consulting.webp"
            imageAlt="Digital Marketing Agency case study - white label development partnership"
            caseStudyLink="/case-studies/local-manufacturing"
            moreCaseStudiesLink="/case-studies"
          />
        </Suspense>
      </div>
    </section>
  )
} 