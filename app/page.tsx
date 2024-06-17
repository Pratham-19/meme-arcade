"use client";
import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { coustard, unbounded } from "@/components/Fonts";
export default function Home() {
	return (
		<div className="flex flex-col md:gap-y-10 py-8">
			<div className="max-w-screen-2xl w-11/12 mx-auto flex flex-col md:gap-y-10 py-8">
				<div className="relative p-6  flex flex-col md:flex-row justify-between bg-purple text-cream border-black border-8 rounded-mg w-full">
					<Image
						src="/meme-arcade-hero.svg"
						alt="alt"
						width={500}
						height={500}
						className="absolute top-5 md:bottom-0 left-4 w-[60%] md:w-[15%]"
					/>
					<div className="flex flex-col h-full justify-between gap-y-4 z-10">
						<h6
							className={`${unbounded.className} text-3xl md:text-6xl md:w-1/2 font-bold`}
						>
							One Arcade to meme all!
						</h6>
						<p className={`${coustard.className} text-lg md:w-2/3`}>
							Players all over the world, games from all over the
							metaverse.
						</p>
					</div>
					<div
						className={`${unbounded.className} flex items-center gap-x-4 border-[6px] rounded-md text-purple-800 border-purple-600 bg-custom-gradient px-4 md:px-6 md:pr-10 py-4 text-3xl font-black md:w-[18rem]`}
					>
						More than 900 games to choose
					</div>
					<Image
						src="/memearcade-logo.png"
						alt="alt"
						width={500}
						height={500}
						className="absolute bottom-0 right-0 w-24 md:w-28"
					/>
				</div>
				<div className="hidden md:flex flex-col md:flex-row items-center justify-evenly py-2">
					<Image
						src="/roadfighter-home.png"
						alt="alt"
						className="w-[30rem] h-fit border-l-[6px] border-y-[6px] border-purple-grey rounded-l"
						width={1000}
						height={1000}
					/>
					<div className="absolute flex flex-col w-[30rem] gap-y-2 pb-4 px-3 bg-pearl border-black border-4 rounded-md">
						<p
							className={`${coustard.className} font-black text-lg pt-1.5 text-purple-800 text-center`}
						>
							Featured Games
						</p>
						<Carousel
							// plugins={[
							// 	Autoplay({
							// 		delay: 4000,
							// 	}),
							// ]}
							className="w-[28rem] "
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
							className="w-[33rem] h-fit"
							width={1000}
							height={1000}
						/>
					</div>
					<Image
						src="/poker-home.png"
						alt="alt"
						className="w-[30rem] h-fit border-r-[6px] border-y-[6px] border-purple-grey rounded-r"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 py-16 gap-y-6 md:gap-y-0 justify-items-center">
					<div className=" flex flex-col gap-y-6 bg-pearl border-4 border-purple-grey-800 md:w-[80%] p-6 rounded-lg">
						<div className="bg-purple text-cream p-4 rounded-md flex items-center justify-between">
							<p
								className={`${unbounded.className} text-3xl font-bold`}
							>
								Player
							</p>
							<Image
								src="/icon-silver.svg"
								alt="alt"
								width={500}
								height={500}
								className="w-8"
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-x-6 text-purple-800">
							<Image
								src="/pepe-player.png"
								alt="alt"
								width={500}
								height={500}
								className="md:w-1/2 border-4 border-purple-grey-800 rounded-lg"
							/>
							<div className="flex flex-col gap-y-4 md:gap-y-6 pt-4 md:py-0">
								<p
									className={`${coustard.className} text-2xl font-medium`}
								>
									Get rewarded for playing and growing the
									meme community.
								</p>
								<h6
									className={`${coustard.className} text-4xl font-black`}
								>
									More than $500.000 usd for grabs.
								</h6>
							</div>
						</div>
					</div>
					<div className=" flex flex-col gap-y-6 bg-pearl border-4 border-purple-grey-800 md:w-[80%] p-6 rounded-lg">
						<div className="bg-purple text-cream p-4 rounded-md flex items-center justify-between">
							<p
								className={`${unbounded.className} text-3xl font-bold`}
							>
								Creator
							</p>
							<Image
								src="/icon-silver.svg"
								alt="alt"
								width={500}
								height={500}
								className="w-8"
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-x-6 text-purple-800">
							<Image
								src="/pepe-creator.png"
								alt="alt"
								width={500}
								height={500}
								className="md:w-1/2 border-4 border-purple-grey-800 rounded-lg"
							/>
							<div className="flex flex-col gap-y-4 md:gap-y-6 pt-4 md:py-0">
								<p
									className={`${coustard.className} text-2xl font-medium`}
								>
									Reward user to grow your community, improve
									liquidity and keep pumpin.
								</p>
								<h6
									className={`${coustard.className} text-4xl font-black`}
								>
									More than 80 projects have joined the
									Arcade.
								</h6>
							</div>
						</div>
					</div>
				</div>
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
					The definitive earn to play. A meme marketing tool to reward
					your users, grow your community and keep telling the story
					of your coin.
				</h6>
			</div>
		</div>
	);
}
