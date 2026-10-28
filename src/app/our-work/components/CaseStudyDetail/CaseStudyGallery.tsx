import Image from "next/image"

import type { CaseStudyGalleryImage } from "@/lib/case-studies/case-study-page.model"

interface CaseStudyGalleryProps {
  images: CaseStudyGalleryImage[]
}

export const CaseStudyGallery = ({ images }: CaseStudyGalleryProps) => {
  if (!images.length) return null

  return (
    <section aria-labelledby="case-study-gallery-heading" className="py-8 md:py-12">
      <h2 id="case-study-gallery-heading" className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        In the work
      </h2>
      <ul className="mt-8 grid gap-8 sm:grid-cols-2" role="list">
        {images.map((image) => (
          <li key={image.src} className="group">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted/30 ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            {image.caption ? (
              <p className="mt-3 text-sm text-muted-foreground">{image.caption}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
