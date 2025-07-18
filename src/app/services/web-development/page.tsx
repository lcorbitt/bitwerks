import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
    title: "Custom Web Applications",
    description: "Tailored web solutions built from the ground up to meet your specific business requirements.",
    features: [
      "Scalable architecture design",
      "Modern UI/UX implementation",
      "Database integration",
      "API development",
      "Performance optimization",
    ],
    icon: "💻",
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store development with payment processing and inventory management.",
    features: [
      "Shopping cart functionality",
      "Payment gateway integration",
      "Inventory management",
      "Order processing",
      "Customer management",
    ],
    icon: "🛒",
  },
  {
    title: "Progressive Web Apps",
    description: "Modern web applications that work like native apps with offline capabilities.",
    features: [
      "Offline functionality",
      "Push notifications",
      "App-like experience",
      "Cross-platform compatibility",
      "Fast loading times",
    ],
    icon: "📱",
  },
  {
    title: "Content Management Systems",
    description: "Easy-to-use CMS solutions for managing your website content efficiently.",
    features: [
      "User-friendly admin panel",
      "Content editing tools",
      "Media management",
      "SEO optimization",
      "Multi-user support",
    ],
    icon: "📝",
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
    icon: "🔌",
  },
]

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "GraphQL", category: "API" },
  { name: "Redis", category: "Cache" },
  { name: "Stripe", category: "Payments" },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project plan.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our design team creates wireframes and prototypes to visualize the user experience and interface design.",
  },
  {
    step: "03",
    title: "Development",
    description: "Using modern technologies and best practices, we build your web application with clean, maintainable code.",
  },
  {
    step: "04",
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your application works flawlessly across all devices and browsers.",
  },
  {
    step: "05",
    title: "Deployment & Launch",
    description: "We deploy your application to production with proper monitoring and performance optimization.",
  },
  {
    step: "06",
    title: "Support & Maintenance",
    description: "Ongoing support and maintenance to keep your application running smoothly and up-to-date.",
  },
]

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="container">
          <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
            {/* Text content */}
            <div className="flex flex-col text-center lg:text-left w-full">
              <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                Web Development Company
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
                Engaging, performant
                <br />
                <span className="text-brand">websites</span>.
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                Access the top 1% of tech talent within 2 weeks. Create polished web apps and websites, from eCommerce sites to content management systems.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-start sm:justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0" asChild>
                  <Link href="/contact">Level Up Your Web Development</Link>
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
      <section id="services" className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Comprehensive Web Development Solutions
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
              We specialize in creating custom web applications that help businesses achieve their digital goals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {webDevelopmentServices.map((service) => (
              <div key={service.title} className="rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300">
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-800">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Modern Technologies We Use
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
              We leverage cutting-edge technologies to build fast, scalable, and maintainable web applications.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="rounded-lg border bg-card p-6 text-center hover:shadow-md transition-shadow">
                <div className="mb-2 inline-block rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold">
                  {tech.category}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Development Process
            </h2>
            <p className="mb-12 text-lg text-gray-600 dark:text-gray-300">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-lg border bg-card p-6 relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                  <span className="font-bold">{step.step}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 dark:bg-blue-700">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Build Your Web Application?
            </h2>
            <p className="mb-8 text-xl text-blue-100">
              Let's discuss your project requirements and create a custom solution that drives results.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Schedule a Free Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
