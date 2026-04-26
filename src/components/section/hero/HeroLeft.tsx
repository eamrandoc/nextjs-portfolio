import Link from "next/link"
import { Button } from "@/components/ui/button"
import SocialLinks from "@/components/shared/SocialLinks"
import Animated from "@/components/motion/Animated"
import HeroTypewriter from "./HeroTypewriter"

const HeroLeft = () => {
  return (
    <Animated variant="fadeRight">
      <div className="space-y-8 backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 p-8 md:p-10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">

        {/* Name */}
        {/* <h1 className="text-4xl md:text-6xl font-extrabold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Md Al Eamran
        </h1> */}

        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Md Al Eamran
          </span>
          <span className="block text-lg md:text-2xl text-foreground mt-2">
            Full Stack Developer | Next.js | React
          </span>
        </h1>

        {/* Typewriter (CLIENT ISOLATED) */}
        <HeroTypewriter />

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed">
          Full Stack Developer specializing in building scalable, high-performance web applications using Next.js, React, Node.js, and modern backend systems.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">

          <Button
            asChild
            className="relative overflow-hidden rounded-full px-6 group"
          >
            <Link href="/projects">
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />
            </Link>
          </Button>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-full border-white/20 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition"
            >
              Download Resume
            </Button>
          </Link>
        </div>

        {/* Social */}
        <SocialLinks />
      </div>
    </Animated>
  )
}

export default HeroLeft