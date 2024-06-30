"use client";

import { useAccount, useWriteContract } from "wagmi";
import { unbounded } from "@/components/Fonts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/Navbar";
import { usePoints } from "@/store/player";
import { useStore } from "@/hooks/useStore";

import GameTokenDispensor from "../_lib/GameTokenDispenser.json";
import { parseUnits } from "viem";

export default function page() {
  const { writeContract } = useWriteContract();

  const store = useStore(usePoints, (state) => state);

  const [amount, setAmount] = React.useState(0);
  const { isConnected } = useAccount();

  const handleRedeem = () => {
    if (amount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }
    if ((store?.points ?? 0) < amount) {
      alert("You don't have enough points to redeem");
      return;
    }

    const tokenAmount = amount / 100;
    writeContract({
      abi: GameTokenDispensor.abi,
      address: GameTokenDispensor.address as `0x${string}`,
      functionName: "claimTokens",
      args: [parseUnits(tokenAmount.toString(), 6).toString()],
    });
    setTimeout(() => {
      store?.updatePoints(store?.points - amount);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-y-12 text-cream w-full">
      <Navbar />

      <div className="w-11/12 mx-auto ">
        <div className="flex flex-col gap-y-8 items-center">
          <div className="w-1/2 flex flex-col gap-y-4 border-4 justify-between items-center border-purple-grey-800 rounded-xl bg-cream-800 p-4">
            <div className="flex items-center gap-x-2">
              <Image
                src="/userprofile.png"
                alt="alt"
                className="w-20"
                width={500}
                height={500}
              />
              <p className="text-2xl font-black text-purple-grey-800 ">
                Degen Boi
              </p>
            </div>
            <div className="flex justify-between gap-x-2">
              <div className="flex flex-col gap-y-2 bg-cream border-4 p-4 border-purple-grey text-purple-grey-800">
                <p className="font-bold">Total Points Earned</p>
                <p
                  className={` text-4xl text-center font-bold text-purple-grey`}
                >
                  {store?.points.toFixed(2) ?? 0}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <h6
              className={`${unbounded.className} w-full bg-black text-cream text-lg font-bold p-2`}
            >
              Amount to withdraw
            </h6>
            <Input
              className="bg-transparent border border-purple-grey-800 ring-none focus-visible:ring-none text-black"
              placeholder="Amount"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
            <Button
              className="w-fit mt-4 rounded-lg text-lg font-medium h-12 hover:bg-pink bg-pink border-2 shadow-sm shadow-pink-800 border-pink-800 text-pink-800 "
              onClick={handleRedeem}
              disabled={!isConnected}
            >
              {isConnected ? "Approve and Launch" : "Connect Wallet to Redeem"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
