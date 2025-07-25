import { Heading2 } from "@/components/ui/heading"
import dynamic from "next/dynamic"
import { Suspense } from "react"

// Lazy load heavy components
const LazyDeviceShowcase = dynamic(() => import("@/components/ui/software-showcase"), {
  loading: () => <div className="pb-20">
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
  </div>
})

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

const softwareDevelopmentServices = [
  {
    title: "Custom Application Development",
    description: "Tailored software solutions built from the ground up to meet your specific business requirements and workflows.",
    features: [
      "Scalable architecture designed for growth and performance",
      "Built with clean, maintainable code and best practices",
      "Comprehensive testing and quality assurance processes",
    ],
    icon: "💻",
  },
  {
    title: "Enterprise Software Solutions",
    description: "Robust enterprise-grade applications designed to handle complex business processes and large-scale operations.",
    features: [
      "High-performance systems built for enterprise workloads",
      "Advanced security and compliance features",
      "Integration with existing enterprise infrastructure",
    ],
    icon: "🏢",
  },
  {
    title: "API Development & Integration",
    description: "Comprehensive API development and third-party system integration to connect your business applications seamlessly.",
    features: [
      "RESTful and GraphQL API design and development",
      "Secure authentication and authorization systems",
      "Comprehensive documentation and developer tools",
    ],
    icon: "🔗",
  },
  {
    title: "Database Design & Management",
    description: "Custom database solutions and data management systems to organize and optimize your business information.",
    features: [
      "Custom database schema design and optimization",
      "Data migration and integration services",
      "Performance tuning and monitoring solutions",
    ],
    icon: "🗄️",
  },
  {
    title: "SaaS Applications",
    description: "Innovative SaaS applications designed for scalability, reliability, and cost-effectiveness.",
    features: [
      "Scalable multi-tenant architecture with containerization",
      "Efficient cloud deployment and infrastructure management",
      "Dynamic auto-scaling and load balancing for optimal performance",
    ],
    icon: "☁️",
  },
  {
    title: "Legacy System Modernization",
    description: "Transform and modernize existing legacy systems to improve performance, security, and maintainability.",
    features: [
      "Legacy code analysis and refactoring",
      "Technology stack modernization",
      "Gradual migration strategies to minimize disruption",
    ],
    icon: "🔄",
  },
]

export default function Services() {
  return (
    <section className="bg-white dark:bg-black py-0 -mt-48 z-20">
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
            Software Development Services We Provide
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            From custom applications to enterprise solutions, we deliver robust software that drives business efficiency.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {softwareDevelopmentServices.map((service) => (
            <div key={service.title} className="bg-white dark:bg-tertiary rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6 text-4xl">{service.icon}</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
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
            company="Urban Sky"
            description="By partnering with BitWerks, Urban Sky accelerated the development of a robust, mission-critical software application and internal tools tailored for high-performance aerospace operations."
            technologies={["React", "Node.js", "NestJS", "PostgreSQL", "Playwright"]}
            imageSrc="/portfolio/dashboard.webp"
            imageAlt="Urban Sky case study - software development for aerospace operations"
            caseStudyLink="/case-studies/urbansky"
            moreCaseStudiesLink="/case-studies"
            orientation="object-right-bottom"
          />
        </Suspense>
      </div>
    </section>
  )
} 