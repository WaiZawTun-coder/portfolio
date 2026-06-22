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
  title: "Wai Zaw Tun - Portfolio",
  description: "This web is created by Wai Zaw Tun and using as a portfolio",
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
      <body className="min-h-full flex flex-col">
        <Navbar />
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
