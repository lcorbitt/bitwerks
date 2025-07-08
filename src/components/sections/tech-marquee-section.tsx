"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Heading2 } from "../ui/heading"

const techsRow1 = [
  "Node.js", "Ruby", "Rails", "RSpec", "NestJS", "SQL", "PHP", "PostgreSQL", "MySQL", "Express", "MongoDB", "Redis", "Algoliasearch", "Docker", "AWS", "Heroku", "Vercel",
]
const techsRow2 = [
  "JavaScript", "React", "ReactQuery","TypeScript", "Next.js", "Vue.js", "Bootstrap", "Figma", "Tailwind CSS", "Shadcn UI", "MantineUI", "Cypress", "Playwright"
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
    <section className="relative pb-16 md:pb-24 pt-48 md:pt-64 dark:bg-tertiary bg-light">
      {/* Decorative image at the top center, overlapping the divider */}
      <div className="absolute inset-x-0 -top-36 md:-top-56 z-20 flex justify-center">
        <Image 
          src="progressive-app.svg" 
          alt="Decorative logo" 
          width={800} 
          height={800} 
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]" 
          priority 
        />
      </div>
      <div className="container mx-auto text-center">
        <p className="mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
          OUR STACK
        </p>
        <Heading2 className="mb-8">
          Technologies We Use
        </Heading2>
        <p className="mb-12 text-lg text-muted-foreground">
          Our team is comfortable and experienced with a wide range of modern technologies and tools.
        </p>
      </div>
      {/* Marquee rows */}
      <div className="overflow-hidden" style={{ height: '9rem' }}>
          {/* Top row: slides left */}
          <div className={`marquee-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="marquee-content">
              {techsRow1.map((tech, i) => (
                <span
                  key={tech + i}
                  className="mx-3 lg:mx-6 text-3xl md:text-4xl font-extrabold text-muted-foreground opacity-60"
                >
                  {tech}
                </span>
              ))}
              {techsRow1.map((tech, i) => (
                <span
                  key={tech + i + "dup"}
                  className="mx-3 lg:mx-6 text-3xl md:text-4xl font-extrabold text-muted-foreground opacity-60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {/* Bottom row: slides right */}
          <div className={`marquee-container-reverse ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="marquee-content">
              {techsRow2.map((tech, i) => (
                <span
                  key={tech + i}
                  className="mx-3 lg:mx-6 text-3xl md:text-4xl font-extrabold text-muted-foreground opacity-60"
                >
                  {tech}
                </span>
              ))}
              {techsRow2.map((tech, i) => (
                <span
                  key={tech + i + "dup"}
                  className="mx-3 lg:mx-6 text-3xl md:text-4xl font-extrabold text-muted-foreground opacity-60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Button */}
        <div className="container mx-auto flex justify-center mt-10">
          <a
            href="#"
            className="inline-flex items-center text-base font-medium underline underline-offset-4 text-primary hover:text-primary/90 dark:text-white transition-colors group"
          >
            Our full repertoire
            <span className="ml-2 transition-transform group-hover:translate-x-1 dark:text-white">→</span>
          </a>
        </div>
      {/* Marquee keyframes */}
      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          height: 4rem;
          align-items: center;
        }
        
        .marquee-container-reverse {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          margin-top: 0.5rem;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          height: 4rem;
          align-items: center;
        }
        
        .marquee-container.visible,
        .marquee-container-reverse.visible {
          opacity: 1;
        }
        
        .marquee-container.hidden,
        .marquee-container-reverse.hidden {
          opacity: 0;
        }
        
        .marquee-content {
          display: flex;
          animation: scroll 60s linear infinite;
        }
        
        .marquee-container-reverse .marquee-content {
          animation: scroll-reverse 60s linear infinite;
        }
        

        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default TechMarqueeSection; 