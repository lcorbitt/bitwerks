"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Heading2 } from "../ui/heading"
import { ScrollFadeIn } from "../ui/scroll-fade-in"

const techsRow1 = [
  "Docker", "React", "PostgreSQL", "Figma", "Express", "Vue.js", "AWS", "TypeScript", "Laravel", "MongoDB", "Bootstrap", "Heroku", "RSpec", "Tailwind CSS", "MySQL", "Next.js", "Algoliasearch"
]
const techsRow2 = [
  "Ruby on Rails", "Shadcn UI", "Redis", "JavaScript", "NestJS", "Cypress", "PHP", "MantineUI", "Node.js", "Playwright", "SQL", "Shopify", "ReactQuery", "WordPress", "Vercel"
]

export const TechMarqueeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure proper rendering
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative dark:bg-tertiary bg-light pt-56 md:pt-80 -mt-20">
      <div className="absolute inset-x-0 -top-24 md:-top-44 flex justify-center z-30">
        <Image 
          src="/progressive-app.svg" 
          alt="Devices image" 
          width={800} 
          height={800} 
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" 
        />
      </div>
      <ScrollFadeIn>
        <div className="container mx-auto text-center">
          <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
            OUR STACK
          </p>
          <Heading2>
            Technologies We Use
          </Heading2>
          <p className="mb-12 text-lg text-muted-foreground mt-8">
            Our team is comfortable and experienced with a wide range of modern technologies and tools.
          </p>
        </div>
        {/* Marquee rows */}
        <div className="overflow-hidden" style={{ height: '9rem' }}>
            {/* Top row: slides left */}
            <div className={`flex overflow-hidden whitespace-nowrap h-16 items-center transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex animate-scroll">
                {techsRow1.map((tech, i) => (
                  <span
                    key={tech + i}
                    className="mx-3 lg:mx-6 text-2xl md:text-4xl font-extrabold text-muted-foreground opacity-60"
                  >
                    {tech}
                  </span>
                ))}
                {techsRow1.map((tech, i) => (
                  <span
                    key={tech + i + "dup"}
                    className="mx-3 lg:mx-6 text-2xl md:text-4xl font-extrabold text-muted-foreground opacity-60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Bottom row: slides right */}
            <div className={`flex overflow-hidden whitespace-nowrap mt-2 h-16 items-center transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex animate-scroll-reverse">
                {techsRow2.map((tech, i) => (
                  <span
                    key={tech + i}
                    className="mx-3 lg:mx-6 text-2xl md:text-4xl font-extrabold text-muted-foreground opacity-60"
                  >
                    {tech}
                  </span>
                ))}
                {techsRow2.map((tech, i) => (
                  <span
                    key={tech + i + "dup"}
                    className="mx-3 lg:mx-6 text-2xl md:text-4xl font-extrabold text-muted-foreground opacity-60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="container mx-auto flex justify-center mt-12 md:mt-16">
            <a
              href="#"
              className="inline-flex items-center text-base font-medium hover:underline text-primary hover:text-primary/90 dark:text-white transition-colors group"
            >
              Our full repertoire
              <span className="ml-2 transition-transform group-hover:translate-x-1 dark:text-white">→</span>
            </a>
          </div>
        <style jsx global>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          
          .animate-scroll {
            animation: scroll 60s linear infinite;
          }
          
          .animate-scroll-reverse {
            animation: scroll-reverse 60s linear infinite;
          }
        `}</style>
      </ScrollFadeIn>
    </section>
  );
};

export default TechMarqueeSection; 