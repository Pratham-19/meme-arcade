"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const formSchema = z.object({
	picture: z.string().min(2).max(50),
	title: z.string().min(2).max(50),
	desc: z.string().min(2).max(50),
	date: z.string().min(2).max(50),
	minHolding: z.string().min(2).max(50),
	minBid: z.string().min(2).max(50),
	maxplayers: z.string().min(2).max(50),
	contribute: z.string().min(2).max(50),
});

export default function DegenForm() {
	const [char1, setChar1] = useState<string>();
	const [char2, setChar2] = useState<string>();
	const [char3, setChar3] = useState<string>();
	const [char4, setChar4] = useState<string>();

	const char1Ref = useRef<HTMLInputElement>(null);
	const char2Ref = useRef<HTMLInputElement>(null);
	const char3Ref = useRef<HTMLInputElement>(null);
	const char4Ref = useRef<HTMLInputElement>(null);

	const [componentValues, setComponentValues] = useState({
		"1": null,
		"2": null,
		"3": null,
		"4": null,
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			picture: "",
			title: "",
			desc: "",
			date: "",
			minHolding: "",
			minBid: "",
			maxplayers: "",
			contribute: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	const components: {
		name: string;
		value: string | undefined;
		setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
		ref: React.MutableRefObject<HTMLInputElement | null>;
	}[] = [
		{
			name: "1",
			value: char1,
			setValue: setChar1,
			ref: char1Ref,
		},
		{
			name: "2",
			value: char2,
			setValue: setChar2,
			ref: char2Ref,
		},
		{
			name: "3",
			value: char3,
			setValue: setChar3,
			ref: char3Ref,
		},
		{
			name: "4",
			value: char4,
			setValue: setChar4,
			ref: char4Ref,
		},
	];
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid grid-cols-2 gap-x-10 text-purple-800"
			>
				<div className="w-full flex flex-col gap-y-8">
					<div className="flex flex-col gap-y-6">
						<div className="w-full flex justify-between items-center">
							<h5 className="text-4xl font-black text-purple-800">
								Game description:{" "}
							</h5>
							<Switch className="data-[state=unchecked]:bg-purple-grey data-[state=checked]:bg-purple" />
						</div>
						<div className="flex flex-col gap-y-4 pb-4">
							<h6 className="font-medium">Creators Joined</h6>
							<div className="flex flex-wrap gap-x-4">
								{[
									{ img: "/c1.png", name: "MRETT" },
									{ img: "/c2.png", name: "CHOMP" },
									{ img: "/c3.png", name: "BRETT" },
									{ img: "/c4.png", name: "PONKE" },
									{ img: "/c5.png", name: "BOYSCLUB" },
								].map((data, i) => (
									<div
										key={i}
										className="flex items-center gap-x-2 bg-cream px-2 p-1 rounded-md"
									>
										<Image
											src={data.img}
											width={500}
											height={500}
											alt="alt"
											className="w-6"
										/>
										<span>${data.name}</span>
									</div>
								))}
							</div>
						</div>

						<div className="flex flex-col gap-y-8">
							<h5 className="text-4xl font-black text-purple-800">
								Game description:{" "}
							</h5>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Game Title*</FormLabel>
										<FormControl>
											<Input
												className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
												placeholder="Type link"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="desc"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Add a catchy description for your
											users:*
										</FormLabel>
										<FormControl>
											<Textarea
												className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
												placeholder="Type link"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="date"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Choose game over date:
										</FormLabel>
										<FormDescription>
											*if none game will be over when
											rewards are over
										</FormDescription>
										<FormControl>
											<Input
												className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
												placeholder="DD MM YYYY"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-6">
						<h5 className="text-4xl font-black text-purple-800">
							Rewards Dynamics:
						</h5>
						{[
							{
								label: "Minimum holding on wallet:",
								placeholder:
									"Type amount (value in $COINTICKER)",
								name: "minHolding",
							},

							{
								label: "Minimum bid",
								placeholder:
									"Type amount (value in $COINTICKER)",
								name: "minBid",
							},

							{
								label: "Maximum allowed players",
								placeholder: "Type amount",
								name: "maxPlayers",
							},
							{
								label: "Contribute to epoch rewards",
								placeholder: "Type amount",
								name: "contribute",
							},
						].map((item, index) => (
							<FormField
								key={index}
								control={form.control}
								// @ts-ignore
								name={item.name}
								render={({ field }) => (
									<FormItem>
										<FormLabel>{item.label}</FormLabel>
										<FormControl>
											<Input
												className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
												placeholder={item.placeholder}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						))}
					</div>
				</div>
				<div className="w-full flex flex-col justify-between gap-y-8">
					<div>
						<h6 className="text-4xl font-black">Links:</h6>
						<div className="flex flex-col gap-y-4">
							{[
								{
									title: "website",
									placeholder: "Website link",
								},
								{
									title: "Contract address",
									placeholder: "Type address",
								},
								{ title: "Twitter", placeholder: "Type link" },
								{
									title: "Discord",
									placeholder: "Type invite link",
								},
								{
									title: "Dextools",
									placeholder: "Type chart link",
								},
								{
									title: "Coingecko",
									placeholder: "Type chart link",
								},
							].map((link, index) => (
								<div
									key={index}
									className="flex flex-col gap-y-2"
								>
									<p className="text-base">{link.title}</p>
									<Input
										className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
										placeholder={link.placeholder}
									/>
								</div>
							))}
						</div>
					</div>
					<Button
						type="submit"
						className="w-fit rounded-lg text-lg font-medium self-end h-12 hover:bg-pink bg-pink border-2 shadow-sm shadow-pink-800 border-pink-800 text-pink-800"
					>
						Approve and Launch
					</Button>
				</div>
			</form>
		</Form>
	);
}
