import { Facebook, Linkedin, Share2 } from "lucide-react"

interface BlogShareMenuProps {
  shareUrl: string
}

const buildFacebookShareUrl = (url: string) =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`

const buildLinkedInShareUrl = (url: string) =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`

export const BlogShareMenu = ({ shareUrl }: BlogShareMenuProps) => {
  const facebookHref = buildFacebookShareUrl(shareUrl)
  const linkedInHref = buildLinkedInShareUrl(shareUrl)

  return (
    <details className="group relative shrink-0">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-md border border-border/70 bg-white dark:bg-primary px-3 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-brand/40 hover:text-brand [&::-webkit-details-marker]:hidden">
        Share
        <Share2 className="h-4 w-4" strokeWidth={1.75} aria-hidden />
      </summary>
      <div
        className="absolute right-0 z-30 mt-2 min-w-[11.5rem] overflow-hidden rounded-lg border border-border/70 bg-white dark:bg-primary shadow-lg"
        role="menu"
      >
        <a
          href={facebookHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-sm text-foreground transition-colors hover:bg-black/5 hover:text-brand"
          role="menuitem"
        >
          <Facebook className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
          Facebook
        </a>
        <a
          href={linkedInHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-sm text-foreground transition-colors hover:bg-black/5 hover:text-brand"
          role="menuitem"
        >
          <Linkedin className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
          LinkedIn
        </a>
      </div>
    </details>
  )
}
