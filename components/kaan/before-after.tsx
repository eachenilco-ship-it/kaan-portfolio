'use client'

import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

type BeforeAfterProps = {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  url: string
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  url,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(55)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(98, Math.max(2, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return
    updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    draggingRef.current = false
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') setPosition((p) => Math.max(2, p - 4))
    if (e.key === 'ArrowRight') setPosition((p) => Math.min(98, p + 4))
  }

  return (
    <figure className="w-full">
      {/* Browser chrome */}
      <div className="overflow-hidden rounded-xl border border-hairline bg-[#0e0d0b] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
        <div className="flex items-center gap-3 border-b border-hairline bg-[#161512] px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="mx-auto flex w-full max-w-[240px] items-center justify-center rounded-md bg-black/40 px-3 py-1 text-[11px] text-sand">
            <span className="truncate">{url}</span>
          </div>
        </div>

        {/* Comparison area */}
        <div
          ref={containerRef}
          className="relative aspect-[3/2] w-full cursor-ew-resize select-none touch-none"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {/* After (base layer) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={afterSrc || '/placeholder.svg'}
            alt={afterAlt}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <span className="label-eyebrow pointer-events-none absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-[10px] font-semibold text-ink">
            Après
          </span>

          {/* Before (clipped layer) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={beforeSrc || '/placeholder.svg'}
              alt={beforeAlt}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <span className="label-eyebrow pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold text-white/80 ring-1 ring-white/10">
              Avant
            </span>
          </div>

          {/* Handle */}
          <div
            role="slider"
            aria-label="Comparer avant et après"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onKeyDown={onKeyDown}
            className="absolute top-0 bottom-0 z-10 -ml-5 flex w-10 cursor-ew-resize items-center justify-center outline-none"
            style={{ left: `${position}%` }}
          >
            <span className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gold/80" />
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink shadow-lg ring-4 ring-gold/20">
              <MoveHorizontal className="h-4 w-4" strokeWidth={2} />
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-sand/70">
        Glissez pour comparer — maquette de démonstration
      </figcaption>
    </figure>
  )
}
