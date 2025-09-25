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

const whiteLabelServices = [
  {
    title: "Custom Website Development",
    description: "Build professional websites under your agency's brand with custom designs and functionality.",
    features: [
      "Custom design and branding",
      "Responsive mobile-first development",
      "SEO-optimized structure and performance",
    ],
    icon: "🌐",
  },
  {
    title: "Application Development",
    description: "Create custom web applications and software solutions for your clients' specific needs.",
    features: [
      "Full-stack application development",
      "Database design and integration",
      "User authentication and management",
    ],
    icon: "💻",
  },
  {
    title: "Performance Optimization",
    description: "Ensure lightning-fast load times and perfect Page Speed Scores for better SEO results.",
    features: [
      "Core Web Vitals optimization",
      "Image and asset optimization",
      "Caching and performance tuning",
    ],
    icon: "⚡",
  },
  {
    title: "SEO-Ready Development",
    description: "Build websites that are optimized for search engines from the ground up.",
    features: [
      "Semantic HTML structure",
      "Meta tags and schema markup",
      "Clean URL structure and navigation",
    ],
    icon: "🔍",
  },
  {
    title: "Content Management",
    description: "Easy-to-use CMS solutions that your clients can manage without technical knowledge.",
    features: [
      "User-friendly admin interfaces",
      "Content editing and publishing",
      "Media library and asset management",
    ],
    icon: "📝",
  },
  {
    title: "Ongoing Support & Maintenance",
    description: "Reliable support and maintenance services to keep your clients' sites running smoothly.",
    features: [
      "Regular updates and security patches",
      "Backup and monitoring services",
      "Technical support and troubleshooting",
    ],
    icon: "🛠️",
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
            White Label Development Services We Provide
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            Partner with us to deliver custom websites and applications under your brand. We handle everything from design to development, so you can focus on growing your agency.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {whiteLabelServices.map((service) => (
            <div key={service.title} className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="mb-6 text-5xl">{service.icon}</div>
              <h3 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.title}</h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-gray-600 dark:text-gray-300">
                    <span className="mr-3 mt-1 text-brand flex-shrink-0 text-lg">✓</span>
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