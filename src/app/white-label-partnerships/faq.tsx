"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heading2 } from "@/components/ui/heading"
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in"

export function FAQSection() {
  return (
    <section className="bg-light dark:bg-tertiary pt-40 -mt-20">
      <ScrollFadeIn>
        <div className="container">
          <div className="mx-auto text-center mb-16">
            <Heading2 className="mb-6">
              White Label Partnerships FAQs
            </Heading2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Common questions about our white label development services and partnership approach.
            </p>
          </div>
          
          <div className="mx-auto w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  What types of white label services do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  We provide comprehensive white label development including custom website development, web applications, performance optimization, SEO-ready development, content management systems, and ongoing support. We work under your agency&apos;s brand to deliver professional solutions for your clients.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  How does the white label partnership work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  We work directly with your agency to deliver custom websites and applications under your brand. You can refer clients directly to us, or we can work with you to implement what your clients need. We handle everything from initial consultation to post-launch support, maintaining your agency&apos;s branding throughout the process.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  Can you help us even if we don&apos;t have technical expertise?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Absolutely! We work with agencies of all technical levels. We handle all the technical aspects while you focus on client relationships and marketing. We provide clear communication throughout the process and can explain technical concepts in business terms that you and your clients can understand.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  How much do white label development services cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Our white label development rates vary based on project complexity and scope. We offer competitive agency pricing with transparent project-based costs. We can work with your budget and provide flexible payment terms. We&apos;ll provide detailed quotes upfront so you can price your services appropriately to your clients.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  Do you provide ongoing support after project completion?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Yes! We provide comprehensive ongoing support including maintenance, updates, security patches, and technical support. We offer flexible support packages that can be billed to your clients or included in your service offerings. We&apos;re committed to long-term partnerships and ensuring your clients&apos; websites continue to perform optimally.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  Can you help with SEO and marketing optimization?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Absolutely! We build all websites with SEO best practices in mind, including perfect Page Speed Scores, semantic HTML structure, and optimized performance. We work closely with your SEO and marketing strategies to ensure the technical foundation supports your campaigns and helps boost your clients&apos; search rankings.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  What types of agencies do you work with?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  We work with marketing agencies, SEO agencies, digital agencies, and creative agencies of all sizes. Our experience spans various industries and client types, allowing us to understand your agency&apos;s needs and deliver solutions that enhance your service offerings and client satisfaction.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                  How do you ensure quality and performance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  We follow industry best practices, use modern development frameworks, and implement rigorous testing and optimization processes. Every website we build is optimized for performance, SEO, and user experience. We stay current with the latest web technologies and trends to ensure your clients get cutting-edge solutions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  )
} 