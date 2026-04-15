export const BLOG_IMAGE_LAYOUTS = ["center-wide", "float-left", "float-right"] as const

export type BlogImageLayout = (typeof BLOG_IMAGE_LAYOUTS)[number]

export const DEFAULT_BLOG_IMAGE_LAYOUT: BlogImageLayout = "center-wide"

export const parseBlogImageLayout = (value: unknown): BlogImageLayout => {
  if (value === "center-wide" || value === "float-left" || value === "float-right") return value
  return DEFAULT_BLOG_IMAGE_LAYOUT
}
