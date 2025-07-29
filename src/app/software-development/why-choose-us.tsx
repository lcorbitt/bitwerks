import { Heading2 } from "@/components/ui/heading"
import Image from "next/image"

const ArrowUpRightIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand" aria-hidden="true">
    <path d="M7 25L25 7" />
    <path d="M11 7h14v14" />
  </svg>
)

const UserIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand" aria-hidden="true">
    <circle cx="16" cy="10" r="6" />
    <path d="M4 28c0-6.6 5.4-12 12-12s12 5.4 12 12" />
  </svg>
)

const ClipboardCheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand" aria-hidden="true">
    <rect x="7" y="6" width="18" height="20" rx="3" />
    <path d="M11 6V4h10v2" />
    <path d="M12.5 17.5l3 3 4-5" />
  </svg>
)

const whyChooseUsItems = [
  {
    title: "Custom Software Solutions",
    description: "We build tailored software that fits your specific business needs and workflows, ensuring maximum efficiency and user adoption.",
    icon: <ArrowUpRightIcon />,
  },
  {
    title: "Scalable Architecture",
    description: "Our software is designed to grow with your business, using modern technologies that can handle increased load and new features.",
    icon: <UserIcon />,
  },
  {
    title: "Ongoing Support",
    description: "We provide continuous maintenance, updates, and support to ensure your software remains secure, efficient, and up-to-date.",
    icon: <ClipboardCheckIcon />,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Heading */}
          <div className="text-center lg:text-left">
            <Heading2 className="">
              Why Choose
              <br />
              <span className="text-brand">Bit</span>Werks for Software
              <br />
              Development
            </Heading2>

            {/* Desktop Bottom Image */}
            <div className="mt-16 hidden lg:block">
              <div className="w-full h-64 md:h-80 lg:h-96 relative rounded-tr-lg rounded-br-lg overflow-hidden">
                <Image
                  src="/man-working.jpg"
                  alt="Software developer working on code"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Informational Blocks */}
          <div className="space-y-8">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Bottom Image */}
          <div className="mt-16 lg:hidden">
            <div className="w-full h-64 md:h-80 lg:h-96 relative rounded-tr-lg rounded-br-lg overflow-hidden">
              <Image
                src="/man-working.jpg"
                alt="Software developer working on code"
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