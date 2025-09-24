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
    title: "Agency-Focused Partnership",
    description: "We understand agency workflows and client management. Our white label approach ensures seamless integration with your existing processes while maintaining your brand identity.",
    icon: <ArrowUpRightIcon />,
  },
  {
    title: "Flexible Collaboration",
    description: "Whether you need us to work directly with your clients or behind the scenes, we adapt our approach to fit your agency&apos;s preferred workflow and communication style.",
    icon: <UserIcon />,
  },
  {
    title: "Proven Performance",
    description: "Our development expertise delivers websites with perfect Page Speed Scores and SEO optimization, boosting the effectiveness of your marketing campaigns and client satisfaction.",
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
              <span className="text-brand">Bit</span>Werks for White Label
              <br />
              Development
            </Heading2>

            {/* Desktop Bottom Image */}
            <div className="mt-16 hidden lg:block">
              <div className="w-full h-64 md:h-80 lg:h-96 relative rounded-tr-lg rounded-br-lg overflow-hidden">
                <Image
                  src="/group-working.jpg"
                  alt="White-label development partnership"
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
                src="/group-working.jpg"
                alt="White-label development partnership"
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