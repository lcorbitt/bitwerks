export interface NavigationItem {
  title: string
  href: string
  type: 'link' | 'dropdown'
  children?: NavigationItem[]
}

export const navigationItems: NavigationItem[] = [
  {
    title: "HOME",
    href: "/",
    type: "link"
  },
  {
    title: "SERVICES",
    href: "/services",
    type: "dropdown",
    children: [
      {
        title: "Web Development",
        href: "/services/web-development",
        type: "link"
      },
      {
        title: "Software Development",
        href: "/services/software-development",
        type: "link"
      },
      {
        title: "White Label Partnerships",
        href: "/services/white-label-partnerships",
        type: "link"
      },
      {
        title: "Strategy & Consulting",
        href: "/services/strategy-consulting",
        type: "link"
      },
      {
        title: "SEO & Growth",
        href: "/services/seo-growth",
        type: "link"
      },
      {
        title: "E-commerce",
        href: "/services/ecommerce",
        type: "link"
      },
      {
        title: "UX / UI Design",
        href: "/services/ux-ui-design",
        type: "link"
      },
      {
        title: "Maintenance & Support",
        href: "/services/maintenance-support",
        type: "link"
      },
      {
        title: "Migration & Modernization",
        href: "/services/migration-modernization",
        type: "link"
      }
    ]
  },
  {
    title: "OUR WORK",
    href: "/our-work",
    type: "link"
  },
  // {
  //   title: "PRICING",
  //   href: "/pricing",
  //   type: "link"
  // },
  // {
  //   title: "ABOUT",
  //   href: "/about",
  //   type: "link"
  // },
  {
    title: "INSIGHTS",
    href: "/insights",
    type: "link"
  }
]
