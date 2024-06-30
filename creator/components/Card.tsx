"use client";
import Image from "next/image";
import React from "react";
import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { coustard, unbounded } from "@/components/Fonts";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Card({
  title,
  image,
  type,
  link,
}: {
  title: string;
  image: string;
  type: string;
  link: string;
}) {
  const status = useActiveWalletConnectionStatus();
  const router = useRouter();
  return (
    <div className="border-4 border-purple-grey-800 rounded-t-md rounded-b-lg w-72">
      <div className="p-4 bg-purple-grey">
        <Image
          src={image}
          alt="alt"
          className="w-full object-cover h-40 border-x-[3px] border-purple-grey-800"
          width={1000}
          height={1000}
        />
      </div>
      <div
        className={`bg-pearl px-2 pt-4 pb-6 text-purple-800 border-t rounded-b-xl border-purple-grey-800 flex flex-col gap-y-2`}
      >
        <div className="flex items-center justify-between">
          <h6 className={`${coustard.className} text-xl font-bold`}>{title}</h6>
          {/* <Image
            src="/circle-play.svg"
            alt="alt"
            width={500}
            height={500}
            className="size-6"
          /> */}
        </div>
        <div className="flex items-center justify-between">
          <div
            className={`${coustard.className} flex gap-x-2 items-center font-medium bg-pearl-200 px-2`}
          >
            + {Math.floor(Math.random() * 35 + 1)}% weekly players
          </div>

          <button
            onClick={() => {
              if (status !== "connected") {
                toast.error("Please connect your wallet");
                return;
              }
              router.push(`/creator/${link}`);
            }}
            className="hover:scale-95 transition-transform duration-300"
          >
            <Image
              src="/circle-plus.svg"
              alt="alt"
              width={500}
              height={500}
              className="size-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
