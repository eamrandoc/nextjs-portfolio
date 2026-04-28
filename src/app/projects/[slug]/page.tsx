import { projectData } from "@/data/projects"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projectData.find((p) => p.slug === slug)

  if (!project) return notFound()

  return (
    <section className="max-w-5xl mx-auto py-20 px-6 space-y-10">

      {/* HEADER CARD */}
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold">
            {project.title}
          </CardTitle>

          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="rounded-xl object-cover"
          />
        </CardHeader>

        <CardContent className="space-y-6">

          {/* DESCRIPTION */}
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <Separator />

          {/* TECH STACK */}
          <div>
            <h3 className="font-semibold mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* LINKS */}
          <div className="flex gap-3 flex-wrap">
            <Button asChild variant="outline">
              <a href={project.github} target="_blank">
                GitHub
              </a>
            </Button>

            {project.live && (
              <Button asChild>
                <a href={project.live} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Site
                </a>
              </Button>
            )}
          </div>

        </CardContent>
      </Card>

      {/* CHALLENGES */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Challenges</CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            {project.challenges?.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* FUTURE IMPROVEMENTS */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">
            Future Improvements
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
            {project.future?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

    </section>
  )
}