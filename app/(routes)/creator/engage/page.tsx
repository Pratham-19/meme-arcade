import Image from "next/image";
import React from "react";
import OnboardForm from "./_components/Form";

export default function page() {
	return (
		<div className="flex flex-col gap-y-8">
			<div className="w-full h-fit gap-x-10 bg-purple border-4 border-black rounded-xl p-8 flex">
				<Image
					src="/carfighter.png"
					alt="alt"
					width={500}
					height={500}
					className="h-fit w-[30%]"
				/>
				<div className="flex flex-col gap-y-4 text-cream w-2/3">
					<div className="flex items-center gap-x-4 border-2 rounded-md text-purple-800 border-purple-800 bg-custom-gradient px-6 py-2 text-lg font-bold w-fit">
						<Image
							src="/pacman.svg"
							alt="alt"
							width={500}
							height={500}
							className="w-5"
						/>
						Enganging Games
					</div>
					<h6 className="text-5xl font-bold ">Racing Kars</h6>
					<p className="text-lg">
						Keep users engaged and the conversation going on. Users
						will compete between them for accrued prizes by epoch.
						Top 3 Users take the prize.
					</p>
					<div className="flex gap-x-4">
						<div className="bg-purple-600 px-4 py-2 w-fit">
							🕹️ 50% earnings for Player
						</div>
						<div className="bg-purple-600 px-4 py-2 w-fit">
							🧊 40% to Liquidity Pool
						</div>
						<div className="bg-purple-600 px-4 py-2 w-fit">
							🏛️ 10% Meme Arcade treasury
						</div>
					</div>
				</div>
			</div>
			<div className="w-full border-4 border-purple-grey-800 rounded-xl py-10 px-16 bg-pearl">
				<div className="flex flex-col gap-y-12">
					<OnboardForm />
				</div>
			</div>
		</div>
	);
}
