import Image from "next/image";
import { Phone, Users, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";
import { DecorativeCircles } from "../ui/decorative-circles";

export function Process() {
  return (
    <section className="relative bg-[#f6f7f8] dark:bg-tertiary">
      <DecorativeCircles inverted />
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Heading and Image */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="mb-4">Our process.<br /></span>
            Simple,<br />
            seamless,<br />
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
          <div className="absolute left-6 top-8 bottom-8 w-0.5 border-l-2 border-dashed border-gray-300 z-0" />
          {/* Step 1 */}
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex flex-col items-center">
              <div className="bg-brand text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-md">
                <Phone className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="uppercase text-xs text-muted dark:text-muted-dark font-bold tracking-widest">Step 1</span>
              <h3 className="text-xl font-bold mt-1 mb-2">Join exploration call.</h3>
              <p className="text-muted dark:text-muted-dark max-w-md">
                Tell us more about your business on a discovery call. We'll discuss initial goals, success criteria, and timeline to see how we can help.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex flex-col items-center">
              <div className="bg-brand text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-md">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="uppercase text-xs text-muted dark:text-muted-dark font-bold tracking-widest">Step 2</span>
              <h3 className="text-xl font-bold mt-1 mb-2">Discuss solution and approach.</h3>
              <p className="text-muted dark:text-muted-dark max-w-md">
                In a matter of days, we’ll finalize your project specifications, define the scope of work, and agree on an engagement model.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-start gap-6 relative z-10">
            <div className="flex flex-col items-center">
              <div className="bg-brand text-white rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-md">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="uppercase text-xs text-muted dark:text-muted-dark font-bold tracking-widest">Step 3</span>
              <h3 className="text-xl font-bold mt-1 mb-2">Get started and track performance.</h3>
              <p className="text-muted dark:text-muted-dark max-w-md">
                Once we've agreed on milestones, we'll immediately get to work. We'll track progress, report updates, and continuously adapt to your needs.
              </p>
              <Button size="lg"  className="mt-8">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 