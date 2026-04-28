import Animated from "@/components/motion/Animated"
import AnimatedGroup from "@/components/motion/AnimatedGroup"

type Section = {
  title: string
  items: {
    title: string
    subtitle?: string
    description?: string
  }[]
}


const sections: Section[] = [
  {
    title: "Education",
    items: [
      {
        title: "BSc in Forestry — Khulna University",
        subtitle: "2008 - 2013",
        description:
          "Completed Bachelor's degree with leadership experience as Class Representative (CR).",
      },
      {
        title: "HSC — Govt. Sundarban College",
        subtitle: "2006",
        description:
          "Completed Higher Secondary Certificate (Science group), building a strong foundation in science and analytical thinking."
      },
      {
        title: "SSC — Khulna Zila School",
        subtitle: "2004",
         description:
          "Completed Secondary School Certificate with a focus on science and mathematics, developing core academic discipline." 
      },
    ],
  },
  {
    title: "Experience",
    items: [
      {
        title: "Government Service — BRRI",
        subtitle: "Official Role",
        description:
          "Working in a government organization with responsibilities involving data handling and system operations.",
      },
      {
        title: "Full Stack Developer",
        subtitle: "Personal Projects",
        description:
          "Built scalable MERN & Next.js applications including Digital Wallet System and Portfolio.",
      },
    ],
  },
]

export default function AboutRight() {
  return (
    <AnimatedGroup className="space-y-6">
      {sections.map((section, i) => (
        <Animated key={section.title}variant="fadeLeft" delay={i * 0.2} hover>
          <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg space-y-4 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]">
<div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 blur-xl opacity-0 hover:opacity-100 transition" />

            <h3 className="text-xl font-semibold ">
              {section.title}
            </h3>

            <div className="space-y-4">
              {section.items.map((item, idx) => (
                <div key={idx}>
                  <p className="font-medium">{item.title}</p>
                  {item.subtitle && (
                    <p className="text-xs text-muted-foreground">
                      {item.subtitle}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </Animated>
      ))}
    </AnimatedGroup>
  )
}