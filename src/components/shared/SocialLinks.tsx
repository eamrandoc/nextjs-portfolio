import Link from "next/link"
import { siteConfig } from "@/config/site"

const SocialLinks = () => {
  return (
    <div>
      <h3 className="font-semibold mb-3">Connect</h3>

      <div className="flex gap-4">
        {siteConfig.social.map(({ label, href, icon: Icon }) => {
          const isExternal =
            href.startsWith("http") || href.startsWith("mailto:")

          return (
            <Link
              key={href}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition transform hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <Icon size={18} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SocialLinks