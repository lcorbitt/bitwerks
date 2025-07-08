import Image from "next/image";
import { Heading2 } from "../ui/heading";

export function Partners() {
  
  return (
    <section className="bg-white dark:bg-primary py-16 md:pb-28 dark:pb-28 w-full">
      <div className="container mx-auto">
        {/* Mobile layout - centered column */}
        <div className="md:hidden text-center mb-12">
          <p className="font-normal tracking-widest mb-2 text-muted-light dark:text-muted-dark">PARTNERS</p>
          <Heading2>Companies we&apos;ve worked with</Heading2>
          <div className="w-16 h-px bg-black/10 dark:bg-white/20 mx-auto my-6"></div>
          <p className="text-primary dark:text-white text-sm max-w-md mx-auto" style={{lineHeight: '1.5'}}>
            We have worked with clients all over the U.S. for start ups, digital marketing agencies, doctors, and more. No matter what your business is, we can build your website or application that is effective, beautiful, performant, and tailored to your industry.
          </p>
        </div>

        {/* Desktop layout - side by side */}
        <div className="hidden md:flex items-stretch flex-row justify-between gap-8 mb-12">
          <div className="flex items-start">
            <div>
              <p className="font-normal tracking-widest mb-2 text-muted-light dark:text-muted-dark">PARTNERS</p>
              <Heading2>Companies we&apos;ve worked with</Heading2>
            </div>
            <div className="border-l border-black/10 dark:border-white/20 mx-4 self-stretch"></div>
            <div className="md:ml-8 md:w-1/2 flex items-center">
              <p className="text-primary dark:text-white text-base lg:text-lg p-4" style={{lineHeight: '1.5'}}>
                We have worked with clients all over the U.S. for start ups, digital marketing agencies, doctors, and more. No matter what your business is, we can build your website or application that is effective, beautiful, performant, and tailored to your industry.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          <div className="h-16 w-32 bg-muted/20 rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-110">
            <Image
              src="/urban_sky_dark.png"
              alt="Urban Sky Logo"
              width={128}
              height={64}
              className="object-contain dark:hidden transition-transform duration-300 group-hover:scale-110"
            />
            <Image
              src="/urban_sky_white.png"
              alt="Urban Sky Logo"
              width={128}
              height={64}
              className="object-contain hidden dark:block transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Urban Sky
            </div>
          </div>
          <div className="h-16 w-32 bg-muted/20 rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-110">
            <Image
              src="/hodinkee_dark.png"
              alt="Hodinkee Logo"
              width={128}
              height={64}
              className="object-contain dark:hidden transition-transform duration-300 group-hover:scale-110"
            />
            <Image
              src="/hodinkee_white.svg"
              alt="Hodinkee Logo"
              width={128}
              height={64}
              className="object-contain hidden dark:block transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Hodinkee
            </div>
          </div>
          <div className="h-16 w-32 bg-muted/20 rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-110">
            <Image
              src="/spectora_dark.png"
              alt="Spectora Logo"
              width={128}
              height={64}
              className="object-contain dark:hidden transition-transform duration-300 group-hover:scale-110"
            />
            <Image
              src="/spectora_white.png"
              alt="Spectora Logo"
              width={128}
              height={64}
              className="object-contain hidden dark:block transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Spectora
            </div>
          </div>
          <div className="h-16 w-32 bg-muted/20 rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-110">
            <Image
              src="/tracefirst_dark.png"
              alt="Trace First Logo"
              width={128}
              height={64}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Trace First
            </div>
          </div>
          <div className="h-16 w-32 bg-muted/20 rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-110">
            <Image
              src="/errantry_studios.png"
              alt="Errantry Studios Logo"
              width={128}
              height={64}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Errantry Studios
            </div>
          </div>
          <div className="h-16 w-32 bg-muted/20 rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-110">
            <Image
              src="/loth_co_dark.png"
              alt="Loth & Co. Logo"
              width={128}
              height={64}
              className="object-contain dark:hidden transition-transform duration-300 group-hover:scale-110"
            />
            <Image
              src="/loth_co_white.png"
              alt="Loth & Co. Logo"
              width={128}
              height={64}
              className="object-contain hidden dark:block transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Spectora
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 