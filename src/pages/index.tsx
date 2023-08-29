import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LanguageToggle from "../components/LanguageToggle";
import Experience from "../components/Experience";
import ThemeToggle from "../components/ThemeToggle";
import Toggles from "../components/Toggles";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function Home() {
  return (
    <div className="dark-mode relative z-0 h-screen overflow-x-hidden overflow-y-scroll bg-backgroundLight text-zinc-900 scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-zinc-700/90 dark:bg-backgroundDark dark:text-zinc-200  ">
      <Header />
      <Toggles />
      <Banner />
      <About />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
