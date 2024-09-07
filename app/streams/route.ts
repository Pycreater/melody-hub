import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "../lib/db";

const CreateStreamSchema = z.object({
  createId: z.string(),
  url: z
    .string()
    .regex(
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|spotify\.com)\/.+$/,
      {
        message: "URL must be from YouTube or Spotify",
      }
    ),
});

export async function POST(req: NextRequest) {
  try {
    const data = CreateStreamSchema.parse(await req.json());

    const extractedId = data.url.split("?v=")[1];

    await prismaClient.stream.create({
      data: {
        userId: data.createId,
        url: data.url,
        extractedId,
        type: "Youtube",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while adding a stream",
      },
      {
        status: 411,
      }
    );
  }
}
