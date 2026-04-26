import Link from "next/link"
import Animated from "@/components/motion/Animated"

const NavbarLogo = () => {
  return (
    <Animated variant="fadeUp">
      <div>
        <Link
          href="/"
          className="block font-bold text-lg bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Eamran
        </Link>
      </div>
    </Animated>
  )
}

export default NavbarLogo