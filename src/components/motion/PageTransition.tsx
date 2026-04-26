"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ReactNode } from "react"
import { fadeUp } from "./motionVariants"

export default function PageTransition({
  children,
  keyProp,
}: {
  children: ReactNode
  keyProp: string
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyProp}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        exit="hidden"   // ✅ FIXED (safe fallback)
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}