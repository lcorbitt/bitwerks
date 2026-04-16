"use client"

import { FaqAccordionSection } from "@/components/sections/faq-accordion-section"

const FAQ_ITEMS = [
  {
    value: "item-1",
    question: "What types of software can you build?",
    answer:
      "We've worked across a diverse range of industries and products, and we're confident we can design and develop a tailored solution for your business. Every project is unique, so we'll work closely with you to understand your specific needs and requirements.",
  },
  {
    value: "item-3",
    question: "Can you integrate with our existing business software?",
    answer:
      "After an initial discussion to better understand your needs, we will strive to integrate with your existing systems such as payment processors, email marketing platforms, and other business tools. Our goal is to ensure that your new software aligns seamlessly with your current workflow and data.",
  },
  {
    value: "item-4",
    question: "How long does it take to develop custom business software?",
    answer:
      "Development time depends on complexity. Simple business tools can be completed in 4-8 weeks, while more complex systems may take 12-20 weeks. We use an iterative approach, delivering working features throughout the process so you can start using parts of the system early.",
  },
  {
    value: "item-5",
    question: "Do you provide training and support after launch?",
    answer:
      "Yes! We provide comprehensive training for your team, detailed documentation, and ongoing technical support. We offer maintenance packages that include updates, bug fixes, and feature enhancements. We're committed to ensuring your software continues to meet your business needs as you grow.",
  },
  {
    value: "item-7",
    question: "How do you ensure our business data is secure?",
    answer:
      "Security is built into every project from the start. We make sure to implement industry-standard security practices including data encryption, secure authentication, regular security updates, and compliance with relevant regulations.",
  },
  {
    value: "item-8",
    question: "What if our business needs change after the software is built?",
    answer:
      "We design software to be flexible and scalable. We can modify and enhance your software as your business evolves. We offer ongoing development services to add new features, integrate with new systems, or adapt to changing business processes. Your software grows with your business.",
  },
] as const

export function FAQSection() {
  return (
    <FaqAccordionSection
      title="Software Development FAQs"
      description="Common questions about our software development services and process."
      items={[...FAQ_ITEMS]}
    />
  )
}
