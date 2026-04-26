"use client"

import { useRef } from "react"

export function useTilt() {
  const ref = useRef<HTMLDivElement | null>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = ((y / rect.height) - 0.5) * -10
    const rotateY = ((x / rect.width) - 0.5) * 10

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }

  return { ref, onMouseMove, onMouseLeave }
}