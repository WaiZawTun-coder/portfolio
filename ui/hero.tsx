import { Button } from "@mui/material";
import Image from "next/image";

// icons
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  return (
    <section
      className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center place-items-center mt-10 px-4 lg:px-8 py-16"
      id="home"
    >
      <div className="flex flex-col items-start justify-center gap-4">
        <span className="text-primary font-bold">FULL STACK DEVELOPER</span>
        <h1 className="text-3xl font-bold">
          Hi, I&apos;m Wai Zaw Tun, Full-Stack Developer building{" "}
          <span className="text-primary">scalable</span> web applications.
        </h1>
        <small className="text-gray-400">
          I build modern, fast and scalabe web applications using{" "}
          <span className="font-bold">Next.js</span>,{" "}
          <span className="font-bold">TypeScript</span>,{" "}
          <span className="font-bold">Spring Boot</span> and other technologies.
        </small>

        {/* CTA buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Button
            variant="contained"
            color="primary"
            href="#projects"
            target="_self"
          >
            <div className="flex items-center gap-2">
              View Projects <ArrowRightAltIcon />
            </div>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="mailto:waizawtun.coder@gmail.com"
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <EmailIcon />
              Contact Me
            </div>
          </Button>
        </div>

        {/* contact link */}
        <div className="flex items-center justify-start gap-2">
          <span>Let&apos;s connect:</span>
          <div className="flex items-center gap-2">
            {/* github */}
            <Button
              variant="contained"
              color="secondary"
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
            {/* linkedin */}
            <Button
              variant="contained"
              color="secondary"
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
            {/* Mail */}
            <Button
              variant="contained"
              color="secondary"
              href="mailto:waizawtun.coder@gmail.com"
              target="_blank"
              sx={{ minWidth: "auto", padding: "10px" }}
            >
              <Image src="/icons/mail.png" alt="Mail" width={36} height={36} />
            </Button>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="relative flex items-baseline justify-center order-1 lg:order-2 max-w-116">
        <div className="absolute top-4 -left-10 w-36 h-36 bg-[radial-gradient(circle,#ff6b00_2px,transparent_2px)] bg-size-[16px_16px] -z-10" />
        <Image
          width={256}
          height={256}
          src="/profile.jpg"
          alt="Profile Picture"
          className="rounded-xl w-64 h-64 object-cover"
          loading="eager"
          priority
        />
        <div className="relative w-8 h-32 rounded-r-lg bg-primary overflow-hidden">
          <div className="absolute -left-4 top-2 w-12 h-1 bg-white/20 -rotate-45" />
          <div className="absolute -left-2 top-8 w-20 h-1 bg-white/15 -rotate-45" />
          <div className="absolute left-1 top-14 w-10 h-1 bg-white/25 -rotate-45" />
          <div className="absolute -left-3 top-20 w-16 h-1 bg-white/10 -rotate-45" />
          <div className="absolute left-2 top-26 w-14 h-1 bg-white/20 -rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
