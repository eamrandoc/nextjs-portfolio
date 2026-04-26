import { Variants } from "framer-motion"
import { motionTokens } from "./motionTokens"

// -----------------------------
// SHORTCUTS
// -----------------------------

const enter = motionTokens.transition.enter
const exit = motionTokens.transition.exit
const hover = motionTokens.transition.hover
const tap = motionTokens.transition.tap

// -----------------------------
// ENTER ANIMATIONS
// (supports custom delay)
// -----------------------------

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.distance.md,
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...enter,
      delay,
    },
  }),
  exit: {
    opacity: 0,
    y: motionTokens.distance.sm,
    transition: exit,
  },
  hover: {
    scale: motionTokens.scale.hover,
    transition: hover,
  },
  tap: {
    scale: motionTokens.scale.tap,
    transition: tap,
  },
}

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -motionTokens.distance.md,
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...enter,
      delay,
    },
  }),
  exit: { 
    opacity: 0, 
    y: -motionTokens.distance.sm, 
    transition: exit 
  },
}

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -motionTokens.distance.lg,
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      ...enter,
      delay,
    },
  }),
  exit: { 
    opacity: 0, 
    x: -motionTokens.distance.sm, 
    transition: exit 
  },
}

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: motionTokens.distance.lg,
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      ...enter,
      delay,
    },
  }),
  exit: { 
    opacity: 0, 
    x: -motionTokens.distance.lg, 
    transition: exit 
  },
}

// -----------------------------
// SCALE ANIMATIONS
// -----------------------------

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: motionTokens.scale.md,
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...enter,
      delay,
    },
  }),
  exit: {
    opacity: 0,
    scale: motionTokens.scale.sm,
    transition: exit,
  },
  hover: {
    scale: motionTokens.scale.hover,
    transition: hover,
  },
  tap: {
    scale: motionTokens.scale.tap,
    transition: tap,
  },
}

// -----------------------------
// BLUR ANIMATION (premium feel)
// -----------------------------

export const blurIn: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.distance.sm,
    filter: "blur(10px)",
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...enter,
      delay,
    },
  }),
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: exit,
  },
}

// -----------------------------
// ROTATION ANIMATION
// -----------------------------

export const rotateIn: Variants = {
  hidden: {
    opacity: 0,
    rotate: -90,
    scale: motionTokens.scale.sm,
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      ...enter,
      delay,
    },
  }),
  exit: {
    opacity: 0,
    rotate: 90,
    transition: exit,
  },
}

// -----------------------------
// STAGGER SYSTEM
// -----------------------------

export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: motionTokens.stagger.md,
      delayChildren: motionTokens.stagger.xs,
    },
  },
}

export const item: Variants = {
  hidden: {
    opacity: 0,
    y: motionTokens.distance.sm,
  },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...enter,
      delay,
    },
  }),
  exit: { 
    opacity: 0, 
    y: motionTokens.distance.sm 
  },
}

// -----------------------------
// ADVANCED INTERACTIONS (OPTIONAL)
// -----------------------------

export const hoverLift: Variants = {
  hidden: { y: 0, scale: 1 },
  show: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: motionTokens.scale.hover,
    transition: hover,
  },
}

export const hoverGlow: Variants = {
  hidden: { boxShadow: "0 0 0 rgba(0,0,0,0)" },
  show: { boxShadow: "0 0 0 rgba(0,0,0,0)" },
  hover: {
    boxShadow: "0 10px 30px rgba(59,130,246,0.25)",
    transition: hover,
  },
}

export const tapScale: Variants = {
  tap: {
    scale: motionTokens.scale.tap,
    transition: tap,
  },
}