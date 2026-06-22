import ProjectsSection from "./project-swiper";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-4 md:px-8 py-8 md:py-16"
    >
      <div className="flex flex-col gap-4">
        <p className="text-lg font-bold text-gray-200 md:text-center">
          Projects
        </p>
        <h2 className="text-4xl font-bold text-white md:text-center">
          Things I have built
        </h2>
        <p className="text-sm text-gray-400 md:text-center">
          I have developed a range of projects that reflect my skills and
          experience as a full-stack developer. Here are some of the projects
          that are publicly available.
        </p>
      </div>
      <ProjectsSection />
      {/* <Button
        variant="outlined"
        color="primary"
        sx={{ maxWidth: 250, margin: "0 auto" }}
      >
        View All Projects
      </Button> */}
    </div>
  );
};

export default Projects;
