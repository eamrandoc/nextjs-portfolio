import ContactLeft from "./ContactLeft"
import ContactRight from "./ContactRight"
import Animated from "@/components/motion/Animated"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 border-t bg-linear-to-b from-transparent to-muted/30"
    >
      <div className="max-w-6xl mx-auto space-y-12">

        {/* HEADER */}
        <Animated variant="fadeUp">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-semibold">
              Contact
            </h2>
            <p className="text-muted-foreground">
              Let’s build something amazing together
            </p>
          </div>
        </Animated>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ContactLeft />
          <ContactRight />
        </div>

      </div>
    </section>
  )
}