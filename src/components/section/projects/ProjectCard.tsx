import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { Project } from "@/types/project"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border bg-background/60 backdrop-blur-xl shadow-xl transition hover:scale-[1.02]">

      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-t from-black/70 to-transparent" />
      </div>

      <CardContent className="p-6 space-y-4 relative z-10">

        {/* TITLE + DESCRIPTION */}
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition">
            {project.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="text-xs">
              {t}
            </Badge>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-3 pt-2">
          <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-1" size={16} />
              Code
            </a>
          </Button>

          {project.live && (
            <Button asChild size="sm" variant="secondary">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1" size={16} />
                Live
              </a>
            </Button>
          )}
        </div>

        {/* DETAILS LINK */}
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm text-primary hover:underline inline-block"
        >
          View Details →
        </Link>

      </CardContent>

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 bg-linear-to-r from-primary via-purple-500 to-pink-500 blur-2xl transition" />
    </Card>
  )
}