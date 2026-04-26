import { siteConfig } from "@/config/site";
import { NavItem, NavPosition } from "@/types/nav";

export const getNavLinks = (position: NavPosition): NavItem[] => {
  return siteConfig.nav.filter((item) =>
    item.showIn.includes(position)
  )
}