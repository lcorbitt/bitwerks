"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollFadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  useTransform?: boolean
}

export function ScrollFadeIn({ children, className = "", delay = 0, useTransform = false }: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          // Unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target)
        }
      },
      {
        // Trigger as soon as any pixel of the section enters the expanded
        // viewport. The positive bottom rootMargin pre-fires the reveal ~200px
        // before the section actually crosses the fold so content is fading in
        // by the time the user scrolls to it, rather than after.
        threshold: 0.10,
        rootMargin: "0px 0px 200px 0px",
      }
    )

    const element = ref.current
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [delay])

  // Use opacity-only to avoid affecting child positioning and z-index
  // Note: opacity < 1 temporarily creates a stacking context during animation (800ms)
  // After animation completes (opacity = 1), no stacking context remains
  const animationStyle: React.CSSProperties = {
    transitionDuration: "1250ms",
    transitionProperty: useTransform ? "opacity, transform" : "opacity",
    transitionTimingFunction: "ease-out",
    opacity: isVisible ? 1 : 0,
    // Explicitly avoid creating unnecessary stacking contexts
    position: "static",
    zIndex: "auto",
  }

  if (useTransform) {
    animationStyle.transform = isVisible ? "translateY(0)" : "translateY(2rem)"
    // Transform creates containing block but we can't avoid it if useTransform is true
  }

  return (
    <div
      ref={ref}
      style={animationStyle}
      className={className}
    >
      {children}
    </div>
  )
}
