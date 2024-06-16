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
import {
	FileUploader,
	FileUploaderContent,
	FileUploaderItem,
	FileInput,
} from "@/components/ui/FileUploader";

import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
	picture: z.string().min(2).max(50),
	title: z.string().min(2).max(50),
	desc: z.string().min(2).max(50),
	date: z.string().min(2).max(50),
	minHolding: z.string().min(2).max(50),
	duration: z.string().min(2).max(50),
	minBid: z.string().min(2).max(50),
	minPlayers: z.string().min(2).max(50),
	maxplayers: z.string().min(2).max(50),
	contribute: z.string().min(2).max(50),
});

export default function EngageForm() {
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
			duration: "",
			minBid: "",
			minPlayers: "",
			maxplayers: "",
			contribute: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}
	const [files, setFiles] = useState<File[] | null>([]);

	const dropzone = {
		accept: {
			"image/*": [".jpg", ".jpeg", ".png"],
		},
		multiple: true,
		maxFiles: 4,
		maxSize: 1 * 1024 * 1024,
		// @ts-ignore
	} satisfies DropzoneOptions;

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
						<h5 className="text-4xl font-black text-purple-800">
							Create character:
						</h5>
						<div className="flex gap-x-6">
							<FormField
								control={form.control}
								name="picture"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<FileUploader
												value={files}
												onValueChange={setFiles}
												dropzoneOptions={dropzone}
											>
												<FileInput {...field}>
													<div className="flex flex-col gap-y-2 items-center justify-center size-40 text-center border-[3px] border-cream-800 border-dashed bg-cream rounded-md">
														<Image
															src="/face.svg"
															alt="alt"
															width={500}
															height={500}
															className="w-10"
														/>
														<p className="text-purple-grey">
															Add memecoin picture
														</p>
													</div>
												</FileInput>
												<FileUploaderContent className="flex items-center flex-row gap-2">
													{files?.map((file, i) => (
														<FileUploaderItem
															key={i}
															index={i}
															className="size-20 p-0 rounded-md overflow-hidden"
															aria-roledescription={`file ${
																i + 1
															} containing ${
																file.name
															}`}
														>
															<Image
																src={URL.createObjectURL(
																	file
																)}
																alt={file.name}
																height={80}
																width={80}
																className="size-20 p-0"
															/>
														</FileUploaderItem>
													))}
												</FileUploaderContent>
											</FileUploader>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex flex-wrap gap-x-4">
								{[
									{ title: "Pixel", icon: "👾" },
									{ title: "3D Model", icon: "🧸" },
									{ title: "Anime", icon: "🐲" },
									{ title: "Sketch", icon: "✏️" },
									{ title: "Random", icon: "🔮" },
								].map((item) => (
									<div className="w-fit h-fit font-bold px-6 border-2 border-purple-600 bg-purple-400 text-purple-600 p-2 rounded-md shadow-black shadow-md">
										{item.icon}
										{item.title}
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
								label: "Epoch duration",
								placeholder: "Minimum 3 days",
								name: "duration",
							},
							{
								label: "Minimum bid",
								placeholder:
									"Type amount (value in $COINTICKER)",
								name: "minBid",
							},
							{
								label: "Minimun allowed players",
								placeholder: "Type amount",
								name: "minPlayers",
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
				<div className="w-full flex flex-col gap-y-8">
					<div className="flex flex-col gap-y-6 border-4 border-black p-6 rounded-xl">
						<h5 className="text-4xl font-semibold text-cream bg-purple p-4 rounded-xl">
							Choose Character
						</h5>
						<div className="bg-cream-800">
							<div className="grid grid-cols-2 gap-4 p-8 justify-items-center rounded-xl  w-fit mx-auto">
								{components.map((component, index) => (
									<div
										className=" border-2 border-purple-grey-800 rounded-xl flex flex-col justify-center items-center size-28 relative"
										key={component.name}
									>
										<input
											type="file"
											ref={component.ref}
											onChange={() => {
												const file =
													component.ref.current
														?.files![0];
												if (!file) {
													component.setValue("");
													return;
												}
												const fileTypes = [
													"image/jpeg",
													"image/jpg",
													"image/png",
												];
												const { size, type } = file;
												if (!fileTypes.includes(type)) {
													console.log(
														"File format must be either png or jpg"
													);

													return false;
												}

												if (size / 1024 / 1024 > 2) {
													console.log(
														"File size exceeded the limit of 2MB"
													);
													return false;
												}

												setComponentValues({
													...componentValues,
													[component.name]: file,
												});
												const reader = new FileReader();
												if (file) {
													reader.readAsDataURL(file);
												}
												reader.onload = (
													readerEvent
												) => {
													component.setValue(
														readerEvent!.target!.result!.toString()
													);
												};
											}}
											hidden
											name={component.name}
											id={component.name}
											className="w-full bg-black"
										/>
										{!component.value && (
											<button
												onClick={() =>
													component.ref.current?.click()
												}
												className="flex flex-col justify-center items-center space-y-2"
											>
												<Image
													src="/component.svg"
													alt="hero"
													width={40}
													height={40}
													className="size-8"
												/>
											</button>
										)}
										{component.value && (
											<>
												<Image
													src={component.value}
													alt="mian-picture"
													width={200}
													height={200}
													className="my-auto aspect-auto h-[98%] rounded-xl"
												/>
												<button
													type="submit"
													onClick={() =>
														component.setValue("")
													}
													className="absolute right-1 top-1 p-1 rounded-lg bg-red-500 px-2 text-xs text-white"
												>
													X
												</button>
											</>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
					<div>
						<h6 className="text-4xl font-black">Links:</h6>
						<div className="flex flex-col gap-y-4 pt-4">
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
						className="w-fit rounded-lg ml-auto mt-auto text-lg font-medium h-12 hover:bg-pink bg-pink border-2 shadow-sm shadow-pink-800 border-pink-800 text-pink-800"
					>
						Approve and Launch
					</Button>
				</div>
			</form>
		</Form>
	);
}
