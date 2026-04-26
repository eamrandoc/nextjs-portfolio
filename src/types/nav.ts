import { IconType } from "react-icons"

export type NavPosition = "header" | "footer"

export interface NavItem {
  label: string
  href: string
  showIn: NavPosition[]
}

export interface SocialItem {
  label: string
  href: string
  icon: IconType
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  email: string
  nav: NavItem[]
  social: SocialItem[]
  seo: {
    title: string
    description: string
    keywords: string[]
    ogImage: string
    twitterHandle: string
  }
}