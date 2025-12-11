import { Heading2 } from "./heading"

import { Quote } from "./quote"

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  description?: string
  testimonials: Testimonial[]
  className?: string
}

// todo: use location string for improved SEO
// {locationString === "nationwide" ? "across the U.S." : ` in ${locationString}.`}
export function Testimonials({ 
  title = "Trusted Across the Country",
  subtitle = "OUR PROOF", 
  description = "We’ve helped small businesses across the U.S. build and ship the web & software projects they’ve been dreaming of. We treat every project as a partnership, investing in our clients as much as they invest in us.",
  testimonials,
  className = ""
}: TestimonialsProps) {
  return (
    <section className={` bg-white dark:bg-primary pb-16 md:pt-16 ${className}`}>
      <div className="container mx-auto grid gap-12">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
              {subtitle}
            </p>
            <Heading2 className="mb-8">{title}</Heading2>
            {/* <p className="mb-16 md:mb-24 text-muted-foreground tracking-wide text-base md:text-lg"> */}
              {/* todto: use location string for improved SEO */}
              {/* {locationString === "nationwide" ? "across the U.S." : ` in ${locationString}.`} */}
              {/* {description} */}
            {/* </p> */}
          </div>
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Quote
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
