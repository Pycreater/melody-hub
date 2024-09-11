import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prismaClient } from "../lib/db";
// @ts-ignore
import youtubesearchapi from "youtube-search-api";

const CreateStreamSchema = z.object({
  creatorId: z.string(),
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

    const res = await youtubesearchapi.GetVideoDetails(extractedId);

    console.log(res);

    const thumbnails = res.thumbnail.thumbnails;
    thumbnails.sort((a: { width: number }, b: { width: number }) =>
      a.width < b.width ? -1 : 1
    );

    const result = await prismaClient.stream.create({
      data: {
        userId: data.creatorId,
        url: data.url,
        extractedId,
        type: "Youtube",
        title: res.title,
        smallImg:
          thumbnails.length > 1
            ? thumbnails[thumbnails.length - 2].url
            : thumbnails[thumbnails.length - 1].url,
        bigImage: thumbnails[thumbnails.length - 1].url ?? " ",
      },
    });
    console.log(result);
    return NextResponse.json(
      {
        message: "Stream Created Successfully",
        id: data.creatorId,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);

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

export async function GET(req: NextRequest) {
  const creatorId = req.nextUrl.searchParams.get("creatorId");
  const streams = await prismaClient.stream.findMany({
    where: {
      userId: creatorId ?? "",
    },
  });

  return NextResponse.json({
    streams,
  });
}
