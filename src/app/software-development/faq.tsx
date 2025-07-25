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
            Common questions about our software development services and process.
          </p>
        </div>
        
        <div className="mx-auto w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What types of software can you build for small businesses?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We specialize in custom business software including inventory management systems, customer relationship management (CRM) tools, order processing systems, employee scheduling applications, accounting integrations, and workflow automation tools. We focus on solutions that streamline your specific business operations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Can you integrate with our existing business software?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                After an initial discussion to better understand your needs, we will strive to integrate with your existing systems such as payment processors, email marketing platforms, and other business tools. Our goal is to ensure that your new software aligns seamlessly with your current workflow and data.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                How long does it take to develop custom business software?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Development time depends on complexity. Simple business tools can be completed in 4-8 weeks, while more complex systems may take 12-20 weeks. We use an iterative approach, delivering working features throughout the process so you can start using parts of the system early.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                Do you provide training and support after launch?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Yes! We provide comprehensive training for your team, detailed documentation, and ongoing technical support. We offer maintenance packages that include updates, bug fixes, and feature enhancements. We're committed to ensuring your software continues to meet your business needs as you grow.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                How do you ensure our business data is secure?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Security is built into every project from the start. We make sure to implement industry-standard security practices including data encryption, secure authentication, regular security updates, and compliance with relevant regulations.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-semibold text-gray-900 dark:text-white">
                What if our business needs change after the software is built?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We design software to be flexible and scalable. We can modify and enhance your software as your business evolves. We offer ongoing development services to add new features, integrate with new systems, or adapt to changing business processes. Your software grows with your business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
