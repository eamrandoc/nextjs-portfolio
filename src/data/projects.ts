import { Project } from "@/types/project"

export const projectData: Project[] = [
  {
    id: "1",
    slug: "digital-wallet-system",
    title: "Digital Wallet System",
    description: "Full-stack wallet system with transactions & roles.",
    image: "/projects/wallet-mockup.png",
    gallery: ["/projects/w1.png", "/projects/w2.png"],
    tech: ["Next.js", "Node.js", "MongoDB"],
    category: "fullstack",
    github: "https://github.com/eamrandoc/nexlib",
    live: "https://live.com",
    challenges: [
      "Handling complex transaction logic",
      "Ensuring secure authentication",
    ],
    future: [
      "Add mobile app version",
      "Integrate payment gateway",
    ],
  },

  {
    id: "2",
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Modern portfolio with animations and CMS-ready design.",
    image: "/projects/portfolio-mockup.png",
    gallery: ["/projects/p1.png", "/projects/p2.png"],
    tech: ["Next.js", "Tailwind"],
    category: "frontend",
    github: "https://github.com/eamrandoc/nextjs-portfolio",
    live: "https://live.com",
    challenges: [
      "Creating smooth animations without performance issues",
      "Designing a responsive layout for all devices",
    ],
    future: [
      "Add blog section with CMS",
      "Improve SEO and performance optimization",
    ],
  },

  {
    id: "3",
    slug: "rest-api-server",
    title: "REST API Server",
    description: "Scalable backend API with authentication & RBAC.",
    image: "/projects/api-mockup.png",
    gallery: [],
    tech: ["Node.js", "Express", "PostgreSQL"],
    category: "backend",
    github: "https://github.com/eamrandoc/tour-managemet-system-backend",
    live: "",
    challenges: [
      "Implementing role-based access control (RBAC)",
      "Securing API endpoints and managing tokens",
    ],
    future: [
      "Add API rate limiting and caching",
      "Write full test coverage",
    ],
  },
]