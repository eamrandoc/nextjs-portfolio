import Animated from "@/components/motion/Animated"
import HeroBanner from "./HeroBanner"

export default function HeroRight() {
  return (
    <Animated variant="fadeLeft">
      <div className="w-full max-w-md mx-auto relative">

        {/* Glass Card */}
        <div className="relative rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_30px_100px_rgba(0,0,0,0.4)]">

          {/* Glow layer */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-xl opacity-60" />

          {/* Lottie */}
          <HeroBanner />
        </div>

        {/* Floating Badge */}
        <div className="absolute -top-6 right-10 px-4 py-2 text-sm bg-white/10 border border-white/20 rounded-full backdrop-blur-xl animate-bounce">
          🚀 Available for Work
        </div>
      </div>
    </Animated>
  )
}