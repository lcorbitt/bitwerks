"use client"

import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { useState } from "react"
import { Hero } from "./hero"
import { FAQSection } from "./faq"
import { CTA } from "@/components/sections/cta"
import { DecorativeCircles } from "@/components/ui/decorative-circles"

const websiteTiers = [
  {
    name: "STARTER",
    description: "Perfect for small businesses and startups",
    price: "$1,500",
    period: "one-time",
    popular: false,
    features: [
      { name: "Custom Design & Development", included: true },
      { name: "Responsive Design (Mobile-First)", included: true },
      { name: "SEO Optimization", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "Hosting (1 year)", included: true },
      { name: "Performance Optimization", included: true },
      { name: "SSL Certificate", included: true },
      { name: "24/7 Support", included: true },
      { name: "Basic Analytics Setup", included: false },
      { name: "Content Management", included: false },
    ],
    cta: "Get Started",
    ctaLink: "/contact"
  },
  {
    name: "PROFESSIONAL",
    description: "Ideal for growing businesses with more complex needs",
    price: "$2,500",
    period: "one-time",
    popular: true,
    features: [
      { name: "Custom Design & Development", included: true },
      { name: "Responsive Design (Mobile-First)", included: true },
      { name: "Advanced SEO Optimization", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "Hosting (1 year)", included: true },
      { name: "Performance Optimization", included: true },
      { name: "Advanced Analytics Setup", included: true },
      { name: "SSL Certificate", included: true },
      { name: "Content Management", included: true },
      { name: "24/7 Support", included: true },
    ],
    cta: "Get Started",
    ctaLink: "/contact"
  },
  {
    name: "ENTERPRISE",
    description: "Comprehensive solution for large organizations",
    price: "LET'S TALK",
    period: "",
    popular: false,
    features: [
      { name: "Custom Design & Development", included: true },
      { name: "Design System Handoff", included: true },
      { name: "Complete Site Audit", included: true },
      { name: "Advanced SEO Optimization", included: true },
      { name: "Premium Hosting (1 year)", included: true },
      { name: "Performance Optimization", included: true },
      { name: "Advanced Analytics Setup", included: true },
      { name: "Multi-language Support", included: true },
      { name: "Advanced Content Management", included: true },
      { name: "24/7 Priority Support", included: true },
    ],
    cta: "Get Started",
    ctaLink: "/contact"
  }
]

const softwareAppTiers = [
  {
    name: "STARTER",
    description: "Perfect for simple applications and MVPs",
    price: "$3,500",
    period: "one-time",
    popular: false,
    features: [
      { name: "Custom Design & Development", included: true },
      { name: "User Authentication & SSO", included: true },
      { name: "Database Integration", included: true },
      { name: "Basic API Development", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "Hosting (1 year)", included: true },
      { name: "Performance Optimization", included: true },
      { name: "Basic Analytics Setup", included: true },
      { name: "Content Management", included: false },
      { name: "24/7 Support", included: false },
    ],
    cta: "Get Started",
    ctaLink: "/contact"
  },
  {
    name: "PROFESSIONAL",
    description: "Ideal for growing businesses with complex requirements",
    price: "$6,500",
    period: "one-time",
    popular: true,
    features: [
      { name: "Custom Design & Development", included: true },
      { name: "User Authentication & SSO", included: true },
      { name: "Database Integration", included: true },
      { name: "Real-time Features", included: true },
      { name: "Advanced API Development", included: true },
      { name: "Contact Form Integration", included: true },
      { name: "Hosting (1 year)", included: true },
      { name: "Performance Optimization", included: true },
      { name: "Content Management", included: true },
      { name: "24/7 Support", included: true },
    ],
    cta: "Get Started",
    ctaLink: "/contact"
  },
  {
    name: "ENTERPRISE",
    description: "Comprehensive solution for large-scale applications",
    price: "LET'S TALK",
    period: "",
    popular: false,
    features: [
      { name: "Custom Design & Development", included: true },
      { name: "Design System Handoff", included: true },
      { name: "Complete App Audit & Refactor", included: true },
      { name: "Advanced User Management", included: true },
      { name: "Multi-tenant Architecture", included: true },
      { name: "Advanced Database Design", included: true },
      { name: "API Development & Documentation", included: true },
      { name: "Premium Hosting (1 year)", included: true },
      { name: "Performance Optimization", included: true },
      { name: "24/7 Priority Support", included: true },
    ],
    cta: "Get Started",
    ctaLink: "/contact"
  }
]

// Toggle Component
function PricingToggle({ activeTab, onTabChange }: { activeTab: 'website' | 'software'; onTabChange: (tab: 'website' | 'software') => void }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative bg-gray-100 dark:bg-gray-500 rounded-lg p-1 flex">
        {/* Sliding background */}
        <div 
          className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] bg-white dark:bg-gray-700 rounded-md shadow-sm transition-transform duration-300 ease-in-out ${
            activeTab === 'website' ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
        
        {/* Website Button */}
        <button
          onClick={() => onTabChange('website')}
          className={`relative z-10 px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-300 ${
            activeTab === 'website'
              ? 'text-black dark:text-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
          }`}
        >
          Website
        </button>
        
        {/* Software Button */}
        <button
          onClick={() => onTabChange('software')}
          className={`relative z-10 px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-300 ${
            activeTab === 'software'
              ? 'text-black dark:text-white'
              : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
          }`}
        >
          Software
        </button>
      </div>
    </div>
  )
}

// Pricing Cards Component
function PricingCards({ tiers }: { tiers: typeof websiteTiers }) {
  return (
    <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
      {tiers.map((tier, index) => (
        <div
          key={tier.name}
          className={`relative rounded-2xl p-8 ${
            tier.popular
              ? 'bg-brand text-white shadow-2xl scale-105'
              : 'bg-white dark:bg-tertiary text-black dark:text-white shadow-lg'
          }`}
        >
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
          )}
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
            <p className="text-sm opacity-80 mb-4">{tier.description}</p>
            <div className="mb-4">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-sm opacity-80 ml-2">{tier.period}</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {tier.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {feature.included ? (
                    <Check className={`w-5 h-5 ${tier.popular ? 'text-white' : 'text-green-500'}`} />
                  ) : (
                    <X className={`w-5 h-5 ${tier.popular ? 'text-white/50' : 'text-gray-400'}`} />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${tier.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {feature.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button
            asChild
            className={`w-full ${
              tier.popular
                ? 'bg-accent hover:bg-accent/90 text-white'
                : 'bg-black hover:bg-black/90 text-white dark:bg-white dark:text-black dark:hover:bg-white/90'
            }`}
          >
            <a href={tier.ctaLink}>{tier.cta}</a>
          </Button>
        </div>
      ))}
    </div>
  )
}

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'website' | 'software'>('website')

  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />
      {/* Curved section divider */}
      <section className="clip-top-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-20 md:-mt-48 z-20"></section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-0 -mt-48 z-20 -mb-8 relative">
        <DecorativeCircles />
        <div className="container mx-auto">
          {/* CTA for Toggle */}
          <div className="text-center">
            <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal uppercase">
              CHOOSE PROJECT TYPE
            </p>
            <p className="mb-6 text-muted-foreground tracking-wide text-base md:text-lg">
              Select Website or Software below to view pricing tailored to your specific needs.
            </p>
          </div>
          
          {/* Toggle */}
          <div className="text-center mb-6">
          <PricingToggle activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          <div className="relative min-h-[600px]">
            {/* Website Pricing */}
            <div 
              className={`transition-all duration-500 ease-in-out ${
                activeTab === 'website'
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="pt-24">
                <PricingCards tiers={websiteTiers} />
              </div>
            </div>
            
            {/* Software Pricing */}
            <div 
              className={`transition-all duration-500 ease-in-out ${
                activeTab === 'software' 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="pt-24">
                <PricingCards tiers={softwareAppTiers} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved section divider */}
      <section className="clip-bottom-large-circle relative -left-[15%] h-72 w-[130%] bg-white dark:bg-primary -mt-32 z-10"></section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute top-24">
          <DecorativeCircles inverted />
        </div>
        <CTA />
      </div>
    </div>
  )
}
