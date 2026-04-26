import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// ✅ simple email validator
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

// ✅ basic rate limit (memory-based)
let lastRequestTime = 0

export async function POST(req: Request) {
  try {
    // -------------------------
    // RATE LIMIT (5s gap)
    // -------------------------
    const now = Date.now()
    if (now - lastRequestTime < 5000) {
      return NextResponse.json(
        { success: false, message: "Too many requests" },
        { status: 429 }
      )
    }
    lastRequestTime = now

    // -------------------------
    // PARSE BODY
    // -------------------------
    const body = await req.json()
    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim()
    const message = String(body.message || "").trim()

    // -------------------------
    // VALIDATION
    // -------------------------
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      )
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { success: false, message: "Message too long" },
        { status: 400 }
      )
    }

    // -------------------------
    // ENV CHECK
    // -------------------------
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("Email config missing")
    }

    // -------------------------
    // TRANSPORTER
    // -------------------------
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // -------------------------
    // SEND EMAIL
    // -------------------------
    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("EMAIL ERROR:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    )
  }
}