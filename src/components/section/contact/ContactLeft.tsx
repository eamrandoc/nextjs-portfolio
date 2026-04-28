"use client"

import SocialLinks from "@/components/shared/SocialLinks"
import Animated from "@/components/motion/Animated"
import { FaWhatsapp } from "react-icons/fa"
import { Mail, Phone } from "lucide-react"

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
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>Email: eamrandoc@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>Phone: +8801734064540</span>
          </div>

          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" size={16} />
            <span>WhatsApp: +8801734064540</span>
          </div>
        </div>
      </Animated>

      <Animated variant="fadeLeft" delay={0.2}>
        <SocialLinks />
      </Animated>

    </div>
  )
}