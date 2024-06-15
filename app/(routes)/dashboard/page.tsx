import Card from "@/components/Card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function page() {
	return (
		<div className="flex flex-col gap-y-4">
			<div className="flex items-center gap-x-4 border-4 rounded-md text-purple-800 border-purple-800 bg-custom-gradient px-6 py-2 text-lg font-bold w-fit">
				Creator Dashboard
			</div>
			<div className="flex border-4 justify-between border-purple-grey-800 rounded-xl bg-cream-800 p-4">
				<div className="flex items-center gap-x-2">
					<Image
						src="/dashboard-fill.svg"
						alt="alt"
						className="w-16"
						width={500}
						height={500}
					/>
					<div className="flex flex-col ">
						<p>
							Managing: <span>12 Memecoins</span>
						</p>
						<p className="text-3xl text-purple-grey-800 font-black ">
							Degen Boi
						</p>
					</div>
				</div>
				<div className="flex gap-x-2">
					{[
						{
							title: "Total rewards",
							value: 1000,
							type: "USD",
						},
						{
							title: "Total burnt",
							value: 1000,
							type: "$COIN",
						},
						{
							title: "Total on LPs",
							value: 1000,
							type: "$COIN",
						},
					].map((item) => (
						<div
							key={item.title}
							className="flex flex-col gap-y-2 bg-cream border-4 p-4 border-purple-grey text-purple-grey-800"
						>
							<p className="font-bold">{item.title}</p>
							<p className="text-xl font-bold text-purple-grey">
								{item.value}{" "}
								<small className="text-sm">{item.type}</small>
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="grid grid-cols-3 gap-x-2">
				<div className="flex flex-col gap-y-2 col-span-2">
					<h6 className="text-3xl font-bold text-cream bg-black p-4 w-full">
						Games
					</h6>
				</div>
				<div className="flex flex-col gap-y-2 col-span-1">
					<h6 className="text-3xl font-bold text-cream bg-black p-4 w-full">
						Top Players
					</h6>
					<div>
						<Image
							src="/dashboard-winners.svg"
							alt="alt"
							className="w-full"
							width={5000}
							height={5000}
						/>
					</div>
					<div className="flex gap-x-2 bg-purple border-4 border-purple-grey-800 rounded-xl p-4">
						<Image
							src="/flappyBird.png"
							alt="alt"
							width={500}
							height={500}
							className="w-1/2 h-48"
						/>
						<div className="flex flex-col justify-between	">
							<div className="flex flex-col gap-y-2">
								<div className="flex h-fit items-center gap-x-4 border-2 rounded-md text-purple-800 border-purple-800 bg-custom-gradient px-4 text-base font-bold w-fit">
									Creator Dashboard
								</div>
								<h6 className="text-3xl font-bold text-cream">
									The Flying Burd
								</h6>
							</div>
							<Button
								type="submit"
								className="w-full rounded-lg flex gap-x-3 text-base font-bold px-8 hover:bg-pink bg-pink border-2 shadow-sm shadow-pink-800 border-pink-800 text-pink-800"
							>
								<Image
									src="/world.svg"
									alt="alt"
									width={500}
									height={500}
									className="w-6"
								/>
								Create
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col border-[3px] border-purple-grey-800 rounded-lg">
				<div className="flex items-center justify-between bg-purple-grey-800  py-4 px-7 ">
					<h6 className="text-2xl font-bold text-cream">Bookmarks</h6>{" "}
				</div>
				<div className="p-6 bg-yellow-600-80a w-full overflow-x-auto flex flex-wrap gap-x-4 rounded-b-lg">
					{[
						{
							title: "The Flying Burd",
							image: "/flappyBird.png",
							type: "onboard",
						},
						{
							title: "Racing Kars",
							image: "/carfighter.png",
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
