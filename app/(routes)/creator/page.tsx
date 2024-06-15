"use client";
import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

export default function page() {
	return (
		<div className="flex flex-col gap-y-12 text-cream">
			<div className="flex items-center h-fit">
				<div className="flex flex-col h-fit gap-y-2 pb-4 px-3 bg-pearl border-black border-4 rounded-md">
					<p className="text-lg font-bold py-2 text-purple-800 text-center">
						Featured Games
					</p>
					<Carousel
						plugins={[
							Autoplay({
								delay: 4000,
							}),
						]}
						className="w-[26rem] h-30"
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
									src="/poker.png"
									alt="alt"
									className="h-full w-full"
									width={1000}
									height={1000}
								/>
							</CarouselItem>
							<CarouselItem>
								<Image
									src="/carfighter.png"
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
						className="w-[26rem]"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="relative flex flex-col gap-y-4 p-6 bg-purple border-black border-y-8 border-r-8 rounded-y-md rounded-r-md w-full">
					<div className="flex items-center gap-x-4 border-4 rounded-md text-purple-800 border-purple-800 bg-custom-gradient px-6 py-2 text-lg font-bold w-fit">
						{/* <Image
							src="/arcade-purple.svg"
							alt="alt"
							width={500}
							height={500}
							className="w-5"
						/> */}
						More than 900 games to choose
					</div>
					<h6 className="text-5xl font-bold ">
						Is all about the story ✨
					</h6>
					<p className="text-lg">
						Your meme comunity more engaged than ever
					</p>
					<Image
						src="/memearcade-logo.png"
						alt="alt"
						width={500}
						height={500}
						className="absolute bottom-0 right-0 w-fit"
					/>
				</div>
			</div>
			<div className="w-full flex flex-col border-[3px] border-purple-grey-800 rounded-lg">
				<div className="flex items-center justify-between bg-purple-grey-800  py-4 px-7 ">
					<div className="flex items-center gap-x-3">
						<div className="bg-purple-grey p-2 rounded">
							<Image
								src="/arcade-purple.svg"
								alt="alt"
								width={1000}
								height={1000}
								className="w-8"
							/>
						</div>
						<div className="flex flex-col">
							<h6 className="text-2xl font-bold">
								Onboarding Games
							</h6>
							<p>Welcome new users to your community</p>
						</div>
					</div>
					<Button className="w-fit bg-pink hover:bg-pink border-[3px] h-12 px-6 rounded-none text-lg font-bold border-cream ">
						More Games
					</Button>
				</div>
				<div className="p-6 bg-yellow-600-80a flex w-full overflow-x-auto gap-x-4 rounded-b-lg">
					{[
						{
							title: "The Flying Burd",
							image: "/flappyBird.png",
							type: "onboard",
						},
						{
							title: "The Flying Burd",
							image: "/flappyBird.png",
							type: "onboard",
						},
						{
							title: "The Flying Burd",
							image: "/flappyBird.png",
							type: "onboard",
						},
						{
							title: "The Flying Burd",
							image: "/flappyBird.png",
							type: "onboard",
						},
					].map((item, index) => (
						<Card
							key={index}
							title={item.title}
							image={item.image}
							type={item.type}
						/>
					))}
				</div>
			</div>

			<div className="w-full flex flex-col border-[3px] border-purple-grey-800 rounded-lg">
				<div className="flex items-center justify-between bg-purple-grey-800  py-4 px-7 ">
					<div className="flex items-center gap-x-3">
						<div className="bg-purple-grey p-2 rounded">
							<Image
								src="/pacman.svg"
								alt="alt"
								width={1000}
								height={1000}
								className="w-8"
							/>
						</div>
						<div className="flex flex-col">
							<h6 className="text-2xl font-bold">
								Enganging Games
							</h6>
							<p>
								Keep your community engaged competing for weekly
								prizes.
							</p>
						</div>
					</div>
					<Button className="w-fit bg-pink hover:bg-pink border-[3px] h-12 px-6 rounded-none text-lg font-bold border-cream ">
						More Games
					</Button>
				</div>
				<div className="p-6 bg-yellow-600-80a w-full overflow-x-auto flex flex-wrap gap-x-4 rounded-b-lg">
					{[
						{
							title: "Racing Kars",
							image: "/carfighter.png",
							type: "engage",
						},
						{
							title: "Racing Kars",
							image: "/carfighter.png",
							type: "engage",
						},
						{
							title: "Racing Kars",
							image: "/carfighter.png",
							type: "engage",
						},
						{
							title: "Racing Kars",
							image: "/carfighter.png",
							type: "engage",
						},
					].map((item, index) => (
						<Card
							key={index}
							title={item.title}
							image={item.image}
							type={item.type}
						/>
					))}
				</div>
			</div>

			<div className="w-full flex flex-col border-[3px] border-purple-grey-800 rounded-lg">
				<div className="flex items-center justify-between bg-purple-grey-800  py-4 px-7 ">
					<div className="flex items-center gap-x-3">
						<div className="bg-purple-grey p-2 rounded">
							<Image
								src="/crown.svg"
								alt="alt"
								width={1000}
								height={1000}
								className="w-8"
							/>
						</div>
						<div className="flex flex-col">
							<h6 className="text-2xl font-bold">Degen Games</h6>
							<p>
								Make alliances with other memecoins, and let
								users get juicy prizes.
							</p>
						</div>
					</div>
					<Button className="w-fit bg-pink hover:bg-pink border-[3px] h-12 px-6 rounded-none text-lg font-bold border-cream ">
						More Games
					</Button>
				</div>
				<div className="p-6 bg-yellow-600-80a w-full overflow-x-auto flex flex-wrap gap-x-4 rounded-b-lg">
					{[
						{
							title: "Made my day",
							image: "/poker.png",
							type: "degen",
						},
						{
							title: "Made my day",
							image: "/poker.png",
							type: "degen",
						},
						{
							title: "Made my day",
							image: "/poker.png",
							type: "degen",
						},
						{
							title: "Made my day",
							image: "/poker.png",
							type: "degen",
						},
					].map((item, key) => (
						<Card
							key={key}
							title={item.title}
							image={item.image}
							type={item.type}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
