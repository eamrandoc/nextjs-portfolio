import { Project } from "@/types/project"

export const projectData: Project[] = [
  {
    id: "1",
    slug: "digital-wallet-system",
    title: "Digital Wallet System",
    description: "Full-stack wallet system with transactions & roles.",
    image: "https://tse3.mm.bing.net/th/id/OIP.BRnipO7lEwByukxzRr_xggHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    gallery: ["/projects/w1.png", "/projects/w2.png"],
    tech: ["Next.js", "Node.js", "MongoDB"],
    category: "fullstack",
    github: "https://github.com",
    live: "https://live.com",
  },

  {
    id: "2",
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern portfolio with animations and CMS-ready design.",
    image: "https://tse3.mm.bing.net/th/id/OIP.BRnipO7lEwByukxzRr_xggHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    gallery: ["/projects/p1.png", "/projects/p2.png"],
    tech: ["Next.js", "Tailwind"],
    category: "frontend",
    github: "https://github.com",
    live: "https://live.com",
  },

  {
    id: "3",
    slug: "rest-api-server",
    title: "REST API Server",
    description: "Scalable backend API with authentication & RBAC.",
    image: "https://tse3.mm.bing.net/th/id/OIP.BRnipO7lEwByukxzRr_xggHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    gallery: [],
    tech: ["Node.js", "Express", "PostgreSQL"],
    category: "backend",
    github: "https://github.com",
    live: "",
  },
]