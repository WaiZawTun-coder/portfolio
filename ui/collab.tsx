import { Button } from "@mui/material";
import Image from "next/image";

const Collab = () => {
  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8"
    >
      <div className="flex flex-col gap-4 items-center md:items-start">
        <p className="text-lg font-bold text-gray-200">Contact</p>
        <h2 className="text-4xl font-bold text-white">
          Let&apos;s work together
        </h2>
        <p className="text-lg text-gray-400">Feel free to reach out to me</p>

        <Button
          variant="outlined"
          color="primary"
          sx={{ maxWidth: 250 }}
          href="mailto:waizawtun.coder@gmail.com"
          target="_blank"
        >
          Send me a message
        </Button>
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/together-image.png"
          alt="Let's work together"
          width={360}
          height={256}
          className="w-90 h-64 object-cover"
        />
      </div>
    </section>
  );
};

export default Collab;
