import { Easing } from "framer-motion"

const easing = {
  standard: [0.4, 0, 0.2, 1] as Easing,
  decelerate: [0, 0, 0.2, 1] as Easing,
  accelerate: [0.4, 0, 1, 1] as Easing,
  sharp: [0.4, 0, 0.6, 1] as Easing,
}

export const motionTokens = {
  duration: {
    instant: 0,
    fast: 0.2,
    normal: 0.35,
    slow: 0.6,
  },

  easing,

  transition: {
    default: {
      duration: 0.35,
      ease: easing.standard,
    },
    enter: {
      duration: 0.35,
      ease: easing.decelerate,
    },
    exit: {
      duration: 0.25,
      ease: easing.accelerate,
    },
    emphasized: {
      duration: 0.4,
      ease: easing.standard,
    },
    hover: {
      duration: 0.2,
      ease: easing.standard,
    },
    tap: {
      duration: 0.15,
      ease: easing.sharp,
    },
  },

  stagger: {
    xs: 0.03,
    sm: 0.06,
    md: 0.1,
    lg: 0.2,
  },

  distance: {
    xs: 6,
    sm: 12,
    md: 20,
    lg: 32,
    xl: 48,
  },

  scale: {
    hover: 1.03,
    tap: 0.97,
    sm: 0.96,
    md: 0.92,
  },
   swipe: {
    x: 150,
    y: 150,
  }
} as const