import { Heading2 } from "@/components/ui/heading"
import dynamic from "next/dynamic"
import { Suspense } from "react"

// Lazy load heavy components
const LazyDeviceShowcase = dynamic(() => import("@/components/ui/device-showcase"), {
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
    title: "Custom Software",
    description: "Complete online store development with payment processing and inventory management.",
    features: [
      "Tailored solutions designed around your unique workflows",
      "Streamlined internal tools to increase team productivity",
      "Scalable systems built to grow with your organization",
    ],
    icon: "⚙️",
  },
  {
    title: "E-commerce Solutions",
    description: "End-to-end online shopping platforms with secure payment gateways and seamless product management.",
    features: [
      "User-friendly storefronts optimized for conversions and engagement",
      "Integrated payment processing with multiple options and currencies",
      "Robust inventory and order management to keep your business running smoothly"
    ],
    icon: "🛒",
  },
  {
    title: "Customer Relationship Management (CRM)",
    description: "Custom CRM solutions for managing your customer relationships and sales pipeline.",
    features: [
      "Centralized customer data for easy access and management",
      "Automated sales pipeline tracking",
      "Customizable dashboards and reports",
    ],
    icon: "🤝",
  },
  {
    title: "Web Portals & Dashboards",
    description: "Custom portals and dashboards for data visualization and business intelligence.",
    features: [
      "Real-time data visualization",
      "User role management",
      "Data export capabilities",
    ],
    icon: "📊",
  },
  {
    title: "API Development",
    description: "Robust API development for seamless integration with third-party services.",
    features: [
      "RESTful API design",
      "Authentication & authorization",
      "Comprehensive documentation",
    ],
    icon: "🔗",
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
            <LazyDeviceShowcase />
          </Suspense>

          <Heading2 className="my-8">
            Web Development Services We Provide
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            From simple websites to complex enterprise solutions, we deliver results that drive growth.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {webDevelopmentServices.map((service) => (
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
            description="By partnering with BitWerks, Urban Sky accelerated the development of a robust, mission-critical web application and internal tools tailored for high-performance aerospace operations."
            technologies={["React", "Node.js", "NestJS", "PostgreSQL", "Playwright"]}
            imageSrc="/portfolio/dashboard.webp"
            imageAlt="TechCorp case study - developer working on web application"
            caseStudyLink="/case-studies/techcorp"
            moreCaseStudiesLink="/case-studies"
          />
        </Suspense>
      </div>
    </section>
  )
} 