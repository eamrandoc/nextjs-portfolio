import { SiteConfig } from "@/types/nav";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";


export const siteConfig: SiteConfig = {
    name: "Eamran.dev",
    description:
        "Building modern, scalable web experiences with clean UI & strong backend systems.",
    url: "https://yourdomain.com",
    email: "eamrandoc@gmail.com",

    // -----------------------
    // NAVIGATION (Navbar + Footer)
    // -----------------------
    nav: [
        {
            label: "Home",
            href: "/",
            showIn: ["header", "footer"],
        },
        {
            label: "Projects",
            href: "#projects",
            showIn: ["header", "footer"],
        },
        {
            label: "About",
            href: "#about",
            showIn: ["header", "footer"],
        },
        {
            label: "Contact",
            href: "#contact",
            showIn: ["header", "footer"],
        },
    ],

    // -----------------------
    // SOCIAL LINKS
    // -----------------------
    social: [
        {
            label: "GitHub",
            href: "https://github.com/eamrandoc",
            icon: FaGithub,
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/eamran",
            icon: FaLinkedin,
        },
        {
            label: "Facebook",
            href: "https://www.facebook.com/only.zibon",
            icon: FaFacebook,
        },
        {
            label: "Email",
            href: "mailto:eamrandoc@gmail.com",
            icon: FaEnvelope,
        }
    ],

    // -----------------------
    // SEO
    // -----------------------
    seo: {
        title: "Eamran.dev - Full Stack Developer",
        description:
            "Portfolio of a full-stack developer specializing in Next.js, React, and backend systems.",
        keywords: [
            "developer",
            "portfolio",
            "nextjs",
            "react",
            "full stack",
            "web development",
        ],
        ogImage: "/og-image.png",
        twitterHandle: "@yourhandle",
    },
};