"use client"

import { useState } from "react"
import Animated from "@/components/motion/Animated"
import AnimatedGroup from "@/components/motion/AnimatedGroup"
import { projectData } from "@/data/projects"
import ProjectCard from "./ProjectCard"
import { Filter } from "@/types/project"

export default function ProjectsFilter() {
  const filterData: Filter[] = ["all", "frontend", "backend", "fullstack"]
  const [filter, setFilter] = useState<Filter>("all")

  const filtered =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.category === filter)

  return (
    <>
      {/* FILTER */}
      <Animated variant="fadeUp" delay={0.1}>
        <div className="flex justify-center gap-3 flex-wrap">
          {filterData.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-full border text-sm transition-all
                ${
                  filter === item
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background hover:bg-muted border-border"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </Animated>

      {/* GRID */}
      <AnimatedGroup className="grid md:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <Animated key={project.id} variant="scaleIn" delay={i * 0.05}>
            <ProjectCard project={project} />
          </Animated>
        ))}
      </AnimatedGroup>
    </>
  )
}