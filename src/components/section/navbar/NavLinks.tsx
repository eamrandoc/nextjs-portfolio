import Link from "next/link"
import Animated from "@/components/motion/Animated"

type NavLink = {
  label: string
  href: string
}

type Props = {
  links: NavLink[]
}

export default function NavLinks({ links }: Props) {
  return (

    <div className="hidden md:flex items-center gap-8">
      {links.map((link, i) => (
        <Animated
          key={link.href}
          delay={i * 0.05}
          hover
        >
          <Link
            href={link.href}
            className="group relative text-base font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {link.label}
            {/* ✨ hover underline */}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        </Animated>
      ))
      }
    </div >
  )
}
