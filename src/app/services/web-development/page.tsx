import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CaseStudy } from "@/components/ui/case-study"
import { Heading2 } from "@/components/ui/heading"
import { FAQSection } from "@/components/ui/faq-section"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"
import DeviceShowcase from "@/components/ui/device-showcase"

export const metadata: Metadata = {
  title: "Web Development Services | BitWerks",
  description: "Professional web development services including custom web applications, e-commerce solutions, and modern web technologies.",
  openGraph: {
    title: "Web Development Services | BitWerks",
    description: "Transform your business with professional web development solutions. Custom web applications, e-commerce, and modern technologies.",
  },
}

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
      "Interactive charts and graphs",
      "User role management",
      "Data export capabilities",
      "Responsive design",
    ],
    icon: "📊",
  },
  {
    title: "API Development",
    description: "Robust API development for seamless integration with third-party services.",
    features: [
      "RESTful API design",
      "GraphQL implementation",
      "Authentication & authorization",
      "Rate limiting",
      "Comprehensive documentation",
    ],
    icon: "🔗",
  },
]

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-light dark:bg-tertiary">
        <div className="container">
          <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
            {/* Text content */}
            <div className="flex flex-col text-center lg:text-left w-full">
              <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
                WEB DEVELOPMENT
              </p>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
                Engaging, performant
                <br />
                <span className="text-brand">websites</span>.
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Work with a dedicated expert to design and develop your website or web app that looks great and performs even better.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-start sm:justify-center">
                <Button variant="default" size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>

            {/* Image - hidden on smaller screens */}
            <div className="hidden lg:flex relative items-center justify-center p-4">
              <div className="w-full h-auto max-w-[450px]">
                <Image
                  src="/hero.svg"
                  alt="Web development illustration"
                  width={500}
                  height={400}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      {/* Smooth curved divider (top) */}
      <div className="w-full h-16 md:h-24 overflow-hidden -mb-1 bg-white dark:bg-primary">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-light dark:text-tertiary"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V36C1440 36 1296 0 720 0C144 0 0 36 0 36V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      <section className="bg-white dark:bg-black">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <Heading2 className="mb-6">
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
      </section>

      <div className="pt-20 pb-10 bg-white dark:bg-primary">
        <CaseStudy
          title="Case Study"
          company="Urban Sky"
          description="By partnering with BitWerks, Urban Sky accelerated the development of a robust, mission-critical web application and internal tools tailored for high-performance aerospace operations."
          technologies={["React", "Node.js", "NestJS", "PostgreSQL", "Playwright"]}
          imageSrc="/portfolio/dashboard.webp"
          imageAlt="TechCorp case study - developer working on web application"
          caseStudyLink="/case-studies/techcorp"
          moreCaseStudiesLink="/case-studies"
        />
      </div>
      
      
      {/* Smooth curved divider (bottom, mirrored) */}
      <div className="w-full h-16 md:h-24 overflow-hidden -mt-1 dark:bg-primary rotate-180">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-light dark:text-tertiary"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V36C1440 36 1296 0 720 0C144 0 0 36 0 36V0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <FAQSection />
      <Process />
      <DeviceShowcase />
      <CTA />
    </div>
  )
}
