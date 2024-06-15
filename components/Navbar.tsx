"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Coustard } from "next/font/google";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import path from "path";

const coustard = Coustard({ weight: "400", subsets: ["latin"] });

export default function Navbar() {
	const path = usePathname();
	console.log(path);

	return (
		<div className={` bg-black w-full`}>
			<div className="max-w-screen-2xl w-11/12 mx-auto py-4 flex items-center justify-between">
				<div className="flex items-center gap-x-4 text-sm">
					<Link href="/">
						<Image
							src={"/logo.svg"}
							alt="logo"
							width={500}
							height={500}
							className="w-48"
						/>
					</Link>
					{[
						{ title: "creator", href: "/creator" },
						{ title: "play", href: "/play" },
						{ title: "dashboard", href: "/dashboard" },
					].map(({ title, href }, index) => (
						<Link
							key={index}
							className={`${
								path.includes(href)
									? "bg-pink border-none"
									: "bg-none"
							} mx-4 text-pearl px-8 py-2 rounded-lg border border-pearl/30 ${
								coustard.className
							}`}
							href={href}
						>
							{title}
						</Link>
					))}
				</div>
				<Button className="bg-transparent border border-pearl/50 text-sm">
					Connect to Arcade
				</Button>
			</div>
		</div>
	);
}
