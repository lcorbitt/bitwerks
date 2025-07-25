import { Heading2 } from "@/components/ui/heading"

const ArrowUpRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ClipboardCheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const whyChooseUsItems = [
  {
    title: "Technical Expertise",
    description: "We bring extensive experience as a partner with deep expertise across multiple programming languages, frameworks, and technologies. Our background spans various industries and company partnerships, giving us a well-rounded perspective on solving complex technical challenges.",
    icon: <ArrowUpRightIcon />,
  },
  {
    title: "Flexible Engagement Models",
    description: "We offer flexible engagement models to accommodate your specific business needs. Whether you need a complete software build, ongoing maintenance, technical consulting, or custom application development, we adapt our approach to fit your project scope and timeline.",
    icon: <UserIcon />,
  },
  {
    title: "Proven Track Record",
    description: "With years of experience partnering with companies across different industries, we've successfully delivered numerous software projects that drive real business value. Our approach focuses on understanding your unique needs and delivering solutions that exceed expectations.",
    icon: <ClipboardCheckIcon />,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Heading2 className="mb-6">
            Why Choose Us for Your Software Development Needs
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            We combine technical expertise with business understanding to deliver software solutions that truly make a difference.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {whyChooseUsItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                  {item.icon}
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 