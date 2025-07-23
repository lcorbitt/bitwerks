"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heading1 } from "../ui/heading"

interface HeroProps {
  locationString: string
}

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      {/* Circular arc */}
      <div className="circular-arc"></div>
      
      {/* Person */}
      <div className="person">
        {/* Head */}
        <div className="head"></div>
        
        {/* Headphones */}
        <div className="headphones">
          <div className="headphone-left"></div>
          <div className="headphone-right"></div>
          <div className="headphone-band"></div>
        </div>
        
        {/* Body */}
        <div className="body"></div>
        
        {/* Arms */}
        <div className="arms">
          <div className="arm-left"></div>
          <div className="arm-right"></div>
        </div>
      </div>
      
      {/* Laptop */}
      <div className="laptop">
        <div className="laptop-screen">
          <div className="laptop-content"></div>
        </div>
      </div>

      <style jsx>{`
        .hero-illustration {
          position: relative;
          width: 100%;
          height: 400px;
          background: #2d2d2d;
          border-radius: 12px;
          overflow: hidden;
        }

        /* Circular arc */
        .circular-arc {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 280px;
          height: 280px;
          border: 2px solid white;
          border-radius: 50%;
          border-top: none;
          border-right: none;
          border-bottom: none;
          opacity: 0.8;
          animation: fadeIn 2s ease-out;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
        }

        /* Person */
        .person {
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
        }

        /* Head */
        .head {
          width: 80px;
          height: 80px;
          background: linear-gradient(145deg, #ffb3a7 0%, #ff9a8b 50%, #ff8a7a 100%);
          border-radius: 50%;
          position: relative;
          z-index: 3;
          box-shadow: 
            0 4px 16px rgba(0,0,0,0.3),
            inset 0 2px 4px rgba(255,255,255,0.3);
        }

        /* Headphones */
        .headphones {
          position: absolute;
          top: -20px;
          left: -15px;
          width: 110px;
          height: 60px;
        }

        .headphone-left,
        .headphone-right {
          width: 40px;
          height: 40px;
          background: linear-gradient(145deg, #ff6b35 0%, #ff5722 50%, #ff4500 100%);
          border-radius: 50%;
          position: absolute;
          top: 0;
          box-shadow: 
            0 3px 12px rgba(255,107,53,0.4),
            inset 0 1px 3px rgba(255,255,255,0.2);
        }

        .headphone-left {
          left: 0;
        }

        .headphone-right {
          right: 0;
        }

        .headphone-band {
          width: 70px;
          height: 12px;
          background: linear-gradient(145deg, #ff6b35 0%, #ff5722 50%, #ff4500 100%);
          border-radius: 6px;
          position: absolute;
          top: 14px;
          left: 20px;
          box-shadow: 
            0 2px 8px rgba(255,107,53,0.3),
            inset 0 1px 2px rgba(255,255,255,0.2);
        }

        /* Body */
        .body {
          width: 60px;
          height: 100px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #f1f3f4 100%);
          border-radius: 30px 30px 0 0;
          margin-top: -20px;
          position: relative;
          z-index: 2;
          box-shadow: 
            0 6px 20px rgba(0,0,0,0.25),
            inset 0 1px 3px rgba(255,255,255,0.8);
        }

        /* Arms */
        .arms {
          position: absolute;
          top: 30px;
          left: -20px;
          width: 100px;
        }

        .arm-left,
        .arm-right {
          width: 20px;
          height: 60px;
          background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #f1f3f4 100%);
          border-radius: 10px;
          position: absolute;
          top: 0;
          box-shadow: 
            0 3px 12px rgba(0,0,0,0.2),
            inset 0 1px 2px rgba(255,255,255,0.8);
        }

        .arm-left {
          left: 0;
          transform: rotate(-40deg);
          transform-origin: top center;
          animation: typeLeft 4s ease-in-out infinite;
        }

        .arm-right {
          right: 0;
          transform: rotate(40deg);
          transform-origin: top center;
          animation: typeRight 4s ease-in-out infinite;
        }

        @keyframes typeLeft {
          0%, 100% { transform: rotate(-40deg); }
          50% { transform: rotate(-35deg); }
        }

        @keyframes typeRight {
          0%, 100% { transform: rotate(40deg); }
          50% { transform: rotate(35deg); }
        }

        /* Laptop */
        .laptop {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
        }

        .laptop-screen {
          width: 160px;
          height: 100px;
          background: linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 50%, #404040 100%);
          border-radius: 12px 12px 0 0;
          border: 3px solid #333;
          position: relative;
          box-shadow: 
            0 10px 30px rgba(0,0,0,0.5),
            inset 0 1px 3px rgba(255,255,255,0.1);
        }

        .laptop-content {
          width: 30px;
          height: 30px;
          background: radial-gradient(circle, #ff6b35 0%, #ff5722 50%, #ff4500 100%);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 3s ease-in-out infinite;
          box-shadow: 
            0 0 25px rgba(255,107,53,0.7),
            0 0 50px rgba(255,107,53,0.4),
            inset 0 2px 4px rgba(255,255,255,0.3);
        }

        @keyframes pulse {
          0%, 100% { 
            box-shadow: 
              0 0 25px rgba(255,107,53,0.7),
              0 0 50px rgba(255,107,53,0.4),
              inset 0 2px 4px rgba(255,255,255,0.3);
            transform: translate(-50%, -50%) scale(1);
          }
          50% { 
            box-shadow: 
              0 0 35px rgba(255,107,53,0.9),
              0 0 70px rgba(255,107,53,0.6),
              inset 0 2px 4px rgba(255,255,255,0.3);
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hero-illustration {
            height: 300px;
          }
          
          .circular-arc {
            width: 200px;
            height: 200px;
          }
          
          .head {
            width: 65px;
            height: 65px;
          }
          
          .headphones {
            width: 95px;
            height: 50px;
          }
          
          .headphone-left,
          .headphone-right {
            width: 35px;
            height: 35px;
          }
          
          .headphone-band {
            width: 60px;
            height: 10px;
            top: 12px;
            left: 17px;
          }
          
          .body {
            width: 50px;
            height: 85px;
          }
          
          .laptop-screen {
            width: 130px;
            height: 85px;
          }
          
          .laptop-content {
            width: 25px;
            height: 25px;
          }
        }
      `}</style>
    </div>
  )
}

export function Hero({ locationString }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 pb-32 md:pb-64 w-full h-full">
      {/* Hero background image */}
      <div
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/hero.jpg")',
        }}
        aria-hidden="true"
      />
      {/* Solid overlay - mobile light theme */}
      <div 
        className="absolute inset-0 z-10 lg:hidden bg-white/80 dark:hidden"
        aria-hidden="true"
      />
      {/* Solid overlay - mobile dark theme */}
      <div 
        className="absolute inset-0 z-10 hidden dark:block bg-tertiary/80"
        aria-hidden="true"
      />
      {/* Gradient overlay - light theme - lg and up */}
      <div 
        className="absolute inset-0 z-10 hidden lg:block"
        style={{
          background: 'linear-gradient(to right, #F6F7F8 02%, #F6F7F8 40%, rgba(246, 247, 248, 0.8) 50%, rgba(246, 247, 248, 0.4) 70%, rgba(246, 247, 248, 0) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Gradient overlay - dark theme - lg and up */}
      <div 
        className="absolute inset-0 z-10 dark:hidden lg:dark:block hidden"
        style={{
          background: 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 30%, rgba(26, 26, 26, 0.8) 50%, rgba(26, 26, 26, 0.4) 80%, rgba(26, 26, 26, 0) 100%)',
        }}
        aria-hidden="true"
      />
      <div className="container relative z-20">
        <div className="mx-auto lg:grid lg:items-center lg:gap-8 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col text-center lg:text-left w-full">
            <Heading1 className="mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10">Small Business</Heading1>
            <Heading1 className="mb-6 mx-auto lg:mx-0 max-w-3xl lg:max-w-none relative z-10">Digital Solutions</Heading1>
            <p className="mb-8 text-sm text-muted-light dark:text-muted-dark md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              Web Development • Software Development • Technical Consulting
            </p>
            <p className="mb-8 text-basetext-muted-foreground md:text-lg mx-auto lg:mx-0 max-w-2xl lg:max-w-xl relative z-10">
              We build custom websites and software for businesses {locationString === "nationwide" ? "across the U.S." : ` in ${locationString}.`} We focus on the technical implementation so you can focus on what you do best.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start relative z-10">
              <Button
                asChild
                variant="default"
                size="lg"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>

          {/* Animated illustration - hidden on smaller screens */}
          <div className="hidden lg:flex relative items-center justify-center">
            <div className="w-full h-auto max-w-[450px]">
              {/* <HeroIllustration /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 