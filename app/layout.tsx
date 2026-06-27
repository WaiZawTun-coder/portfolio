import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/ui/nav-bar";
import Footer from "@/ui/footer";
import Providers from "@/providers/theme-provider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wai Zaw Tun | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, TypeScript, Spring Boot, and Laravel.",
  icons: {
    icon: "/icon.ico",
  },
  openGraph: {
    title: "Wai Zaw Tun",
    description:
      "Full Stack Developer specializing in modern web applications.",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wai Zaw Tun",
              jobTitle: "Full Stack Developer",
              url: "https://waizawtun.vercel.app",
              sameAs: [
                "https://github.com/WaiZawTun-coder",
                "https://linkedin.com/in/wai-zaw-tun-457295362",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main>
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
