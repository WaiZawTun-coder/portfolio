import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// custom components
import Header from "@/components/js/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Wai Zaw Tun's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
