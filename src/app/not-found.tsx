"use client"

import Link from "next/link"
import { motion } from "framer-motion"


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center space-y-8 max-w-xl">

        {/* 404 TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold bg-linear-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          404
        </motion.h1>

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold"
        >
           Oops! This page doesn’t exist
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
         The page you’re looking for might have been removed or moved.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          <Link
            href="/"
            className="px-6 py-2 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            Go Home
          </Link>

          <Link
            href="#contact"
            className="px-6 py-2 rounded-full border hover:bg-white/10 transition"
          >
            View Projects
          </Link>
        </motion.div>

      </div>

    </div>
  )
}
