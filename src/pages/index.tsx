import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import HomeButton from "../components/HomeButton";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-zinc-200 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-zinc-700/90 z-0  ">
      <Header />
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <HomeButton />
    </div>
  );
}
