export type Filter = "all" | "frontend" | "backend" | "fullstack"

export type Project = {
  id: string
  slug: string
  title: string
  description: string
  image: string
  gallery?: string[]
  tech: string[]
  category: Filter extends "all" ? never : Filter
  github: string
  live?: string

  // optional but recommended
  challenges?: string[]
  future?: string[]
}