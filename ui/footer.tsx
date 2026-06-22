import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full max-w-5xl mx-auto py-4 text-sm text-gray-500 grid grid-cols-2 md:grid-cols-3 gap-4 px-8">
      <p className="text-xl font-bold text-white order-1 h-fit">Wai Zaw Tun</p>
      <div className="flex md:flex-col items-center justify-start flex-wrap max-h-27  gap-4 order-3 md:order-2 col-span-2 md:col-span-1">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </div>

      {/* social media links with icons */}
      <div className="flex items-start justify-start flex-wrap gap-2 order-2 md:order-3">
        {/* linkedin */}
        <Button
          variant="text"
          color="inherit"
          href="https://www.linkedin.com/in/wai-zaw-tun-457295242"
          target="_blank"
          sx={{ minWidth: "auto", padding: "10px" }}
        >
          <Image
            src="/icons/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
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
          <Image src="/icons/github.png" alt="Github" width={24} height={24} />
        </Button>

        {/* viber */}
        <Button
          variant="text"
          color="inherit"
          href="viber://chat?number=%2B959760893129"
          target="_blank"
          sx={{ minWidth: "auto", padding: "10px" }}
        >
          <Image src="/icons/viber.png" alt="Viber" width={24} height={24} />
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
            width={24}
            height={24}
          />
        </Button>
      </div>
      <small className="text-center order-4 col-span-2 md:col-span-3">
        &copy; {new Date().getFullYear()} Wai Zaw Tun. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
