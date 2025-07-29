"use client"

import { useEffect } from 'react'

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Track Core Web Vitals
    import('web-vitals').then(({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
      onCLS(console.log)
      onFCP(console.log)
      onINP(console.log)
      onLCP(console.log)
      onTTFB(console.log)
    })

    // Track performance marks
    if ('performance' in window) {
      performance.mark('page-start')
      
      // Mark when page is fully loaded
      window.addEventListener('load', () => {
        performance.mark('page-loaded')
        performance.measure('page-load-time', 'page-start', 'page-loaded')
      })
    }
  }, [])

  return null
} 