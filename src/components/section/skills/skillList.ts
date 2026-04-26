import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiRedis,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiCanva,
  SiFirebase,
  SiPrisma,
} from "react-icons/si";

import { DiCss3 } from "react-icons/di";
import { IconType } from "react-icons";

export type SkillSide =
  | "Frontend"
  | "Backend"
  | "Database"
  | "ORM/ODM"
  | "Tools"
  | "Design";

export type Skill = {
  id: number;
  name: string;
  side: SkillSide;
  icon: IconType;
  color: string;
};

export const skillList: Skill[] = [
  // FRONTEND
  { id: 1, name: "JavaScript", side: "Frontend", icon: SiJavascript, color: "#F7DF1E" },
  { id: 2, name: "TypeScript", side: "Frontend", icon: SiTypescript, color: "#3178C6" },
  { id: 3, name: "React", side: "Frontend", icon: SiReact, color: "#61DAFB" },
  { id: 4, name: "Next.js", side: "Frontend", icon: SiNextdotjs, color: "#000000" },
  { id: 5, name: "HTML", side: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { id: 6, name: "CSS", side: "Frontend", icon: DiCss3, color: "#1572B6" },
  { id: 7, name: "Tailwind CSS", side: "Frontend", icon: SiTailwindcss, color: "#38BDF8" },
  { id: 8, name: "Bootstrap", side: "Frontend", icon: SiBootstrap, color: "#7952B3" },
  { id: 9, name: "Shadcn UI", side: "Frontend", icon: SiShadcnui, color: "#000000" },

  // BACKEND
  { id: 10, name: "Node.js", side: "Backend", icon: SiNodedotjs, color: "#339933" },
  { id: 11, name: "Express", side: "Backend", icon: SiExpress, color: "#000000" },
  { id: 12, name: "Firebase", side: "Backend", icon: SiFirebase, color: "#FFCA28" },

  // DATABASE
  { id: 13, name: "MongoDB", side: "Database", icon: SiMongodb, color: "#47A248" },
  { id: 14, name: "PostgreSQL", side: "Database", icon: SiPostgresql, color: "#336791" },
  { id: 15, name: "MySQL", side: "Database", icon: SiMysql, color: "#4479A1" },
  { id: 16, name: "SQLite", side: "Database", icon: SiSqlite, color: "#003B57" },
  { id: 17, name: "Redis", side: "Database", icon: SiRedis, color: "#DC382D" },

  // ORM / ODM
  { id: 18, name: "Prisma", side: "ORM/ODM", icon: SiPrisma, color: "#2D3748" },

  // TOOLS
  { id: 19, name: "Git", side: "Tools", icon: SiGit, color: "#F05032" },
  { id: 20, name: "GitHub", side: "Tools", icon: SiGithub, color: "#181717" },
  { id: 21, name: "Vercel", side: "Tools", icon: SiVercel, color: "#000000" },

  // DESIGN
  { id: 22, name: "Figma", side: "Design", icon: SiFigma, color: "#F24E1E" },
  { id: 23, name: "Canva", side: "Design", icon: SiCanva, color: "#00C4CC" },
];