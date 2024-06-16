import Image from "next/image";
import React from "react";
import DegenForm from "./_components/Form";
import { coustard, unbounded } from "@/components/Fonts";

export default function page() {
	return (
		<div className={`${unbounded.className} flex flex-col gap-y-8`}>
			<div className="w-full h-fit gap-x-10 bg-purple border-4 border-black rounded-xl p-8 flex">
				<Image
					src="/poker.png"
					alt="alt"
					width={500}
					height={500}
					className="h-fit w-[30%]"
				/>
				<div className="flex flex-col gap-y-4 text-cream w-2/3">
					<div className="flex items-center gap-x-4 border-2 rounded-md text-purple-800 border-purple-800 bg-custom-gradient px-6 py-2 text-lg font-bold w-fit">
						<Image
							src="/crown.svg"
							alt="alt"
							width={500}
							height={500}
							className="w-5"
						/>
						Degen Games
					</div>
					<h6 className="text-5xl font-bold ">Poker made my day</h6>
					<p className={`${coustard.className} text-lg`}>
						Your Degen users will compete for a Juicy prize daily,
						join other protocols and grow your community. Just one
						player takes it all.
					</p>
					<div
						className={`${coustard.className} mt-auto flex gap-x-4`}
					>
						<div className="bg-purple-600 px-4 py-2 w-fit">
							🕹️ 70% earnings for Player
						</div>
						<div className="bg-purple-600 px-4 py-2 w-fit">
							🔥 20% Burned
						</div>
						<div className="bg-purple-600 px-4 py-2 w-fit">
							🏛️ 10% Meme Arcade treasury
						</div>
					</div>
				</div>
			</div>
			<div className="w-full border-4 border-purple-grey-800 rounded-xl py-10 px-16 bg-pearl">
				<div className="flex flex-col gap-y-12">
					<DegenForm />
				</div>
			</div>
		</div>
	);
}
