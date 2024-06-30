"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { coustard, unbounded } from "@/components/Fonts";
import { ConnectButton, darkTheme, lightTheme } from "thirdweb/react";
import { client } from "@/app/_lib/thirdweb/client";
import { createWallet } from "thirdweb/wallets";
import { defineChain } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";

export default function Navbar() {
  const path = usePathname();
  console.log(path);
  const wallet = [createWallet("com.coinbase.wallet")];

  return (
    <div className={` bg-black w-full`}>
      <div className="max-w-screen-2xl w-11/12 mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-x-8 text-sm">
          <Link href="/">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={500}
              height={500}
              className="w-48"
            />
          </Link>
          {path !== "/" &&
            [
              { title: "creator", href: "/creator" },
              // { title: "play", href: "/play" },
              { title: "dashboard", href: "/dashboard" },
            ].map(({ title, href }, index) => (
              <Link
                key={index}
                className={`${
                  path.includes(href) ? "bg-pink border-none" : "bg-none"
                }  text-pearl px-8 py-2 rounded-lg border border-pearl/30 hidden md:block ${
                  coustard.className
                }`}
                href={href}
              >
                {title}
              </Link>
            ))}
        </div>

        {path !== "/" && (
          <ConnectButton
            client={client}
            wallets={wallet}
            chain={defineChain(baseSepolia)}
            theme={darkTheme({
              colors: {
                primaryButtonBg: "#161616",
                primaryButtonText: "#dfdfdf",
                selectedTextBg: "#161616",
                borderColor: "#161616",
              },
            })}
          />
        )}
      </div>
    </div>
  );
}
