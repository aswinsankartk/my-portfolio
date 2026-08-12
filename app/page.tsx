import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Backtotop from "@/components/Backtotop";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aswin Sankar TK",
    alternateName: "Aswin Sankar",
    url: "https://aswinsankartk.vercel.app/",
  };
  return (
    <main className="overflow-hidden selection:bg-blue-500">
      <Navbar />
      <Backtotop />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
