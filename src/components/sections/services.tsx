import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
interface ServicesProps {
  locationString: string
  isDefault: boolean
}

export function Services({ locationString, isDefault }: ServicesProps) {
  return (
    <>
      {/* Smooth curved divider */}
      <div className="w-full h-24 overflow-hidden -mb-1">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H1440V72C1440 72 1088 0 720 0C352 0 0 72 0 72V0Z"
            fill="#F6F7F8"
          />
        </svg>
      </div>
      
      {/* Partners section */}
      <section className="bg-white dark:bg-primary pb-12 w-full">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl text-muted-foreground mb-8 font-bold">
            Companies we&apos;ve partnered with
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {/* Replace these divs with actual partner logos */}
            <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
              <Image
                src="/urban_sky_logo.jpg"
                alt="Urban Sky Logo"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
              <Image
                src="/hodinkee.png"
                alt="Hodinkee Logo"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
              <Image
                src="/spectora.png"
                alt="Spectora Logo"
                width={96}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 4</div>
            <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 5</div>
            <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 6</div>
          </div>
        </div>
      </section>
      
      <section className="bg-white dark:bg-black py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-6 text-muted-light dark:text-muted-dark tracking-widest text-sm font-extrabold">
              WHAT WE DO
            </p>
            <h2 className="mb-4 text-5xl font-bold">FROM CONCEPT TO COMPLETION</h2>
            <p className="mb-16 md:mb-20 text-muted-foreground tracking-wide text-base">
              At BitWerks, we specialize in custom web and software development for small businesses across the U.S. Every project is hand-coded for performance, stability, and long-term value. No page-builders, no shortcuts. We handle ongoing updates and support, so you're never left stuck. Our focus is on building lasting partnerships and helping your business grow online with confidence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Modern, responsive websites built with cutting-edge technologies.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                  <li>Custom web applications</li>
                  <li>E-commerce solutions</li>
                  <li>Progressive Web Apps (PWA)</li>
                  <li>Performance optimization</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Software Development</CardTitle>
                <CardDescription>Tailored solutions to solve complex business challenges.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                  <li>Business process automation</li>
                  <li>Data management systems</li>
                  <li>Integration solutions</li>
                  <li>Cloud applications</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technical Consulting</CardTitle>
                <CardDescription>Strategic guidance for your technology initiatives.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                  <li>Technology assessment</li>
                  <li>Architecture planning</li>
                  <li>Performance optimization</li>
                  <li>Security best practices</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
} 