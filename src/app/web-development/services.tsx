import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { Heading2 } from "@/components/ui/heading"
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

const webDevelopmentServices = [
  {
    title: "Responsive Websites",
    description: "Tailored web solutions built from the ground up to meet your specific business requirements.",
    features: [
      "Optimized for all devices with a fully responsive layout",
      "Built with clean, scalable, and maintainable code architecture",
      "Designed for fast load times and high performance",
    ],
    icon: "📱",
  },
  {
    title: "User-Friendly UIs",
    description: "Intuitive and accessible user interfaces that provide excellent user experience.",
    features: [
      "Clean, intuitive navigation and user flows",
      "Accessibility compliance for all users",
      "Mobile-first design principles",
    ],
    icon: "🎨",
  },
  {
    title: "Custom Theming",
    description: "Unique designs that reflect your brand - no cookie cutter templates or page builders.",
    features: [
      "Bespoke designs tailored to your brand identity",
      "No generic templates or page builder limitations",
      "Custom animations and interactive elements",
    ],
    icon: "🎨",
  },
  {
    title: "SEO Focused",
    description: "Websites built with search engine optimization in mind from the ground up.",
    features: [
      "Semantic HTML structure for better search rankings",
      "Optimized meta tags and structured data",
      "Fast loading speeds and mobile optimization",
    ],
    icon: "🔍",
  },
  {
    title: "Modern Web Technologies",
    description: "Built with the latest web standards and technologies for optimal performance.",
    features: [
      "Latest HTML5, CSS3, and JavaScript features",
      "Progressive Web App capabilities",
      "Cross-browser compatibility and testing",
    ],
    icon: "⚡",
  },
  {
    title: "Performance Optimized",
    description: "Websites designed for speed and efficiency to provide the best user experience.",
    features: [
      "Optimized images and asset compression",
      "Minified code and efficient loading",
      "CDN integration for global performance",
    ],
    icon: "🚀",
  },
]

export default function Services() {
  return (
    <section className="bg-white dark:bg-black py-0 -mt-48 z-20 relative">
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
            Web Development Services We Provide
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            Beautiful, effective websites built to grow your business.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {webDevelopmentServices.map((service) => (
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

      <div className="pt-20 px-8 bg-white dark:bg-primary max-w-screen-2xl mx-auto">
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
            company="Hodinkee"
            description="In collaboration with BitWerks, Hodinkee successfully implemented a new design system, improved the user experience of their applications, and developed essential internal tools to enhance operational efficiency."
            technologies={["React", "Tailwind", "Ruby on Rails", "PostgreSQL"]}
            imageSrc="/hodinkee.png"
            imageAlt="Hodinkee case study"
            caseStudyLink="/case-studies/hodinkee"
            moreCaseStudiesLink="/our-work"
            orientation="center"
          />
        </Suspense>
      </div>
    </section>
  )
} 