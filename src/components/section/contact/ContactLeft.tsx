"use client"

import SocialLinks from "@/components/shared/SocialLinks"
import Animated from "@/components/motion/Animated"

export default function ContactLeft() {
  return (
    <div className="space-y-6">

      <Animated variant="fadeLeft">
        <h2 className="text-4xl font-semibold">
          Let’s build something amazing 🚀
        </h2>
      </Animated>

      <Animated variant="fadeLeft" delay={0.1}>
        <p className="text-muted-foreground">
          I’m open to freelance work, collaborations, or full-time roles.
          Feel free to reach out anytime.
        </p>
      </Animated>

      <Animated variant="fadeLeft" delay={0.2}>
        <SocialLinks />
      </Animated>

    </div>
  )
}