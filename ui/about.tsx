import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-8 py-8 md:py-16"
    >
      {/* image */}
      <div className="flex items-center justify-center order-1">
        <Image
          width={360}
          height={256}
          src="/about.jpg"
          alt="About Picture"
          className="w-90 h-64 object-cover"
        />
      </div>

      {/* content */}
      <div className="flex flex-col gap-4 order-2">
        <p className="text-lg font-bold text-gray-200">About Me</p>
        <h2 className="text-4xl font-bold text-white">Get to know me</h2>
        <p className="text-sm text-gray-400">
          I&apos;m a passionate full-stack developer with a strong foundation in
          both frontend and backend technologies. I enjoy creating efficient,
          scalable, and user-friendly web applications.
        </p>
      </div>
    </section>
  );
};

export default About;
