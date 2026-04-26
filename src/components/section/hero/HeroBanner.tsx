"use client"

import dynamic from "next/dynamic"
import devAnimation from "@/assets/lottiefiles/dev.json"

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
})

const HeroBanner = () => {
  return (
    <div className="relative z-10">
      <Lottie animationData={devAnimation} loop />
    </div>
  )
}

export default HeroBanner