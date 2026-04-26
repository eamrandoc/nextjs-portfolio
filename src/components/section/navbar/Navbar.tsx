import NavbarLogo from "./NavbarLogo"
import NavLinks from "./NavLinks"
import NavbarActions from "./NavbarActions"
import { getNavLinks } from "@/helper/getLinks"
import { MotionProvider } from "@/providers/MotionProvider"

const Navbar = () => {
  const links = getNavLinks("header")

  return (
    <MotionProvider mode="animate">
      <header className="sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-md">
        {/* gradient line */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavbarLogo />
          <NavLinks links={links} />
          <NavbarActions links={links} />
        </nav>
      </header>
    </MotionProvider>
  )
}
export default Navbar