import { MotionProvider } from "@/providers/MotionProvider"
import HeroLeft from "./HeroLeft"
import HeroRight from "./HeroRight"

const Hero = () => {
  return (
    <MotionProvider mode="view">
      <section
        id="home"
        aria-label="Hero section"
        className="relative min-h-screen flex items-center px-6 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 blur-2xl rounded-full" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-2xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <HeroLeft />
          <HeroRight />
        </div>
      </section>
    </MotionProvider>
  )
}

export default Hero