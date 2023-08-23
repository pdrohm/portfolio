import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LanguageToggle from "../components/LanguageToggle";
import Teste from "@/components/Teste";

export default function Home() {
  return (
    <div className="relative bg-background text-zinc-200 h-screen overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-zinc-700/90 z-0  ">
      <Header />
      <LanguageToggle />
      <Banner />
      <About />
      <Experience />
      <Teste />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
