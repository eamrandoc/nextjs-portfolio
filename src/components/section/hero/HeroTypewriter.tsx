"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter"

export default function HeroTypewriter() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Software Engineer",
      "Backend Engineer",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <h2 className="text-xl md:text-2xl text-muted-foreground flex items-center gap-1">
      {text}
      <Cursor cursorStyle="|" />
    </h2>
  )
}