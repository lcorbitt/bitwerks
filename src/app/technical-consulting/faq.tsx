"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heading2 } from "@/components/ui/heading"

export function FAQSection() {
  return (
    <section className="bg-light dark:bg-tertiary pt-40 -mt-20">
      <div className="container">
        <div className="mx-auto text-center mb-16">
          <Heading2 className="mb-6">
            FAQs
          </Heading2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Common questions about our technical consulting services and approach.
          </p>
        </div>
        
        <div className="mx-auto w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What types of technical consulting do you provide?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We provide comprehensive technical consulting including technology strategy, system architecture, technology selection, problem-solving, team training, and project planning. Whether you need help choosing the right tools, understanding complex concepts, or planning your technical roadmap, we can guide you.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                How do your consulting sessions work?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We offer flexible consulting sessions including one-time consultations, ongoing advisory relationships, and project-based guidance. Sessions can be conducted remotely or in-person, and we provide detailed documentation and recommendations after each consultation. We adapt our approach to your specific needs and schedule.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Can you help us even if we don&apos;t know what we need?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Absolutely! Many of our clients come to us with general questions or challenges without knowing the specific solutions they need. We start by understanding your business goals and current situation, then help identify the right technical approaches and solutions for your specific needs.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                How much do technical consulting services cost?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Our consulting rates vary based on the complexity and scope of your needs. We offer hourly rates for quick questions, project-based pricing for specific guidance, and retainer arrangements for ongoing advisory relationships. We&apos;ll provide transparent pricing upfront so you know exactly what to expect.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Do you provide ongoing support after consulting sessions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Yes! We provide follow-up support including email clarification, additional documentation, and implementation guidance. For ongoing relationships, we offer regular check-ins and can help you implement the recommendations we&apos;ve provided. We&apos;re committed to your success beyond just the initial consultation.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Can you help with technology decisions for non-technical teams?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Definitely! We specialize in translating complex technical concepts into clear, actionable advice for non-technical decision-makers. We help you understand the business implications of technical choices, evaluate costs and benefits, and make informed decisions that align with your business goals.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What industries do you have experience consulting for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We have experience across various industries including manufacturing, healthcare, retail, professional services, and technology companies. Our broad experience allows us to understand industry-specific challenges and provide relevant technical guidance regardless of your business sector.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                How do you stay current with technology trends?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We continuously research and evaluate new technologies, attend industry conferences, participate in technical communities, and maintain hands-on experience with current tools and platforms. This ensures our recommendations are based on current best practices and emerging trends that can benefit your business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
} 