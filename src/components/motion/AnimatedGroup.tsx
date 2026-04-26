"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { container } from "./motionVariants"
import { useMotionMode } from "@/providers/MotionProvider"
import { cn } from "@/lib/utils"

export default function AnimatedGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const mode = useMotionMode()
  const isView = mode === "view"

  return (
    <motion.div
      className={cn(className)}
      variants={container}
      initial="hidden"
      animate={!isView ? "show" : undefined}
      whileInView={isView ? "show" : undefined}
      viewport={{ once: true }}
      exit="hidden"
    >
      {children}
    </motion.div>
  )
}