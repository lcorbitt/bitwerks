import Image from "next/image";
import { Heading2 } from "../ui/heading";

interface Partner {
  name: string;
  alt: string;
  lightImage: string;
  darkImage?: string;
  width?: number;
  height?: number;
}

const partners: Partner[] = [
  {
    name: "Clickk",
    alt: "Clickk Logo",
    lightImage: "/clickk-light.png",
    darkImage: "/clickk-dark.png",
  },
  {
    name: "Urban Sky",
    alt: "Urban Sky Logo",
    lightImage: "/urban_sky_dark.png",
    darkImage: "/urban_sky_white.png",
  },
  {
    name: "Hodinkee",
    alt: "Hodinkee Logo",
    lightImage: "/hodinkee_dark.png",
    darkImage: "/hodinkee_white.svg",
  },
  {
    name: "Spectora",
    alt: "Spectora Logo",
    lightImage: "/spectora_dark.png",
    darkImage: "/spectora_white.png",
  },
  {
    name: "Trace First",
    alt: "Trace First Logo",
    lightImage: "/tracefirst_dark.png",
  },
  {
    name: "Errantry Studios",
    alt: "Errantry Studios Logo",
    lightImage: "/errantry_studios.png",
  },
  // {
  //   name: "Zestful",
  //   alt: "Zestful Logo",
  //   lightImage: "/zestful.webp",
  //   darkImage: "/zestful.webp",
  // },
];

export function Partners() {
  return (
    <section className="bg-white dark:bg-primary w-full">
      <div className="container mx-auto">
        {/* Mobile layout - centered column */}
        <div className="md:hidden text-center mb-12">
          <p className="font-normal tracking-widest mb-2 text-muted-light dark:text-muted-dark uppercase">OUR PARTNERS</p>
          <Heading2>Proud to work with</Heading2>
          {/* <div className="w-16 h-px bg-black/10 dark:bg-white/20 mx-auto my-6"></div> */}
          {/* <p className="text-primary dark:text-white text-lg max-w-md mx-auto mt-8" style={{lineHeight: '1.5'}}>
            We have partnered with clients from start ups to digital marketing agencies to doctors, and more. No matter what your business is, we can build your website or application that is effective, beautiful, performant, and tailored to your industry.
          </p> */}
        </div>

        {/* Desktop layout - side by side */}
        <div className="hidden md:flex items-stretch flex-row justify-between gap-8 mb-12">
          <div className="flex items-start">
            <div>
              <p className="font-normal tracking-widest mb-2 text-muted-light dark:text-muted-dark">OUR PARTNERS</p>
              <Heading2>Proud to work with</Heading2>
            </div>
            <div className="border-l border-black/10 dark:border-white/20 mx-4 self-stretch"></div>
            <div className="md:ml-8 md:w-1/2 flex items-center">
              <p className="text-primary dark:text-white text-base lg:text-lg p-4" style={{lineHeight: '1.5'}}>
                We have partnered with clients from start ups to digital marketing agencies to doctors, and more. No matter what your business is, we can build your website or application that is effective, beautiful, performant, and tailored to your industry.
              </p>
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="h-24 w-36 md:h-32 md:w-48 bg-muted/20 rounded-lg flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:scale-110"
            >
              {partner.darkImage ? (
                <>
                  <Image
                    src={partner.lightImage}
                    alt={partner.alt}
                    width={128}
                    height={64}
                    className="w-full object-contain dark:hidden transition-transform duration-300 group-hover:scale-110"
                  />
                  <Image
                    src={partner.darkImage}
                    alt={partner.alt}
                    width={128}
                    height={64}
                    className="w-full object-contain hidden dark:block transition-transform duration-300 group-hover:scale-110"
                  />
                </>
              ) : (
                <Image
                  src={partner.lightImage}
                  alt={partner.alt}
                  width={128}
                  height={64}
                  className="w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              )}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 