import Image, { type ImageProps } from "next/image"

type SmartImageVariant = "logo" | "logoCard" | "photo" | "hero" | "thumbnail"

interface SmartImageProps extends Omit<ImageProps, "sizes" | "quality"> {
  /**
   * Variant tunes the default `sizes` hint and `quality` so every image picks
   * an appropriately-sized variant from Next.js's optimizer without each
   * caller having to think about it.
   *
   * - `logo`: small partner logos in a fixed-pixel slot (Partners grid).
   * - `logoCard`: logos centered in a responsive card grid (ClientShowcase).
   * - `photo`: general photographic content rendered at <= 1024px container.
   * - `hero`: above-the-fold full-bleed image; pair with `priority`.
   * - `thumbnail`: small card-sized photo in a multi-column grid.
   */
  variant?: SmartImageVariant
  sizes?: string
  quality?: number
}

const variantDefaults: Record<SmartImageVariant, { sizes: string; quality: number }> = {
  logo: { sizes: "(min-width: 768px) 192px, 144px", quality: 90 },
  logoCard: {
    sizes: "(min-width: 1024px) 280px, (min-width: 768px) 33vw, 50vw",
    quality: 90,
  },
  photo: { sizes: "(min-width: 1024px) 1024px, 100vw", quality: 75 },
  hero: { sizes: "100vw", quality: 80 },
  thumbnail: {
    sizes: "(min-width: 1024px) 360px, (min-width: 768px) 33vw, 50vw",
    quality: 78,
  },
}

export function SmartImage({
  variant = "photo",
  sizes,
  quality,
  ...rest
}: SmartImageProps) {
  const defaults = variantDefaults[variant]
  return (
    <Image
      {...rest}
      sizes={sizes ?? defaults.sizes}
      quality={quality ?? defaults.quality}
    />
  )
}
