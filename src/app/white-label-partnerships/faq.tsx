"use client"

import { FaqAccordionSection } from "@/components/sections/faq-accordion-section"

const FAQ_ITEMS = [
  {
    value: "item-1",
    question: "What types of white label services do you provide?",
    answer:
      "We provide comprehensive white label development including custom website development, web applications, performance optimization, SEO-ready development, content management systems, and ongoing support. We work under your agency's brand to deliver professional solutions for your clients.",
  },
  {
    value: "item-2",
    question: "How does the white label partnership work?",
    answer:
      "We work directly with your agency to deliver custom websites and applications under your brand. You can refer clients directly to us, or we can work with you to implement what your clients need. We handle everything from initial consultation to post-launch support, maintaining your agency's branding throughout the process.",
  },
  {
    value: "item-3",
    question: "Can you help us even if we don't have technical expertise?",
    answer:
      "Absolutely! We work with agencies of all technical levels. We handle all the technical aspects while you focus on client relationships and marketing. We provide clear communication throughout the process and can explain technical concepts in business terms that you and your clients can understand.",
  },
  {
    value: "item-4",
    question: "How much do white label development services cost?",
    answer:
      "Our white label development rates vary based on project complexity and scope. We offer competitive agency pricing with transparent project-based costs. We can work with your budget and provide flexible payment terms. We'll provide detailed quotes upfront so you can price your services appropriately to your clients.",
  },
  {
    value: "item-5",
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes! We provide comprehensive ongoing support including maintenance, updates, security patches, and technical support. We offer flexible support packages that can be billed to your clients or included in your service offerings. We're committed to long-term partnerships and ensuring your clients' websites continue to perform optimally.",
  },
  {
    value: "item-6",
    question: "Can you help with SEO and marketing optimization?",
    answer:
      "Absolutely! We build all websites with SEO best practices in mind, including perfect Page Speed Scores, semantic HTML structure, and optimized performance. We work closely with your SEO and marketing strategies to ensure the technical foundation supports your campaigns and helps boost your clients' search rankings.",
  },
  {
    value: "item-7",
    question: "What types of agencies do you work with?",
    answer:
      "We work with marketing agencies, SEO agencies, digital agencies, and creative agencies of all sizes. Our experience spans various industries and client types, allowing us to understand your agency's needs and deliver solutions that enhance your service offerings and client satisfaction.",
  },
  {
    value: "item-8",
    question: "How do you ensure quality and performance?",
    answer:
      "We follow industry best practices, use modern development frameworks, and implement rigorous testing and optimization processes. Every website we build is optimized for performance, SEO, and user experience. We stay current with the latest web technologies and trends to ensure your clients get cutting-edge solutions.",
  },
] as const

export function FAQSection() {
  return (
    <FaqAccordionSection
      title="White Label Partnerships FAQs"
      description="Common questions about our white label development services and partnership approach."
      items={[...FAQ_ITEMS]}
    />
  )
}
