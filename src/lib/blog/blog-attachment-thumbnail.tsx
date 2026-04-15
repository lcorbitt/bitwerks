"use client"

import Image from "next/image"

import { cn } from "@/lib/utils"

export interface BlogAttachmentThumbnailProps {
  src: string
  alt: string
  /** Visual size preset (frame uses object-cover). Ignored when `fullWidth` is true. */
  size?: "xs" | "sm" | "md" | "lg"
  /** Fills parent width with a short aspect frame (e.g. grid picker cells). */
  fullWidth?: boolean
  /** Taller full-width frame for editor hero preview (ignored when `fullWidth` is false). */
  fullWidthEditor?: boolean
  className?: string
  priority?: boolean
}

const sizeClassName: Record<NonNullable<BlogAttachmentThumbnailProps["size"]>, string> = {
  xs: "h-9 w-12",
  sm: "h-12 w-16",
  md: "h-16 w-24",
  lg: "h-24 w-36",
}

const sizesAttr: Record<NonNullable<BlogAttachmentThumbnailProps["size"]>, string> = {
  xs: "48px",
  sm: "64px",
  md: "96px",
  lg: "144px",
}

export const BlogAttachmentThumbnail = ({
  src,
  alt,
  size = "sm",
  fullWidth = false,
  fullWidthEditor = false,
  className,
  priority = false,
}: BlogAttachmentThumbnailProps) => (
  <span
    className={cn(
      "relative shrink-0 overflow-hidden rounded-lg border bg-muted/30",
      fullWidth
        ? cn(
            "block w-full",
            fullWidthEditor ? "aspect-video max-h-56 min-h-[7rem]" : "aspect-[4/3] max-h-[5.25rem]",
          )
        : cn("inline-block", sizeClassName[size]),
      className,
    )}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes={fullWidth ? (fullWidthEditor ? "(max-width:768px) 100vw, 640px" : "120px") : sizesAttr[size]}
      priority={priority}
    />
  </span>
)
