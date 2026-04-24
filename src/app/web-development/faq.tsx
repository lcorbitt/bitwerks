"use client"

import { FaqAccordionSection } from "@/components/sections/faq-accordion-section"

const FAQ_ITEMS = [
  {
    value: "item-1",
    question: "If I switch providers later, do I still own my domain and all website files?",
    answer:
      "Yes. You retain full ownership of your domain name and the website files we deliver as part of your project. If you ever want to move hosting or work with another provider, you are free to take your files with you—there is no lock-in on your assets.",
  },
  {
    value: "item-2",
    question: "What should I expect for annual hosting and maintenance after the first year?",
    answer:
      "Hosting is typically in the range of about $100–$150 per year, depending on the provider and plan you choose. We can handle setup and recommend a simple, reliable configuration so renewals stay predictable. If you would like ongoing maintenance beyond hosting (updates, monitoring, or content support), we can scope that separately based on your needs.",
  },
  {
    value: "item-3",
    question: "Do I need to supply all text and photos, or can you help with content?",
    answer:
      "You can provide your own copy and imagery if you already have them. If you do not, we are happy to assist with foundational content—headlines, core pages, and structure—so you are not starting from scratch, while keeping the voice aligned with your business.",
  },
  {
    value: "item-4",
    question: "Is logo design included in the website development package? What about brand colors?",
    answer:
      "Logo design is not included in the website development package. If you need a logo, we can add one for an additional fee, including multiple variations and full deliverables you can use anywhere. For the website itself, we design to your brand colors: if you already have a palette, we will implement it consistently; if not, we can help select a clean, professional palette that fits your positioning.",
  },
  {
    value: "item-5",
    question: "How long does it take to build a website?",
    answer:
      "Project timelines vary based on complexity and features. A simple business website typically takes 2-4 weeks, while complex applications can take 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    value: "item-6",
    question: "What technologies do you use for web development?",
    answer:
      "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, and Tailwind CSS. Our stack is chosen for performance, scalability, and maintainability. We also work with various databases, APIs, and third-party integrations as needed.",
  },
  {
    value: "item-7",
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, content updates, and technical support. We believe in building long-term partnerships with our clients.",
  },
  {
    value: "item-8",
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely! We build websites with SEO best practices from the ground up, including proper meta tags, structured data, fast loading times, and mobile optimization. We can also help with content strategy, Google Analytics setup, and basic digital marketing guidance.",
  },
  {
    value: "item-9",
    question: "What's included in your web development packages?",
    answer:
      "Our packages include custom design, responsive development, content management system setup, SEO optimization, testing across devices, launch support, and training. We also provide hosting recommendations and ongoing support options.",
  },
  {
    value: "item-10",
    question: "How do you handle project communication and updates?",
    answer:
      "We maintain transparent communication throughout the project with regular check-ins, progress updates, and milestone reviews. We use project management tools to keep you informed and provide access to development previews so you can see progress in real-time.",
  },
  {
    value: "item-11",
    question: "Do you work with existing websites or only build new ones?",
    answer:
      "We work with both! Whether you need a complete redesign, specific feature additions, performance improvements, or ongoing maintenance for an existing site, we can help. We'll assess your current setup and recommend the best approach.",
  },
  {
    value: "item-12",
    question: "What makes your web development approach different?",
    answer:
      "We focus on custom, hand-coded solutions rather than page builders or templates. Our approach prioritizes performance, security, and scalability. We build lasting partnerships and provide ongoing support, ensuring your website grows with your business.",
  },
] as const

export interface WebDevelopmentFAQSectionProps {
  /** When set, title becomes "{locationLabel} {serviceKeyword} FAQs" (e.g. Colorado Web Development FAQs). */
  locationLabel?: string
  /** Word or phrase before "FAQs" when `locationLabel` is set; also used for the default title when no location. Defaults to "Web Development". */
  serviceKeyword?: string
}

export function FAQSection({ locationLabel, serviceKeyword = "Web Development" }: WebDevelopmentFAQSectionProps) {
  const loc = locationLabel?.trim()
  const title = loc ? `${loc} ${serviceKeyword} FAQs` : `${serviceKeyword} FAQs`
  const description = loc
    ? `Common questions about our web development services and process in ${loc}.`
    : "Common questions about our web development services and process."

  return (
    <FaqAccordionSection
      title={title}
      description={description}
      items={[...FAQ_ITEMS]}
    />
  )
}
