import prisma from "../../../server/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allUsers = await prisma.user.findMany();
    return NextResponse.json({ body: allUsers }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
