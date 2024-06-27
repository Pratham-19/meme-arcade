// pages/api/route.ts

import { NextApiRequest, NextApiResponse } from "next";

// Helper function to get the formatted date
const getFormattedDate = (): string => {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1 and pad with zero if needed
	const day = String(date.getDate()).padStart(2, "0"); // Pad with zero if needed

	return `${year}${month}${day}`;
};

// API route handler
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		try {
			const { prompt } = req.body;

			const response = await fetch(
				"https://venice.ai/api/inference/image",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						prompt: { prompt },
						seed: getFormattedDate(),
						temperature: 0.8,
						aspectRatio: "1:1",
						width: 1024,
						height: 1024,
						cfgScale: 5,
						steps: 30,
						negativePrompt: "",
						safeVenice: true,
						hideWatermark: false,
						modelId: "fluently-xl-final",
					}),
				}
			);

			const data = await response.json();
			console.log(data);

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ error: "Failed to fetch image" });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
};

export default handler;
