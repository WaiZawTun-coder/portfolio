"use client";

import About from "@/ui/about";
import Collab from "@/ui/collab";
import Hero from "@/ui/hero";
import Projects from "@/ui/projects";
import Skills from "@/ui/skills";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Collab />
    </div>
  );
};

export default Home;
