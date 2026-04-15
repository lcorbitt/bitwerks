import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading1, Heading2 } from "@/components/ui/heading"
import { CTA } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet BitWerks and Lukas Corbitt — custom web and software development focused on performance, clarity, and long-term partnerships.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-full w-full overflow-hidden bg-light pb-48 md:pb-64 dark:bg-tertiary">
        <div className="container relative z-20">
          <div className="mx-auto lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            {/* Text content */}
            <div className="flex w-full flex-col text-center lg:text-left">
              <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">
                ABOUT US
              </p>
              <Heading1 className="relative z-10 mx-auto mb-6 max-w-3xl lg:mx-0 lg:max-w-none">
                Your partners in <span className="text-brand">digital excellence</span>
              </Heading1>
              <p className="relative z-10 mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg lg:mx-0 lg:max-w-xl">
                At BitWerks, we&apos;re your partners in building custom web and software solutions that help your
                business thrive in the digital age.
              </p>
              <div className="relative z-10 flex justify-center gap-4 lg:justify-start">
                <Button asChild variant="brand" size="lg">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
            {/* Image - hidden on smaller screens */}
            <div className="relative hidden items-center justify-end lg:flex">
              <div className="h-auto w-full max-w-[450px]">
                <Image
                  src="/about-hero.png"
                  alt="About us hero image"
                  width={250}
                  height={250}
                  className="h-auto w-full rounded-l-lg object-contain"
                  quality={75}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved section divider */}
      <section className="clip-bottom-large-circle relative -left-[15%] z-10 -mt-32 h-72 w-[130%] bg-white dark:bg-primary"></section>

      {/* Lukas Section - Personal Section at Bottom */}
      <section className="relative z-20 -mt-48 bg-white pt-0 dark:bg-black">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="mb-2 font-normal uppercase tracking-widest text-muted-light dark:text-muted-dark">
                LEADING THE WAY
              </p>
              <Heading2 className="mb-8">Lukas Corbitt</Heading2>
            </div>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="relative mx-auto aspect-square w-full max-w-md">
                  <Image
                    src="/lukas-headshot.png"
                    alt="Lukas Corbitt, Founder and Lead Engineer at BitWerks"
                    fill
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="order-1 space-y-6 md:order-2">
                <p className="text-lg text-muted-foreground">
                  As the founder and lead engineer at BitWerks, I&apos;ve spent my career building digital products
                  and websites that help businesses succeed online. From ecommerce platforms to custom web applications
                  and even aerospace software, each project has taught me something new about solving complex problems with
                  elegant, thoughtful code. I enjoy turning ideas into intuitive and reliable digital experiences that
                  make a real difference for users.
                </p>
                <p className="text-lg text-muted-foreground">
                  This mix of experiences gives me a unique perspective on web development and software alike. I
                  understand that great websites and software require more than just writing code; they need a clear
                  understanding of your business, your users, and your goals. I focus on clean, maintainable solutions
                  that meet current needs while allowing your digital presence to grow and evolve over time. Every
                  project is an opportunity to create meaningful experiences that deliver real value.
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
