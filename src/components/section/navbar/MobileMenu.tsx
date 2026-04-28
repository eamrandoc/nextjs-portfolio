"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Animated from "@/components/motion/Animated"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { SheetTitle } from "@/components/ui/sheet"
import { useState } from "react"

type NavLink = {
  label: string
  href: string
}

type Props = {
  links: NavLink[]
}

const MobileMenu = ({ links }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" aria-label="Open menu">
            <Menu size={18} />
          </Button>
        </SheetTrigger>

        <SheetContent className="bg-background/95 backdrop-blur-xl border-border">

          {/* ✅ Accessibility fix */}
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>

          <div className="flex flex-col gap-3 mt-10">
            {links.map((link, i) => (
              <Animated
                key={link.href}
                variant="fadeLeft"
                delay={i * 0.05}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block w-full px-4 py-3 text-lg font-medium text-foreground/80 rounded-xl hover:bg-muted/60 hover:text-primary transition-all duration-300"
                >
                  {link.label}
                </Link>
              </Animated>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu