import { Heading2 } from "@/components/ui/heading"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { DecorativeCircles } from "@/components/ui/decorative-circles"

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

const technicalConsultingServices = [
  {
    title: "Technology Strategy & Planning",
    description: "Comprehensive technology roadmaps and strategic planning to align your technical decisions with business goals.",
    features: [
      "Technology stack evaluation and recommendations",
      "Digital transformation strategy development",
      "Scalability and growth planning",
    ],
    icon: "📋",
  },
  {
    title: "Architecture & System Design",
    description: "Expert guidance on system architecture, infrastructure planning, and technical design decisions.",
    features: [
      "System architecture reviews and recommendations",
      "Infrastructure planning and optimization",
      "Security and performance best practices",
    ],
    icon: "🏗️",
  },
  {
    title: "Technology Selection & Evaluation",
    description: "Help choosing the right technologies, platforms, and tools for your specific needs and budget.",
    features: [
      "Technology comparison and evaluation",
      "Cost-benefit analysis of different solutions",
      "Vendor and platform recommendations",
    ],
    icon: "🔍",
  },
  {
    title: "Technical Problem Solving",
    description: "Expert troubleshooting and problem-solving for complex technical challenges and system issues.",
    features: [
      "Performance optimization and debugging",
      "Integration challenges and solutions",
      "Technical debt assessment and remediation",
    ],
    icon: "🛠️",
  },
  {
    title: "Team Training & Knowledge Transfer",
    description: "Training and knowledge sharing to help your team understand and work with new technologies.",
    features: [
      "Technology training and workshops",
      "Best practices and coding standards",
      "Documentation and process improvement",
    ],
    icon: "👥",
  },
  {
    title: "Project Planning & Estimation",
    description: "Realistic project planning, timeline estimation, and resource allocation for technical projects.",
    features: [
      "Project scope definition and planning",
      "Timeline and resource estimation",
      "Risk assessment and mitigation strategies",
    ],
    icon: "📅",
  },
]

export default function Services() {
  return (
    <section className="bg-white dark:bg-black py-0 -mt-48 z-50 relative">
      <DecorativeCircles />
      
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
            Technical Consulting Services We Provide
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            From strategic planning to technical problem-solving, we provide expert guidance to help you make informed technology decisions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technicalConsultingServices.map((service) => (
            <div key={service.title} className="bg-white dark:bg-tertiary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 text-4xl">{service.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              {/* <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p> */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="mr-3 mt-1 text-brand flex-shrink-0">✓</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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
            company="Local Manufacturing Co."
            description="By partnering with BitWerks for technical consulting, Local Manufacturing Co. successfully modernized their technology stack and improved operational efficiency by 40% through strategic planning and implementation guidance."
            technologies={["Technology Strategy", "System Architecture", "Digital Transformation", "Process Optimization"]}
            imageSrc="/portfolio/consulting.webp"
            imageAlt="Local Manufacturing Co. case study - technology consulting and digital transformation"
            caseStudyLink="/case-studies/local-manufacturing"
            moreCaseStudiesLink="/case-studies"
          />
        </Suspense>
      </div>
    </section>
  )
} 