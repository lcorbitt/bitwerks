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
      }
    ]
  },
  {
    title: "OUR WORK",
    href: "/our-work",
    type: "link"
  },
  {
    title: "PRICING",
    href: "/pricing",
    type: "link"
  },
  {
    title: "ABOUT",
    href: "/about",
    type: "link"
  }
]
