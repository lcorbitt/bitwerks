import { Boxes, Code2, Gauge } from "lucide-react"
import Image from "next/image"

import { Heading2 } from "@/components/ui/heading"
import { webDevelopmentWhyChooseBlocks } from "@/lib/value-propositions"

const whyChooseIcons = [
  <Code2 key="0" className="h-8 w-8 text-brand" strokeWidth={1.5} aria-hidden />,
  <Boxes key="1" className="h-8 w-8 text-brand" strokeWidth={1.5} aria-hidden />,
  <Gauge key="2" className="h-8 w-8 text-brand" strokeWidth={1.5} aria-hidden />,
]

export interface WebDevelopmentWhyChooseUsProps {
  /** When set, the headline becomes "Why Choose BitWerks for {locationLabel} {serviceKeyword}" (e.g. Colorado + Web Development). */
  locationLabel?: string
  /** Shown on the last line when `locationLabel` is set. Defaults to "Web Development". */
  serviceKeyword?: string
}

export default function WhyChooseUs({ locationLabel, serviceKeyword = "Web Development" }: WebDevelopmentWhyChooseUsProps) {
  const hasLocation = Boolean(locationLabel?.trim())

  return (
    <section className="bg-white dark:bg-black">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Heading */}
          <div className="text-center lg:text-left">
            <Heading2 className="">
              Why Choose
              <br />
              {hasLocation ? (
                <>
                  <span className="text-brand">Bit</span>Werks for {locationLabel}
                  <br />
                  {serviceKeyword}
                </>
              ) : (
                <>
                  <span className="text-brand">Bit</span>Werks for Web
                  <br />
                  Development
                </>
              )}
            </Heading2>

            {/* Desktop Bottom Image */}
            <div className="mt-16 hidden lg:block">
              <div className="w-full h-64 md:h-80 lg:h-96 relative rounded-tr-lg rounded-br-lg overflow-hidden">
                <Image
                  src="/glasses.jpg"
                  alt="Web developer working on laptop"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Informational Blocks */}
          <div className="space-y-8">
            {webDevelopmentWhyChooseBlocks.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                  {whyChooseIcons[index]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Bottom Image */}
          <div className="mt-16 lg:hidden">
            <div className="w-full h-64 md:h-80 lg:h-96 relative rounded-tr-lg rounded-br-lg overflow-hidden">
              <Image
                src="/glasses.jpg"
                alt="Web developer working on laptop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
