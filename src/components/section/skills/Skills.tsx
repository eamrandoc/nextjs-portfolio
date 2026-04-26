import Animated from "@/components/motion/Animated";
import SkillsFilter from "./SkillsFilter";

const Skills = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* HEADER */}
        <Animated variant="fadeUp">
          <div className="text-center space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>

            <p className="text-muted-foreground">
              Technologies I use to build scalable, modern, and high-performance applications.
            </p>
          </div>
        </Animated>

        <SkillsFilter />

      </div>
    </section>
  );
};

export default Skills;