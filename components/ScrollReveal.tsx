'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = [
      'section h2',
      'section .grid > *',
      'section .expand-row > *',
      '.svc-card',
      'section > div > p',
      'section .max-w-\\[88rem\\] > div > p',
      'section .relative.rounded-3xl',
    ]

    const nodes = new Set<Element>()
    selectors.forEach((sel) => {
      try {
        document.querySelectorAll(sel).forEach((el) => {
          if (el.closest('.marquee-track')) return
          if (el.closest('section')?.querySelector('video')) return
          if (el.closest('nav')) return
          nodes.add(el)
        })
      } catch {
        /* ignore selector errors */
      }
    })
    nodes.forEach((el) => el.classList.add('reveal'))

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const parent = e.target.parentElement
            if (parent && parent.children.length > 1) {
              const idx = Array.prototype.indexOf.call(parent.children, e.target)
              ;(e.target as HTMLElement).style.transitionDelay = `${Math.min(idx, 6) * 70}ms`
            }
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    nodes.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
