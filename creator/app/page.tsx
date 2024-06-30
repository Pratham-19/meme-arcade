"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { coustard, unbounded } from "@/components/Fonts";
import UserRoles from "@/components/UserRoles";
import Autoplay from "embla-carousel-autoplay";
export default function Home() {
  return (
    <div className="flex flex-col md:gap-y-10 py-8">
      <div className="max-w-screen-2xl w-11/12 mx-auto flex flex-col md:gap-y-10 py-8">
        <div className=" bg-purple text-cream border-black border-8 rounded-md w-full">
          <div className="relative p-6  flex flex-col md:flex-row justify-between">
            <Image
              src="/meme-arcade-hero.svg"
              alt="alt"
              width={500}
              height={500}
              className="absolute top-5 md:bottom-0 left-4 w-[60%] md:w-[20%]"
            />
            <div className="flex flex-col h-full justify-between gap-y-4 z-10">
              <h6
                className={`${unbounded.className} text-3xl md:text-6xl md:w-1/2 font-bold`}
              >
                One Arcade to meme all!
              </h6>
              <p className={`${coustard.className} text-3xl md:w-2/3`}>
                Players all over the world, games from all over the metaverse.
              </p>
            </div>

            <Image
              src="/memearcade-hero.png"
              alt="alt"
              width={500}
              height={500}
              className="absolute top-0 right-1 w-24 md:w-1/3 z-10"
            />
          </div>
          <div className="hidden md:flex flex-col md:flex-row items-center justify-evenly pb-10">
            <Image
              src="/just-push.jpg"
              alt="alt"
              className="w-[26rem] h-fit border-l-[6px] border-y-[6px] border-purple-grey rounded-l z-20"
              width={1000}
              height={1000}
            />
            <div className="absolute flex flex-col w-[27rem] pb-1 px-3 bg-pearl border-black border-4 rounded-md z-30">
              <div>
                <p
                  className={`${coustard.className} font-black text-lg text-purple-800 text-center`}
                >
                  Featured Games
                </p>
              </div>
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="w-[25rem] "
              >
                <CarouselContent>
                  <CarouselItem>
                    <Image
                      src="/flappyBird.png"
                      alt="alt"
                      className="h-full w-full"
                      width={1000}
                      height={1000}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/dino.jpg"
                      alt="alt"
                      className="h-full w-full"
                      width={1000}
                      height={1000}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <Image
                      src="/tetris.jpg"
                      alt="alt"
                      className="h-full w-full"
                      width={1000}
                      height={1000}
                    />
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <Image
                src="/player.svg"
                alt="alt"
                className="w-[25rem] h-fit pt-1"
                width={1000}
                height={1000}
              />
            </div>
            <Image
              src="/dino.jpg"
              alt="alt"
              className="w-[26rem] h-fit border-r-[6px] border-y-[6px] border-purple-grey rounded-r z-20"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <UserRoles />
      </div>
      <div className="w-full bg-pearl border-y-8 border-y-black py-8 flex flex-col gap-y-10">
        <div className="flex items-center gap-x-4 max-w-screen-2xl w-11/12 mx-auto py-3 px-5 bg-black rounded-lg">
          <Image
            src="/pixel-fire.svg"
            alt="alt"
            width={500}
            height={500}
            className="w-8"
          />
          <span
            className={`${unbounded.className} font-black text-cream text-4xl`}
          >
            Hot Games
          </span>
        </div>
        <Image
          src="/games-slide.svg"
          alt="alt"
          width={100}
          height={100}
          className="w-full"
        />
      </div>
      <div className="max-w-screen-2xl w-11/12 mx-auto flex flex-col md:gap-y-10 py-8">
        <div
          className={`${unbounded.className} w-full text-center border-[5px] rounded-md text-purple-800 border-purple-600 bg-custom-gradient py-5 text-5xl font-black  `}
        >
          More than 900 games to choose
        </div>
        <h6
          className={`${coustard.className} text-4xl font-medium text-center leading-loose`}
        >
          The definitive earn to play. A meme marketing tool to reward your
          users, grow your community and keep telling the story of your coin.
        </h6>
      </div>
    </div>
  );
}
