import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heading1 } from "../ui/heading"

interface HeroProps {
  locationString: string
}

export function Hero({ locationString }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-32 md:pb-64 w-full h-full">
      {/* Hero background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      {/* Solid overlay - mobile light theme */}
      <div 
        className="absolute inset-0 z-10 lg:hidden bg-white/80 dark:hidden"
        aria-hidden="true"
      />
      {/* Solid overlay - mobile dark theme */}
      <div 
        className="absolute inset-0 z-10 hidden dark:block lg:hidden bg-tertiary/80"
        aria-hidden="true"
      />
      {/* Gradient overlay - light theme - lg and up */}
      <div 
        className="absolute inset-0 z-10 hidden lg:block"
        style={{
          background: 'linear-gradient(to right, #F6F7F8 02%, #F6F7F8 40%, rgba(246, 247, 248, 0.8) 50%, rgba(246, 247, 248, 0.4) 70%, rgba(246, 247, 248, 0) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Gradient overlay - dark theme - lg and up */}
      <div 
        className="absolute inset-0 z-10 dark:hidden lg:dark:block hidden"
        style={{
          background: 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 30%, rgba(26, 26, 26, 0.8) 50%, rgba(26, 26, 26, 0.4) 80%, rgba(26, 26, 26, 0) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="container relative z-20">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <Heading1 className="mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10">Small Business</Heading1>
            <Heading1 className="mb-6 mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10">Digital Solutions</Heading1>
            <p className="mb-8 text-sm text-muted-light dark:text-muted-dark md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              Web Development • Software Development • White Label Partnerships
            </p>
            <p className="mb-8 text-basetext-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              We build and ship web & software projects fast, affordable, and hassle-free so you can focus on growing your business. 
              {/* TODO: add location string for improved SEO */}
              {/* {locationString === "nationwide" ? "across the U.S." : ` in ${locationString}.`} */}
            </p>
            <div className="flex gap-4 justify-center lg:justify-start relative z-10">
              <Button
                asChild
                variant="default"
                size="lg"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 