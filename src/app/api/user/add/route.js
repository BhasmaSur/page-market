import { NextResponse } from "next/server";
import prisma from "../../../../server/prisma";

export async function POST(request) {
  try {
    const req = await request.json();
    await prisma.user.create({
      data: {
        ...req,
      },
    });
    return NextResponse.json({ body: { status: true } }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
