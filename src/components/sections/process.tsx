"use client"

import Image from "next/image";
import { MessageSquare, FileText, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { DecorativeCircles } from "../ui/decorative-circles";

export function Process() {
  return (
    <section className="relative bg-[#f6f7f8] dark:bg-tertiary">
      <DecorativeCircles inverted />
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Heading and Image */}
        <div className="flex-1 flex flex-col items-start">
          <p className="uppercase mb-2 text-muted-light dark:text-muted-dark tracking-widest font-normal">
            OUR PROCESS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Simple,
            seamless,
            streamlined
            <span className="text-brand">.</span>
          </h2>
          <div className="w-full max-w-xs my-8">
            <div 
              className="relative aspect-[4/3] my-8 w-full h-full"
              style={{ clipPath: 'polygon(0% 0%, 75% 0%, 100% 100%, 25% 100%)' }}
            >
              <Image src="/process.jpg" alt="Our Process" fill className="object-cover object-center" />
            </div>
          </div>
        </div>
        {/* Right: Timeline */}
        <div className="flex-1 flex flex-col gap-12 relative">
          {/* Vertical dashed line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 h-[36rem] border-l-2 border-dashed border-gray-300 z-0 animated-dashed-line" />
          {/* Fade out overlay at bottom */}
          <div className="absolute left-6 bottom-4 w-0.5 h-16 bg-gradient-to-t from-[#f6f7f8] to-transparent dark:from-tertiary z-10" />
          {/* Step 1 */}
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex flex-col items-center">
              <div className="bg-brand text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-md">
                <MessageSquare className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="uppercase text-xs text-muted dark:text-muted-dark font-bold tracking-widest">Step 1</span>
              <h3 className="text-xl font-bold mt-1 mb-2">Share your project.</h3>
              <p className="text-muted dark:text-muted-dark max-w-md text-lg">
                Tell us about your vision, goals, and requirements. We&apos;ll listen carefully to understand exactly what you need to succeed.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex flex-col items-center">
              <div className="bg-brand text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-md">
                <FileText className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="uppercase text-xs text-muted dark:text-muted-dark font-bold tracking-widest">Step 2</span>
              <h3 className="text-xl font-bold mt-1 mb-2">We scope & quote.</h3>
              <p className="text-muted dark:text-muted-dark max-w-md text-lg">
                We&apos;ll analyze your requirements, create a detailed scope of work, and provide you with a transparent, fixed-price quote.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex flex-col items-center">
              <div className="bg-brand text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-md">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="uppercase text-xs text-muted dark:text-muted-dark font-bold tracking-widest">Step 3</span>
              <h3 className="text-xl font-bold mt-1 mb-2">We deliver fast.</h3>
              <p className="text-muted dark:text-muted-dark max-w-md text-lg">
                Once approved, we&apos;ll get to work immediately. We deliver high-quality results quickly, keeping you updated throughout the process.
              </p>
              <Button size="lg"  className="mt-8">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animated-dashed-line {
          border-style: dashed;
          border-color: #d1d5db;
          animation: dashMove 1s linear infinite;
        }
        
        @keyframes dashMove {
          0% { 
            border-image: repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 12px) 1;
          }
          100% { 
            border-image: repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 12px) 1;
            transform: translateY(12px);
          }
        }
      `}</style>
    </section>
  );
} 