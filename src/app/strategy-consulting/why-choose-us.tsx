import Image from "next/image"

import { Heading2 } from "@/components/ui/heading"

const ArrowUpRightIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
    aria-hidden="true"
  >
    <path d="M7 25L25 7" />
    <path d="M11 7h14v14" />
  </svg>
)

const LayersIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
    aria-hidden="true"
  >
    <path d="M4 12L16 6l12 6-12 6L4 12z" />
    <path d="M4 20l12 6 12-6" />
  </svg>
)

const ClipboardCheckIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-brand"
    aria-hidden="true"
  >
    <rect x="7" y="6" width="18" height="20" rx="3" />
    <path d="M11 6V4h10v2" />
    <path d="M12.5 17.5l3 3 4-5" />
  </svg>
)

const whyChooseUsItems = [
  {
    title: "Discovery in the codebase",
    description:
      "We read code, configs, and telemetry alongside briefs. Constraints, refactors, and integration risks surface early. Recommendations respect how your system is actually wired.",
    icon: <ArrowUpRightIcon />,
  },
  {
    title: "Specs your team can execute",
    description:
      "Acceptance criteria, edge cases, and API or content contracts written for implementation. Designers get component states. PMs get traceability from goals to backlog. Engineers get fewer surprises mid sprint.",
    icon: <LayersIcon />,
  },
  {
    title: "Measurable UX, not opinions",
    description:
      "Research plans tie to analytics, funnels, and usability evidence. When we propose a pattern change, you will know what signal we expect to move and how we will verify it after release.",
    icon: <ClipboardCheckIcon />,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-black">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <Heading2 className="">
              Why Choose <span className="text-brand">Bit</span>Werks for
              <br />
              Strategy & Consulting?
            </Heading2>

            <div className="mt-16 hidden lg:block">
              <div className="relative h-64 w-full overflow-hidden rounded-br-lg rounded-tr-lg md:h-80 lg:h-96">
                <Image src="/glasses.jpg" alt="Technical discovery and product planning" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 lg:hidden">
            <div className="relative h-64 w-full overflow-hidden rounded-br-lg rounded-tr-lg md:h-80 lg:h-96">
              <Image src="/glasses.jpg" alt="Technical discovery and product planning" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
