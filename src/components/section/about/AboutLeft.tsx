import Animated from "@/components/motion/Animated"

export default function AboutLeft() {
  return (
    <Animated variant="fadeRight">
      <div className="relative p-8 md:p-10 rounded-3xl border border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.25)] space-y-6">

        {/* Glow layer */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 blur-2xl opacity-50" />

        <div className="relative z-10 space-y-5">
          <h3 className="text-2xl font-semibold">
            Professional Overview
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Full Stack Web Developer specializing in React, Next.js, Node.js, and PostgreSQL. I focus on building scalable web applications and REST APIs with clean architecture and performance optimization.
          </p>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>📍 Location: Khulna, Bangladesh</p>
            <p>💼 Role: Full Stack Developer</p>
            <p>🏢 Experience: Government Service (BRRI)</p>
          </div>
        </div>
      </div>
    </Animated>
  )
}