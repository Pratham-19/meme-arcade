import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ThirdwebProvider } from "thirdweb/react";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meme Arcade",
  description: "Players all over the world, games from all over the metaverse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className} bg-yellow`}>
        <ThirdwebProvider>
          <Navbar />
          {children}
          <Image
            src="/arcade-machine-bg.svg"
            priority
            alt="alt"
            width={1000}
            height={1000}
            className="fixed right-0 bottom-0 w-[30rem] -z-10 opacity-70"
          />
          <Toaster />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
