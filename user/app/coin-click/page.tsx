"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { unbounded } from "@/components/Fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CoinClicker() {
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPlusTwo, setShowPlusTwo] = useState(false);

  const handleCoinClick = () => {
    if (isAnimating) return;

    setScore((prevScore) => prevScore + 2);
    setIsAnimating(true);
    setShowPlusTwo(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Duration should match the animation duration

    setTimeout(() => {
      setShowPlusTwo(false);
    }, 1000); // Make sure the text disappears after the animation
  };

  return (
    <div
      className={cn(
        "relative flex flex-col h-screen bg-black justify-center items-center",
        unbounded.className
      )}
    >
      <div className="flex flex-col items-center bg-orange-500 w-[400px] p-10 border-8 border-pearl rounded-t-md ">
        <div className="text-4xl mb-4">Score: {score}</div>
        <motion.div
          onClick={handleCoinClick}
          animate={isAnimating ? { scale: [1, 0.8, 1] } : { scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative cursor-pointer"
        >
          <Image
            src="/brett.webp"
            alt="Coin"
            width={250}
            height={250}
            className="object-contain"
          />
          {showPlusTwo && (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xl text-white"
            >
              +2
            </motion.div>
          )}
        </motion.div>
      </div>
      <div
        className="relative border-b-[3px] border-x-[3px] bg-pearl border-pearl
       rounded-b-md p-4 w-[400px]"
      >
        <Image
          src="/controllers.svg"
          alt="alt"
          className="w-fit mx-auto"
          width={500}
          height={500}
        />
      </div>
      <Link href="/" className="absolute top-8 left-8">
        <ArrowLeft className="size-6 text-white cursor-pointer" />
      </Link>
    </div>
  );
}
