import Link from "next/link"
import SocialLinks from "@/components/shared/SocialLinks"
import { siteConfig } from "@/config/site"
import { getNavLinks } from "@/helper/getLinks"
import Animated from "@/components/motion/Animated"
import AnimatedGroup from "@/components/motion/AnimatedGroup"

const Footer = () => {
  const footerLinks = getNavLinks("footer")

  return (
    <footer className="mt-32 border-t bg-background/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">


        {/* TOP */}
        <AnimatedGroup className="grid md:grid-cols-3 gap-10">

          {/* BRAND */}
          <Animated variant="fadeUp">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {siteConfig.name}
              </h2>

              <p className="text-sm text-muted-foreground">
                {siteConfig.description}
              </p>
            </div>
          </Animated>

          {/* NAV */}
          <Animated variant="fadeUp" delay={0.1}>
            <div className="flex flex-col gap-2 text-sm">
              <h3 className="font-semibold mb-2">Navigation</h3>

              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-primary hover:translate-x-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Animated>

          {/* SOCIAL */}
          <Animated variant="fadeUp" delay={0.2}>
            <div className="space-y-3">
              <SocialLinks />
            </div>
          </Animated>

        </AnimatedGroup>

        {/* DIVIDER */}
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />


        {/* BOTTOM */}
          <div className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name} Built with Next.js. All rights reserved.
          </div>
        
        
      </div>
    </footer>
  )
}

export default Footer