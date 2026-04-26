import Footer from "@/components/section/footer/Footer";
import Navbar from "@/components/section/navbar/Navbar";
import About from "@/components/section/about/About";
import Hero from "@/components/section/hero/Hero";
import Projects from "@/components/section/projects/Projects";
import Contact from "@/components/section/contact/Contact";
import Skills from "@/components/section/skills/Skills";


export default function HomePage() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
