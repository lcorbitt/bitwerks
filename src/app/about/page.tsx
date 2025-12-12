import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading1, Heading2, Heading3 } from "@/components/ui/heading"
import { CTA } from "@/components/sections/cta"
import { DecorativeCircles } from "@/components/ui/decorative-circles"
import { Code, Target, Zap, Shield, Heart, Rocket } from "lucide-react"

const values = [
  {
    icon: Code,
    title: "Hand-Coded Quality",
    description: "No page-builders or shortcuts. Every line of code is written with intention, ensuring your project is built to last and perform."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on what matters most: delivering solutions that drive real business value and measurable outcomes for your company."
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Speed and efficiency aren't afterthoughts—they're built into every project from day one, ensuring exceptional user experiences."
  },
  {
    icon: Shield,
    title: "Transparency & Trust",
    description: "Clear communication, honest timelines, and no hidden surprises. We build lasting partnerships through integrity and reliability."
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We take the time to understand your business, goals, and vision to deliver exactly what you need."
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We leverage cutting-edge technologies and AI intelligently to enhance development and deliver smarter, more efficient solutions."
  }
]

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-48 md:pb-64 w-full h-full bg-light dark:bg-tertiary">
        <div className="container relative z-20">
          <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
            {/* Text content */}
            <div className="flex flex-col text-center lg:text-left w-full">
              <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
                ABOUT US
              </p>
              <Heading1 className="mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10 mb-6">Building digital products that <span className="text-brand">matter</span></Heading1>
              <p className="mb-8 text-basetext-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
                At BitWerks, we&apos;re your partners in building custom web and software solutions that help your business thrive in the digital age.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start relative z-10">
                <Button
                  asChild
                  variant="brand"
                  size="lg"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
            {/* Image - hidden on smaller screens */}
            <div className="hidden lg:flex relative items-center justify-end">
              <div className="w-full h-auto max-w-[450px]">
                <Image
                  src="/about-hero.png"
                  alt="About us hero image"
                  width={250}
                  height={250}
                  priority
                  className="w-full h-auto object-contain rounded-l-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved section divider */}
      {/* <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-52 z-20"></section> */}

      {/* Our Mission Section */}
      {/* <section className="bg-white dark:bg-black pt-0 pb-16 md:pb-32 -mt-48 z-20 relative">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
              OUR MISSION
            </p>
            <Heading2 className="mb-8">Excellence in Every Line of Code</Heading2>
            <p className="mb-8 text-muted-foreground tracking-wide text-lg">
              We specialize in <strong>custom web & software development</strong> for startups and small businesses across the U.S. Each project is hand-coded with a focus on visibility, performance, and reliability.
            </p>
            <p className="text-muted-foreground tracking-wide text-lg">
              No page-builders, no shortcuts. We are committed to transparency and trust, building lasting partnerships that empower your business to grow with confidence.
            </p>
          </div>
        </div>
      </section> */}

      {/* Our Values Section */}
      {/* <section className="bg-light dark:bg-tertiary py-16 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
              OUR VALUES
            </p>
            <Heading2 className="mb-8">What Drives Us</Heading2>
            <p className="text-muted-foreground tracking-wide text-lg">
              These core principles guide everything we do and every project we take on.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="border-accent/50 dark:border-accent-800 relative bg-white dark:bg-black rounded-3xl shadow-lg py-8 px-8 border-2"
                >
                  <div className="bg-gradient-to-br from-gray-900 to-black dark:from-brand dark:to-brand/90 rounded-2xl w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-xl mb-6">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
        <DecorativeCircles className="top-96" />
      </section> */}

      {/* What We Do Section */}
      {/* <section className="bg-white dark:bg-black py-16 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
                WHAT WE DO
              </p>
              <Heading2 className="mb-8">From Concept to Completion</Heading2>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <Heading3 className="mb-4 text-2xl md:text-3xl">Custom Web Development</Heading3>
                <p className="text-muted-foreground text-lg mb-6">
                  We build modern, responsive websites that not only look great but perform exceptionally. Every site is optimized for speed, SEO, and user experience.
                </p>
              </div>
              <div>
                <Heading3 className="mb-4 text-2xl md:text-3xl">Software Development</Heading3>
                <p className="text-muted-foreground text-lg mb-6">
                  From MVPs to full-scale applications, we create custom software solutions tailored to your business needs and built to scale with your growth.
                </p>
              </div>
              <div>
                <Heading3 className="mb-4 text-2xl md:text-3xl">White Label Partnerships</Heading3>
                <p className="text-muted-foreground text-lg mb-6">
                  Partner with us to deliver custom websites and applications under your brand. We handle the development, you maintain the relationship.
                </p>
              </div>
              <div>
                <Heading3 className="mb-4 text-2xl md:text-3xl">Ongoing Support</Heading3>
                <p className="text-muted-foreground text-lg mb-6">
                  Our relationship doesn&apos;t end at launch. We provide ongoing support, updates, and optimizations to keep your digital products running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Approach Section */}
      {/* <section className="bg-light dark:bg-tertiary py-16 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
                OUR APPROACH
              </p>
              <Heading2 className="mb-8">How We Work</Heading2>
              <p className="text-muted-foreground tracking-wide text-lg mb-12">
                We believe in a collaborative, transparent process that puts your needs first. Here&apos;s how we bring your vision to life.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white dark:bg-black p-8 rounded-lg">
                <div className="text-brand text-2xl font-bold mb-2">01</div>
                <h3 className="text-xl font-bold mb-3">Discovery & Planning</h3>
                <p className="text-muted-foreground">
                  We start by understanding your business, goals, and technical requirements. This foundation ensures we build exactly what you need.
                </p>
              </div>
              <div className="bg-white dark:bg-black p-8 rounded-lg">
                <div className="text-brand text-2xl font-bold mb-2">02</div>
                <h3 className="text-xl font-bold mb-3">Design & Development</h3>
                <p className="text-muted-foreground">
                  With regular updates and feedback loops, we develop iteratively to ensure the solution meets your expectations every step of the way.
                </p>
              </div>
              <div className="bg-white dark:bg-black p-8 rounded-lg">
                <div className="text-brand text-2xl font-bold mb-2">03</div>
                <h3 className="text-xl font-bold mb-3">Testing & Optimization</h3>
                <p className="text-muted-foreground">
                  Thorough testing and performance optimization ensure your solution is robust, efficient, and ready for production.
                </p>
              </div>
              <div className="bg-white dark:bg-black p-8 rounded-lg">
                <div className="text-brand text-2xl font-bold mb-2">04</div>
                <h3 className="text-xl font-bold mb-3">Deployment & Support</h3>
                <p className="text-muted-foreground">
                  Smooth deployment and ongoing support ensure your solution continues to perform optimally as your business evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
        <DecorativeCircles inverted className="bottom-32" />
      </section> */}

      {/* Curved section divider */}
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-32 z-10"></section>

      {/* Lukas Section - Personal Section at Bottom */}
      <section className="bg-white dark:bg-black pt-0 -mt-48 z-20 relative">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
                LEADING THE WAY
              </p>
              <Heading2 className="mb-8">Lukas Corbitt</Heading2>
            </div>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <div className="relative aspect-square w-full max-w-md mx-auto">
                  <Image
                    src="/lukas-headshot.png"
                    alt="Lukas Corbitt, Founder and Lead Engineer at BitWerks"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <p className="text-muted-foreground text-lg">
                  As the founder and lead engineer at BitWerks, I&apos;ve spent my career building digital products and websites that help businesses succeed online. From ecommerce platforms to custom web applications and even aerospace software, each project has taught me something new about solving complex problems with elegant, thoughtful code. I enjoy turning ideas into intuitive and reliable digital experiences that make a real difference for users.
                </p>
                <p className="text-muted-foreground text-lg">
                  This mix of experiences gives me a unique perspective on web development and software alike. I understand that great websites and software require more than just writing code; they need a clear understanding of your business, your users, and your goals. I focus on clean, maintainable solutions that meet current needs while allowing your digital presence to grow and evolve over time. Every project is an opportunity to create meaningful experiences that deliver real value.
                </p>
                <div className="pt-4 text-center md:text-left">
                  <Button asChild variant="brand" size="lg">
                    <Link href="/contact">Let&apos;s Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
