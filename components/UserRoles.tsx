import Link from "next/link";
import React from "react";
import { coustard, unbounded } from "./Fonts";
import Image from "next/image";

export default function UserRoles() {
	return (
		<div>
			{" "}
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
					<div className="flex flex-col gap-y-4 text-purple-800">
						<div className="flex flex-col md:flex-row gap-x-6">
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
						<Link
							href={"/play"}
							className={`${coustard.className} flex flex-row items-center justify-center gap-x-2 w-full rounded-lg text-xl font-semibold h-12 hover:bg-pink bg-pink border-2 shadow-sm shadow-pink-800 border-pink-800 text-pink-800`}
						>
							<Image
								src="/arcade-machine.svg"
								alt="alt"
								className="w-8"
								width={500}
								height={500}
							/>
							Play
						</Link>
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
					<div className="flex flex-col gap-y-4 text-purple-800">
						<div className="flex flex-col md:flex-row gap-x-6">
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
						<Link
							href={"/creator"}
							className={`${coustard.className} flex flex-row items-center justify-center gap-x-2 w-full rounded-lg text-xl font-semibold h-12 hover:bg-pink bg-pink border-2 shadow-sm shadow-pink-800 border-pink-800 text-pink-800`}
						>
							{" "}
							<Image
								src="/world.svg"
								alt="alt"
								width={500}
								height={500}
								className="w-7"
							/>
							Create Game
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
