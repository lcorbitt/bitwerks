import Image from "next/image"
import Link from "next/link"
import { Globe, Linkedin, Mail, Twitter } from "lucide-react"

import { navigationItems } from "@/components/navigation-data"

const socialLinks = [
  {
    label: "BitWerks website",
    href: "https://bitwerks.dev",
    Icon: Globe,
  },
  {
    label: "Email BitWerks",
    href: "mailto:bitwerksco@gmail.com",
    Icon: Mail,
  },
  {
    label: "BitWerks on LinkedIn",
    href: "https://www.linkedin.com/company/bitwerks",
    Icon: Linkedin,
  },
] as const

const expertiseItems =
  navigationItems.find((item) => item.type === "dropdown" && item.href === "/services")?.children?.filter(
    (c) => c.type === "link",
  ) ?? []

export const BlogPostAuthorCard = () => {
  return (
    <section
      aria-labelledby="blog-author-heading"
      className="rounded-xl bg-black/5 px-5 py-5 dark:border-amber-500/30 dark:bg-amber-500/10"
    >
      <div className="flex gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/logo-light.png"
            alt="BitWerks"
            fill
            className="object-contain p-2 dark:hidden"
            sizes="56px"
          />
          <Image
            src="/logo-dark.png"
            alt="BitWerks"
            fill
            className="hidden object-contain p-2 dark:block"
            sizes="56px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h2 id="blog-author-heading" className="text-2xl font-bold tracking-tight text-foreground">
            By{" "}
            <span className="underline decoration-brand/70 decoration-2 underline-offset-4">BitWerks Editorial Team</span>
          </h2>
          <ul className="mt-2 flex flex-wrap gap-3" aria-label="BitWerks on the web">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
      Since 2017, we've built software for businesses of all sizes, from early-stage startups to established organizations. The company's goal is to create lasting value throughout the entire digital transformation journey.
      </p>
      <div className="mt-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Expertise</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {expertiseItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="inline-flex rounded-md border border-black/10 bg-transparent px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-brand/50 hover:text-brand dark:border-white/50 dark:hover:border-orange-500/50"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
