import { Button } from "@mui/material";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 px-4 md:px-8 py-16"
      id="home"
    >
      {/* image */}
      <div className="flex items-center justify-center order-1 md:order-2">
        <Image
          width={256}
          height={256}
          src="/profile.jpg"
          alt="Profile Picture"
          className="rounded-full w-64 h-64 object-cover"
          loading="eager"
          priority
        />
      </div>
      {/* introduction */}
      <div className="flex flex-col gap-4 order-2 md:order-1">
        <p className="text-lg text-gray-200">Hi, I&apos;m</p>
        <h1 className="text-4xl font-bold text-white">Wai Zaw Tun</h1>
        <p className="text-lg text-gary-400">I build web applications.</p>
        <p className="text-sm text-gray-400">
          I&apos;m a full-stack developer specializing in building scalable and
          performant web applications using Next.js, TypeScript, Spring Boot,
          and Laravel.
        </p>
        {/* CTA Button */}
        <div className="flex gap-4 mt-4 w-full md:w-auto md:max-w-sm">
          {/* view projects */}
          <Button
            variant="contained"
            color="primary"
            href="#projects"
            sx={{
              width: "50%",
            }}
          >
            View Projects
          </Button>

          {/* Resume Button */}
          <Button
            className="mx-5 md:mx-0 px-5 py-2 md:w-auto cursor-pointer rounded-md text-white hover:text-gray-300 transition-colors transition-background duration-300"
            variant="outlined"
            color="inherit"
            sx={{ width: "50%" }}
            onClick={() => {
              window.open("/cv-form/Wai_Zaw_Tun.pdf", "_blank");
            }}
          >
            View Resume
          </Button>
        </div>
        {/* social media links with icons */}
        <div className="flex gap-4 mt-6">
          {/* linkedin */}
          <Button
            variant="text"
            color="inherit"
            href="https://www.linkedin.com/in/wai-zaw-tun-457295362"
            target="_blank"
            sx={{ minWidth: "auto", padding: "10px" }}
          >
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={36}
              height={36}
            />
          </Button>

          {/* github */}
          <Button
            variant="text"
            color="inherit"
            href="https://github.com/WaiZawTun-coder"
            target="_blank"
            sx={{ minWidth: "auto", padding: "10px" }}
          >
            <Image
              src="/icons/github.png"
              alt="Github"
              width={36}
              height={36}
            />
          </Button>

          {/* viber */}
          <Button
            variant="text"
            color="inherit"
            href="viber://chat?number=%2B959760893129"
            target="_blank"
            sx={{ minWidth: "auto", padding: "10px" }}
          >
            <Image src="/icons/viber.png" alt="Viber" width={36} height={36} />
          </Button>

          {/* telegram */}
          <Button
            variant="text"
            color="inherit"
            href="https://t.me/waiawtun_0214"
            target="_blank"
            sx={{ minWidth: "auto", padding: "10px" }}
          >
            <Image
              src="/icons/telegram.png"
              alt="Telegram"
              width={36}
              height={36}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
