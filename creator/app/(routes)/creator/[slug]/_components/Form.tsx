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
import { useActiveWalletConnectionStatus } from "thirdweb/react";
import { useRef, useState } from "react";
import Image from "next/image";
import { unbounded } from "@/components/Fonts";
import { toast } from "sonner";

const formSchema = z.object({
  picture: z.instanceof(File).optional(),
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long" })
    .max(50, { message: "Title must be at most 50 characters long" }),
  date: z.string().optional(),
  amount: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Amount must be a valid number",
  }),
});
export default function OnboardForm() {
  const [data, setData] = useState();

  const status = useActiveWalletConnectionStatus();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      date: "",
      amount: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (status !== "connected") {
      toast.error("Please connect your wallet");
      return;
    }
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
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-x-10 text-purple-800"
      >
        <div className={`${unbounded.className} w-full flex flex-col gap-y-8`}>
          <div className="flex flex-col gap-y-6">
            <p>{data}</p>
            <h5 className={` text-4xl font-black text-purple-800`}>
              Add character:
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
                              aria-roledescription={`file ${i + 1} containing ${
                                file.name
                              }`}
                            >
                              <Image
                                src={URL.createObjectURL(file)}
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
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose game over date:</FormLabel>
                    <FormDescription>
                      *if none game will be over when rewards are over
                    </FormDescription>
                    <FormControl>
                      <Input
                        className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
                        placeholder="DD MM YYYY"
                        type="date"
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
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Rewards*</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
                      placeholder="Type amount (value in $USDC)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="maxplayers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Allowed Players:*</FormLabel>
                  <FormControl>
                    <Input
                      className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
                      placeholder="Type amount (value in $COINTICKER)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <Button
            type="submit"
            className="w-fit rounded-lg text-lg mt-auto font-medium h-12 hover:bg-pink bg-pink border-2 shadow-sm shadow-pink-800 border-pink-800 text-pink-800"
          >
            Approve and Launch
          </Button>
        </div>
        <div className="w-full flex flex-col gap-y-8">
          {/* <div className="flex flex-col gap-y-6 border-4 border-black p-6 rounded-xl">
						<h5
							className={`${unbounded.className} text-4xl font-semibold text-cream bg-purple p-4 rounded-xl`}
						>
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
					</div> */}
          <div className={`${unbounded.className}`}>
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
                  title: "Coingecko",
                  placeholder: "Type chart link",
                },
              ].map((link, index) => (
                <div key={index} className="flex flex-col gap-y-2">
                  <p className="text-base">{link.title}</p>
                  <Input
                    className="bg-pearl border border-purple-grey-800 ring-none focus-visible:ring-none"
                    placeholder={link.placeholder}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
