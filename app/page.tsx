"use client";

import About from "@/ui/about";
import Collab from "@/ui/collab";
import Hero from "@/ui/hero";
import Projects from "@/ui/projects";
import Skills from "@/ui/skills";
import Achievements from "@/ui/achievements";
import Timeline from "@/ui/timeline";
import TechStack from "@/ui/tech-stack";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Achievements />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <TechStack />
      <Collab />
    </div>
  );
};

export default Home;
