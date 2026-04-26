"use client"

import { createContext, useContext } from "react"
import { useReducedMotion } from "framer-motion"

type MotionMode = "animate" | "view" | "none"

const MotionContext = createContext<MotionMode>("view")

export function MotionProvider({
  children,
  mode = "view",
}: {
  children: React.ReactNode
  mode?: MotionMode
}) {
  const shouldReduceMotion = useReducedMotion()

  const finalMode = shouldReduceMotion ? "none" : mode

  return (
    <MotionContext.Provider value={finalMode}>
      {children}
    </MotionContext.Provider>
  )
}

export function useMotionMode() {
  return useContext(MotionContext)
}