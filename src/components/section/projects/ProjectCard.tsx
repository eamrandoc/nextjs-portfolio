import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { Project } from "@/types/project"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border bg-background/60 backdrop-blur-xl shadow-xl transition hover:scale-[1.02]">

      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-t from-black/70 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">

        <h3 className="text-xl font-semibold group-hover:text-primary transition">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border bg-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-4 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm hover:text-primary"
          >
            <FaGithub size={16} />
            Code
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm hover:text-purple-400"
            >
              <ExternalLink size={16} />
              Live
            </a>
          )}
        </div>

      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-r from-primary via-purple-500 to-pink-500 blur-2xl transition duration-500" />

    </div>
  )
}