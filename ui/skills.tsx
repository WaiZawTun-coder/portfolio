import { SvgIconProps } from "@mui/material";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// icons
import HandymanIcon from "@mui/icons-material/Handyman";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import SensorWindowIcon from "@mui/icons-material/SensorWindow";
import StorageIcon from "@mui/icons-material/Storage";

interface technologicalType {
  id: number;
  name: string;
  image: string;
}

const technologicals: {
  id: number;
  name: string;
  techList: technologicalType[];
  icon: React.ComponentType<SvgIconProps>;
}[] = [
  {
    id: 1,
    name: "Frontend",
    techList: [
      {
        id: 1,
        name: "Next.js",
        image: "/skill-logos/next-js.svg",
      },
      {
        id: 2,
        name: "React",
        image: "/skill-logos/react-js.svg",
      },
      {
        id: 3,
        name: "Typescript",
        image: "/skill-logos/typescript.png",
      },
      {
        id: 4,
        name: "Tailwind",
        image: "/skill-logos/tailwind.png",
      },
      {
        id: 5,
        name: "Bootstrap",
        image: "/skill-logos/bootstrap.png",
      },
    ],
    icon: PersonalVideoIcon,
  },
  {
    id: 2,
    name: "Backend",
    techList: [
      {
        id: 1,
        name: "Spring Boot",
        image: "/skill-logos/spring-boot.svg",
      },
      {
        id: 2,
        name: "Laravel",
        image: "/skill-logos/laravel.png",
      },
      {
        id: 3,
        name: "Node.js",
        image: "/skill-logos/node-js.png",
      },
    ],
    icon: SensorWindowIcon,
  },
  {
    id: 3,
    name: "Database",
    techList: [
      {
        id: 1,
        name: "PostgreSQL",
        image: "/skill-logos/postgreSQL.png",
      },
      {
        id: 2,
        name: "MySQL",
        image: "/skill-logos/mysql.png",
      },
    ],
    icon: StorageIcon,
  },
  {
    id: 4,
    name: "Tools & Others",
    techList: [
      { id: 1, name: "Git & GitHub", image: "/skill-logos/git.png" },
      { id: 2, name: "Postman", image: "/skill-logos/postman.png" },
      { id: 3, name: "Figma", image: "/skill-logos/figma.png" },
    ],
    icon: HandymanIcon,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16"
    >
      {/* <SkillsSwiper /> */}
      <Swiper
        modules={[Pagination, Autoplay, FreeMode]}
        pagination={{ clickable: true }}
        grabCursor
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        freeMode={true}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        allowTouchMove={false}
      >
        {technologicals.map((technology) => {
          const Icon = technology.icon;

          return (
            <SwiperSlide key={technology.id} className="h-full min-h-50">
              <div className="border border-primary rounded-2xl p-5 flex items-start gap-4 min-w-0 min-h-40">
                {/* Icon */}
                <div className="shrink-0">
                  <Icon color="primary" sx={{ fontSize: 36 }} />
                </div>

                {/* Content */}
                <div className="ml-4 flex-1 flex flex-col justify-start min-w-0">
                  <h2 className="text-white font-semibold text-lg">
                    {technology.name}
                  </h2>

                  <ul className="text-sm text-gray-300 mt-2 space-y-1 wrap-break-word">
                    {technology.techList.map((tech) => (
                      <li key={tech.id} className="list-disc">
                        {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Skills;
