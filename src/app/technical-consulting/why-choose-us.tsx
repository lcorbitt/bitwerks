import { Heading2 } from "@/components/ui/heading"

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
    icon: <ArrowUpRightIcon />,
    title: "Expert Technical Guidance",
    description: "We provide clear, actionable advice based on years of experience across various technologies and industries. Our recommendations are practical and tailored to your specific business needs and constraints."
  },
  {
    icon: <UserIcon />,
    title: "Flexible Engagement Model",
    description: "Whether you need a one-time consultation or ongoing advisory relationship, we adapt our approach to fit your schedule and requirements. We offer hourly, project-based, and retainer arrangements."
  },
  {
    icon: <ClipboardCheckIcon />,
    title: "Proven Track Record",
    description: "We have successfully guided numerous businesses through complex technical decisions, helping them avoid costly mistakes and implement solutions that drive real business value and growth."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-black py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto text-center mb-16">
          <Heading2 className="mb-6">
            Why Choose Our Technical Consulting Services
          </Heading2>
          <p className="text-xl text-muted-light dark:text-muted-dark">
            Get expert guidance from experienced professionals who understand both technology and business.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {whyChooseUsItems.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                {item.icon}
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