export type Filter = "all" | "frontend" | "backend" | "fullstack"


export type Project = {
  id: string
  slug: string
  title: string
  description: string
  image: string
  gallery?: string[]
  tech: string[]
  category: "frontend" | "backend" | "fullstack"
  github: string
  live: string
}