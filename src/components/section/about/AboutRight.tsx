import Animated from "@/components/motion/Animated"
import AnimatedGroup from "@/components/motion/AnimatedGroup"

interface Section {
  title: string
  items: string[]
}

const sections: Section[] = [
  {
    title: "Education",
    items: [
      "🎓 Khulna University — BSc (Hons), Batch 2013",
      "🏫 Govt. Sundarban College — HSC, 2006",
      "🏫 Khulna Zila School — SSC, 2004",
    ],
  },
  {
    title: "Experience",
    items: [
      "🏢 BRRI — Government Service",
      "💻 Full Stack Developer — Personal Projects",
      "🚀 MERN & Next.js Applications",
    ],
  },
  {
    title: "Courses",
    items: [
      "📘 Programming Hero — Level 1",
      "📘 Next Level Web Development",
    ],
  },
]

export default function AboutRight() {
  return (
    <AnimatedGroup className="space-y-6">
      {sections.map((section, i) => (
        <Animated key={section.title} variant="fadeLeft" delay={i * 0.1} hover>
          <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]">

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 hover:opacity-100 transition" />

            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-3">
                {section.title}
              </h3>

              <ul className="space-y-2 text-muted-foreground font-medium text-sm">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Animated>
      ))}
    </AnimatedGroup>
  )
}