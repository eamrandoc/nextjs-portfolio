import Animated from "@/components/motion/Animated"
import ProjectsFilter from './ProjectsFilter';

const Projects = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <Animated variant="fadeUp">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-semibold">
              Full Stack Projects
            </h2>
            <p className="text-muted-foreground">
              Real-world applications built with Next.js, React, Node.js, and modern web technologies.
            </p>
          </div>

        </Animated>
        <ProjectsFilter />
      </div>
    </section>
  );
};

export default Projects;