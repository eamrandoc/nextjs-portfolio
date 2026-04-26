"use client"

import { motion } from "framer-motion"
import { animationMap, AnimationVariant } from "./animationMap"
import { useMotionMode } from "@/providers/MotionProvider"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  variant?: AnimationVariant
  className?: string
  delay?: number
  hover?: boolean // ✅ NEW
}

export default function Animated({
  children,
  variant = "fadeUp",
  className,
  delay = 0,
  hover = false,
}: Props) {
  const selected = animationMap[variant]
  const mode = useMotionMode()

  const isView = mode === "view"
  const isNone = mode === "none"

  return (
    <motion.div
      className={cn(className)}
      variants={isNone ? undefined : selected}
      initial={isNone ? false : "hidden"}
      animate={!isView && !isNone ? "show" : undefined}
      whileInView={isView && !isNone ? "show" : undefined}
      custom={delay}
      whileHover={hover && !isNone ? "hover" : undefined}
      whileTap={hover && !isNone ? "tap" : undefined}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  )
}