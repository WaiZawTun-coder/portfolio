"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "clsx";

// icons
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

// json
import importProjects from "@/public/json/projects.json";

const Projects = () => {
  const projects = importProjects.projects;
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <span className="flex items-center justify-center text-primary">
          View all projects
          <ArrowRightAltIcon />
        </span>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2, centeredSlides: true },
          1024: { slidesPerView: 3, centeredSlides: false },
        }}
        freeMode={false}
        loop={false}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        allowTouchMove={true}
        centeredSlides={true}
        nested
        touchStartPreventDefault={false}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {/* <SwiperSlide></SwiperSlide> */}
        {projects.map((project) => {
          const ref = useRef<HTMLDivElement>(null);
          const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

          useEffect(() => {
            if (!ref.current) return;

            setIsOverflowing(ref.current.scrollWidth > ref.current.clientWidth);
          }, [project?.name]);

          return (
            <SwiperSlide key={project.id} className="h-auto">
              <div className="w-full min-w-0 h-160 rounded-2xl overflow-hidden bg-secondary flex flex-col">
                <div className="relative w-full h-75 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={400}
                    height={300}
                    objectFit="cover"
                  />

                  {/* project tag */}
                  <span className="absolute top-3 left-3 p-2 rounded-xl bg-gray-300 text-black shadow-xl">
                    {project.type}
                  </span>
                </div>

                <div className="px-4 py-2 flex flex-col flex-1 overflow-hidden">
                  {/* project title */}
                  <h2
                    ref={ref}
                    className={clsx(
                      "text-2xl font-bold whitespace-nowrap inline-block",
                      isOverflowing ? "animate-marquee hover:pause" : "",
                    )}
                  >
                    {project.name}
                  </h2>

                  {/* project description */}
                  <p className="text-sm mt-4 text-gray-200">
                    {project.description.length > 300
                      ? `${project.description.slice(0, 300)}...`
                      : project.description}
                  </p>

                  {/* Project Stack */}
                  <div
                    className="flex items-center justify-start gap-4 overflow-x-auto scrollbar-none mt-auto"
                    onTouchStart={() => {
                      if (swiperRef.current === null) return;
                      swiperRef.current.allowTouchMove = false;
                    }}
                    onTouchEnd={() => {
                      if (swiperRef.current === null) return;
                      swiperRef.current.allowTouchMove = true;
                    }}
                  >
                    {project.stack.map((lang) => (
                      <div
                        key={lang}
                        className="w-fit text-sm rounded bg-gray-300 text-black shadow-xl px-2 whitespace-nowrap"
                      >
                        {lang}
                      </div>
                    ))}
                  </div>

                  {/* external links */}
                  <div className="flex items-center justify-start my-4 gap-4">
                    {project.demoLink && (
                      <Link
                        href={project.demoLink}
                        className="flex items-center gap-4 px-2"
                        target="_blank"
                      >
                        <LaunchIcon /> Live Demo
                      </Link>
                    )}
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        className="flex items-center gap-4 px-2"
                        target="_blank"
                      >
                        <GitHubIcon /> GitHub
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
