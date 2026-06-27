import techStack from "@/app/json/tech-stack.json";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
        Tech Stack
      </h2>
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
        {techStack.map((tech) =>
          tech.techList.map((stack) => (
            <SwiperSlide key={stack.id} style={{ width: "auto" }}>
              <div className="flex gap-4 items-center p-2 rounded-full">
                <Image
                  src={stack.image}
                  alt={stack.name}
                  width={36}
                  height={36}
                  className="min-w-9 min-h-9 object-contain"
                />
                {stack.name}
              </div>
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </section>
  );
};

export default TechStack;
