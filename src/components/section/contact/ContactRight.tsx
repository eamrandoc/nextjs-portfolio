"use client"

import { useState } from "react"
import Animated from "@/components/motion/Animated"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

export default function ContactRight() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (loading) return

    setLoading(true)
    setStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = String(formData.get("name") || "")
    const email = String(formData.get("email") || "")
    const message = String(formData.get("message") || "")

    if (!name || !email || !message || !isValidEmail(email)) {
      setStatus("error")
      setLoading(false)
      return
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Animated variant="fadeRight">
      <form
        aria-label="Contact form"
        onSubmit={handleSubmit}
        noValidate
        className="p-6 rounded-2xl border bg-background/60 backdrop-blur-xl space-y-4 shadow-xl"
      >

        <Input
          name="name"
          placeholder="Your Name"
          required
        />

        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          required
        />

        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
        />

        {/* STATUS */}
        {status === "success" && (
          <p className="text-green-500 text-sm">
            Thanks! Your message has been sent 🚀
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-sm">
            Something went wrong ❌
          </p>
        )}

        {/* BUTTON */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full rounded-full"
        >
          {loading ? "Sending message..." : "Send Message"}
        </Button>

      </form>
    </Animated>
  )
}

