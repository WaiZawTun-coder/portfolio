import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface technologicalType {
  id: number;
  name: string;
  image: string;
}

const technologicals: {
  id: number;
  name: string;
  techList: technologicalType[];
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
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16"
    >
      <div className="flex flex-col gap-4 mb-8">
        <p className="text-lg font-bold text-white text-center">Skills</p>
        <h2 className="text-4xl font-bold text-white text-center">
          Technologies I use
        </h2>
      </div>
      {technologicals.map((technological) => (
        <div key={technological.id} className="mb-8">
          <h2 className="text-xl font-bold text-white mb-8 md:text-center">
            {technological.name}
          </h2>
          <div className="h-18 flex items-center justify-center gap-4 flex-wrap">
            {technological.techList.map((tech) => (
              <div
                key={tech.id}
                className="h-18 flex flex-col items-center justify-end gap-2 min-w-14"
              >
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={36}
                  height={36}
                  className="min-w-9 min-h-9 object-contain"
                />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Swiper */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        spaceBetween={20}
        allowTouchMove={false}
      >
        {technologicals.map((tech) =>
          tech.techList.map((techName) => (
            <SwiperSlide key={techName.id} style={{ width: "auto" }}>
              <div className="flex gap-4 items-center p-2 rounded-full">
                <Image
                  src={techName.image}
                  alt={techName.name}
                  width={36}
                  height={36}
                  className="min-w-9 min-h-9 object-contain"
                />
                {techName.name}
              </div>
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </section>
  );
};

export default Skills;
