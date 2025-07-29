"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heading2 } from "./heading"

export function FAQSection() {
  return (
    <section className="bg-light dark:bg-tertiary pt-40 -mt-20">
      <div className="container">
        <div className="mx-auto text-center mb-16">
          <Heading2 className="mb-6">
            FAQs
          </Heading2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Common questions about our web development services and process.
          </p>
        </div>
        
        <div className="mx-auto w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                How long does it take to build a website?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Project timelines vary based on complexity and features. A simple business website typically takes 2-4 weeks, while complex applications can take 8-12 weeks or more. We&apos;ll provide a detailed timeline during our initial consultation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What technologies do you use for web development?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, and Tailwind CSS. Our stack is chosen for performance, scalability, and maintainability. We also work with various databases, APIs, and third-party integrations as needed.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Do you provide ongoing maintenance and support?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, content updates, and technical support. We believe in building long-term partnerships with our clients.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Can you help with SEO and digital marketing?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Absolutely! We build websites with SEO best practices from the ground up, including proper meta tags, structured data, fast loading times, and mobile optimization. We can also help with content strategy, Google Analytics setup, and basic digital marketing guidance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What&apos;s included in your web development packages?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Our packages include custom design, responsive development, content management system setup, SEO optimization, testing across devices, launch support, and training. We also provide hosting recommendations and ongoing support options.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                How do you handle project communication and updates?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We maintain transparent communication throughout the project with regular check-ins, progress updates, and milestone reviews. We use project management tools to keep you informed and provide access to development previews so you can see progress in real-time.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Do you work with existing websites or only build new ones?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We work with both! Whether you need a complete redesign, specific feature additions, performance improvements, or ongoing maintenance for an existing site, we can help. We&apos;ll assess your current setup and recommend the best approach.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What makes your web development approach different?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We focus on custom, hand-coded solutions rather than page builders or templates. Our approach prioritizes performance, security, and scalability. We build lasting partnerships and provide ongoing support, ensuring your website grows with your business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 