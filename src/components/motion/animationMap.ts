import {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  blurIn,
  rotateIn,
  item,
} from "./motionVariants"

// -----------------------------
// ENTER ANIMATIONS
// -----------------------------

const enterAnimations = {
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  scaleIn,
  blurIn,
  rotateIn,
}

// -----------------------------
// STAGGER ITEM
// -----------------------------

const staggerAnimations = {
  item,
}

// -----------------------------
// FINAL MAP (ENGINE USE)
// -----------------------------

export const animationMap = {
  ...enterAnimations,
  ...staggerAnimations,
}

// -----------------------------
// TYPE SAFETY
// -----------------------------

export type AnimationVariant = keyof typeof animationMap