"use client"

import { useEffect, useState } from "react"

export function useTypewriter(
  words: string[],
  speed = 80,
  deleteSpeed = 40,
  delay = 1200
) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1))

        if (text === current) {
          setTimeout(() => setDeleting(true), delay)
        }
      } else {
        setText(current.slice(0, text.length - 1))

        if (text === "") {
          setDeleting(false)
          setIndex((prev) => prev + 1)
        }
      }
    }, deleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, speed, deleteSpeed, delay])

  return text
}