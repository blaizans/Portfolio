import Seo from "@/components/Seo";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Toolset from "@/components/Toolset";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <Seo />

      <Nav />

      <main id="main">
        {/* Order follows the reader's questions: who and what (Hero), proof
            (Work), verifiable history (Experience), depth (Capabilities,
            Toolset), the person (About), then the ask (Contact). Zone tones
            alternate so no two dark or two light bands touch. */}
        <Hero />
        <Work />
        <Experience />
        <Capabilities />
        <Toolset />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
