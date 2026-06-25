import Image from "next/image";

// icons
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import EmailIcon from "@mui/icons-material/Email";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DownloadIcon from "@mui/icons-material/Download";

const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 items-center px-4 md:px-8 py-8 md:py-16"
    >
      {/* image */}
      <div className="relative hidden items-baseline justify-center max-w-116 lg:flex">
        <div className="absolute top-4 -left-10 w-36 h-36 bg-[radial-gradient(circle,#ff6b00_2px,transparent_2px)] bg-size-[16px_16px] -z-10" />
        <Image
          width={360}
          height={256}
          src="/about.jpg"
          alt="About Picture"
          className="rounded-xl w-90 h-64 object-cover"
          loading="eager"
          priority
        />
        <div className="relative min-w-6 h-32 rounded-r-lg bg-primary overflow-hidden">
          <div className="absolute -left-4 top-2 w-12 h-1 bg-white/20 -rotate-45" />
          <div className="absolute -left-2 top-8 w-20 h-1 bg-white/15 -rotate-45" />
          <div className="absolute left-1 top-14 w-10 h-1 bg-white/25 -rotate-45" />
          <div className="absolute -left-3 top-20 w-16 h-1 bg-white/10 -rotate-45" />
          <div className="absolute left-2 top-26 w-14 h-1 bg-white/20 -rotate-45" />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col gap-4 items-start col-span-2 p-6 border-b lg:border-b-0 lg:border-r border-primary">
        <h2 className="text-4xl font-bold text-white">About Me</h2>
        <p className="text-sm text-gray-400">
          I&apos;m Wai Zaw Tun, a full-stack developer based in Bago, Myanmar. I
          enjoy building scalablem reliable and user-friendly web applications
          from frontend interfaces to backend APIs.
        </p>
        <p className="text-sm text-gray-400">
          My primary stack includes Next.js, TypeScript, Spring Boot and
          PostgreSQL. I love solving complex problems and turning ideas into
          real-world applications.
        </p>
        <Button
          variant="outlined"
          color="inherit"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <PersonIcon />
          More About Me
        </Button>
      </div>

      {/* info */}
      <div className="flex items-start jusitfy-center flex-col gap-4">
        <div className="flex items-center gap-4 justify-center text-primary">
          <LocationPinIcon />
          <span className="text-white">Bago, Myanmar</span>
        </div>
        <div className="flex items-center gap-4 justify-center text-primary">
          <EmailIcon />
          <span className="text-white">waizawtun.coder@gmail.com</span>
        </div>
        <div className="flex items-center gap-4 justify-center text-primary">
          <DateRangeIcon />
          <span className="text-white">2+ years experience</span>
        </div>
        <div className="flex items-center gap-4 justify-center text-primary">
          <DownloadIcon />
          <span className="text-white">Download resume</span>
        </div>
      </div>
    </section>
  );
};

export default About;
