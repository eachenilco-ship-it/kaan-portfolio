'use client'

import { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'section' | 'article'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as React.ElementType

  return (
    <Tag
      ref={ref}
      className={`reveal transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className ?? ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
