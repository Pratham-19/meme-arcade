import Image from "next/image";
import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import { coustard, unbounded } from "@/components/Fonts";

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
					<h6 className={`${coustard.className} text-xl font-bold`}>
						{title}
					</h6>
					<Image
						src="/circle-play.svg"
						alt="alt"
						width={500}
						height={500}
						className="size-6"
					/>
				</div>
				<div className="flex items-center justify-between">
					<div
						className={`${coustard.className} flex gap-x-2 items-center font-medium bg-pearl-200 px-2`}
					>
						+ 35% weekly players
					</div>
					<Link href={`/creator/${link}`}>
						<Image
							src="/circle-plus.svg"
							alt="alt"
							width={500}
							height={500}
							className="size-6"
						/>
					</Link>
					{/* <Dialog>
						<DialogTrigger>
							{" "}
						
						</DialogTrigger>
						<DialogContent className="bg-pearl p-4 border-[5px] border-black w-11/12 max-w-5xl">
							<h5
								className={`${unbounded.className} bg-purple p-4 text-2xl font-black text-cream`}
							>
								Game description
							</h5>
							<div className="grid grid-cols-2 gap-x-4">
								<div className="border-4 border-black rounded-md w-[95%] h-fit">
									<div className="bg-purple-grey p-2">
										<div className="relative ">
											<Image
												src={image}
												alt="alt"
												width={1000}
												height={1000}
												className="w-full h-96 object-cover bg-top"
											/>
											<div
												className={`${unbounded.className} absolute top-4 left-2 flex items-center gap-x-4 border-2 rounded-md text-purple-800 border-purple-800 bg-custom-gradient px-4 py-1.5 text-base font-bold w-fit`}
											>
												<Image
													src="/arcade-purple.svg"
													alt="alt"
													width={500}
													height={500}
													className="w-5"
												/>
												Onboarding Games
											</div>
										</div>
									</div>
									<div className=" bg-[#FFFEED] border-t border-black">
										<Image
											src="/game-action.svg"
											alt="alt"
											width={1000}
											height={1000}
											className="w-full"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-y-2">
									<h5
										className={`${unbounded.className} text-3xl font-black text-purple-800`}
									>
										{title}
									</h5>
									<p className={`${coustard.className}`}>
										{type === "onboard"
											? "In a whimsical world, Burd, the brave little bird, dreams of soaring high. With a simple tap, he flaps his wings and dodges green pipes that block his path. Each tap requires skill and timing. Join Burd on his quest to fly far and wide, helping him navigate obstacles and achieve his flying dreams."
											: type === "engage"
											? "In this thrilling racing game, players compete in high-speed, adrenaline-fueled races to claim the ultimate prize. Navigate challenging tracks, outmaneuver rivals, and master your racing skills to cross the finish line first. Only the fastest and most strategic racer will take home the big prize!"
											: "In this dynamic poker game, players bet with various currencies, adding an exciting twist to traditional gameplay. Strategize, bluff, and outplay opponents using your knowledge of different currency values. With diverse stakes at the table, every hand is a thrilling challenge. The ultimate prize awaits the most cunning and adaptable player!"}
									</p>
									<div>
										<h6
											className={`${unbounded.className} text-2xl font-bold text-purple-800`}
										>
											Know the Stats
										</h6>
										<Image
											src={
												type === "onboard"
													? "/onboard-desc.png"
													: type === "engage"
													? "/engage-desc.png"
													: "/degen-desc.png"
											}
											alt="alt"
											width={1000}
											height={1000}
											className="w-full"
										/>
									</div>
									<div className="flex gap-x-2 items-center mt-auto">
										<Button
											type="submit"
											className={`${unbounded.className} w-full rounded-lg text-lg font-medium h-12 px-8 hover:bg-pink bg-pink border-2 shadow-sm shadow-pink-800 border-pink-800 text-pink-800`}
										>
											<Image
												src="/bookmark.svg"
												alt="alt"
												width={500}
												height={500}
												className="w-6 mr-2"
											/>
											Bookmark
										</Button>
										<Link
											href={
												type === "onboard"
													? "/creator/onboard"
													: type === "engage"
													? "/creator/engage"
													: "/creator/degen"
											}
											className="w-full"
										>
											<Button
												type="submit"
												className={`${unbounded.className} w-full rounded-lg text-lg font-medium h-12 px-8 hover:bg-pink bg-pink border-2 shadow-sm  shadow-pink-800 border-pink-800 text-pink-800`}
											>
												<Image
													src="/world.svg"
													alt="alt"
													width={500}
													height={500}
													className="w-6 mr-2"
												/>
												Create
											</Button>
										</Link>
									</div>
								</div>
							</div>
						</DialogContent>
					</Dialog> */}
				</div>
			</div>
		</div>
	);
}
