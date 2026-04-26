import AboutLeft from "./AboutLeft"
import AboutRight from "./AboutRight"
import Animated from "@/components/motion/Animated"

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* 🌈 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-10 w-72 h-72 bg-purple-500/20 blur-xl rounded-full" />
        <div className="absolute right-10 bottom-10 w-72 h-72 bg-blue-500/20 blur-xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <Animated variant="fadeUp">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            About Me
          </h2>
        </Animated>

        <Animated variant="fadeUp" delay={0.1}>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Full Stack Developer specializing in Next.js, React, Node.js, and scalable backend systems. I build high-performance, user-friendly web applications with clean architecture.
          </p>
        </Animated>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <AboutLeft />
        <AboutRight />
      </div>
    </section>
  )
}