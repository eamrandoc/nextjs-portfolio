export function resolveMotionMode() {
  if (typeof window === "undefined") {
    return { mode: "view" }
  }

  // 🧠 Detect Radix / shadcn dialog (Sheet, Modal)
  const isDialog = !!document.querySelector("[data-radix-dialog-content]")

  // 🧠 Detect Navbar
  const isNavbar = !!document.querySelector("header")

  // 🧠 Detect if element is near top (above fold)
  const isAboveFold = window.scrollY < 50

  // -------------------------
  // RULE ENGINE
  // -------------------------

  if (isDialog) {
    return { mode: "animate" }
  }

  if (isNavbar && isAboveFold) {
    return { mode: "animate" }
  }

  return { mode: "view" }
}