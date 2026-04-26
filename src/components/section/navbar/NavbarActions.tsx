import { Button } from "@/components/ui/button"
import MobileMenu from "./MobileMenu"
import Link from "next/link"
import Animated from "@/components/motion/Animated"
import ModeToggle from "@/components/ui/ModeToggle"

type Props = {
  links: { label: string; href: string }[]
}

const NavbarActions = ({ links }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <Animated variant="scaleIn">
        <Button
          asChild
          size="sm"
          className="rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white hover:opacity-90"
        >
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </Button>
      </Animated>

      {/* ✅ KEEP stable */}
      <ModeToggle />

      {/* ✅ KEEP stable */}
      <MobileMenu links={links} />
    </div>
  )
}

export default NavbarActions