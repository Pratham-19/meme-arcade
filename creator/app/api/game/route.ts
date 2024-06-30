import { NextResponse } from "next/server";
import prisma from "@/prisma";
import { z } from "zod";

const gameSchema = z.object({
  title: z.string().min(2).max(50),
  img: z.string().optional(),
  slug: z.string().min(2).max(50),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, img, slug } = gameSchema.parse(body);

    const game = await prisma.game.create({
      data: {
        title,
        img,
        slug,
      },
    });

    return NextResponse.json(game, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    console.error("Error creating game:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
