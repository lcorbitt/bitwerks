import { Metadata } from "next"
import { LocalBusinessSchema } from "@/components/schema"
import { getLocationFromParams, type LocationData } from "@/lib/location"
import { Hero } from "@/app/web-development/hero"
import Services from "@/app/web-development/services"
import { FAQSection } from "@/components/ui/faq-section"
import WhyChooseUs from "@/app/web-development/why-choose-us"
// import { Heading2 } from "@/components/ui/heading"
// import { TechMarqueeSection } from "@/components/sections/tech-marquee-section"
// import { Partners } from "@/components/sections/partners"
import { Process } from "@/components/sections/process"
import { CTA } from "@/components/sections/cta"
import { CaseStudy } from "@/components/ui/case-study"

export const metadata: Metadata = {
  title: "BitWerks | Custom Web Development & Software Solutions",
  description: "Professional web and software development based in Fort Collins, CO, serving businesses nationwide. Transform your digital presence with expert technical consulting.",
  openGraph: {
    title: "BitWerks | Custom Web Development & Software Solutions",
    description: "Transform your business with professional web and software solutions. Based in Fort Collins, CO, serving businesses nationwide.",
  },
}

interface PageProps {
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function Solutions({ searchParams = {} }: PageProps) {
  const location: LocationData = getLocationFromParams(searchParams)
  const locationString = location.isDefault ? "nationwide" : `${location.city}, ${location.state}`

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

  return (
    <div className="flex flex-col overflow-hidden">
      <LocalBusinessSchema location={location} />
      <Hero locationString={locationString} />
      <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52 z-10"></section>
      <Services />
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-32 z-10"></section>
      <FAQSection />
      <WhyChooseUs />
      {/* <TechMarqueeSection /> */}
      {/* <Partners /> */}
      <Process />
      <CTA />
    </div>
  )
}
