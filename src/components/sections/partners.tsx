import Image from "next/image";
import { Heading2 } from "../ui/heading";

export function Partners() {
  return (
    <section className="bg-white dark:bg-primary py-16 py:pb-20 w-full">
      <div className="container mx-auto">
        <div className="flex items-stretch flex-col md:flex-row md:items-stretch md:justify-between gap-8 mb-12">
          <div className="flex items-start">
            <div>
              <p className="font-normal tracking-widest mb-2 text-muted-light dark:text-muted-dark">PARTNERS</p>
              <Heading2>COMPANIES WE&apos;VE WORKED WITH</Heading2>
            </div>
            <div className="border-l border-black/10 dark:border-white/20 mx-4 self-stretch"></div>
            <div className="md:ml-8 md:w-1/2 flex items-center">
              <p className="text-primary text-lg p-4" style={{lineHeight: '1.5'}}>
                We have worked with clients all over the U.S. for start ups, digital marketing agencies, doctors, and more. No matter what your business is, we can build your website or application that is effective, beautiful, performant, and tailored to your industry.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
            <Image
              src="/urban_sky_logo.jpg"
              alt="Urban Sky Logo"
              width={96}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
            <Image
              src="/hodinkee.png"
              alt="Hodinkee Logo"
              width={96}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">
            <Image
              src="/spectora.png"
              alt="Spectora Logo"
              width={96}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 4</div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 5</div>
          <div className="h-12 w-24 bg-muted/20 rounded-lg flex items-center justify-center">Logo 6</div>
        </div>
      </div>
    </section>
  );
} 