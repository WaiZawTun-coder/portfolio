"use client";

import { Button } from "@mui/material";
import Image from "next/image";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface projectType {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projectList: projectType[] = [
  {
    id: 1,
    title: "Yukai - Social Media",
    description:
      "A social media platform built with Next.js and PHP allowing users to connect and share content.",
    image: "/project-covers/yukai-logo.png",
    link: "https://yukai-social.vercel.app/",
  },
  //   {
  //     id: 2,
  //     title: "Yukai - Social Media 2",
  //     description:
  //       "A social media platform built with Next.js and PHP allowing users to connect and share content.",
  //     image: "/yukai.png",
  //     link: "https://yukai-social.vercel.app/",
  //   },
];

export default function ProjectsSection() {
  return (
    <div className="px-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop
        grabCursor
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projectList.map((project) => (
          <SwiperSlide key={project.id} className="h-auto">
            <div className="max-w-100 h-full flex flex-col bg-gray-800 pb-6 rounded-lg overflow-hidden">
              <Image
                width={400}
                height={300}
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="flex flex-col items-start justify-center gap-4 px-4">
                <h3 className="text-xl font-bold text-white mt-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-2">{project.description}</p>

                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  className="mt-auto"
                >
                  View Project
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
