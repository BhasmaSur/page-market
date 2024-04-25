import { NextResponse } from "next/server";
import prisma from "../../../../server/prisma";
import { addUser } from "../../../../services/userService";

export async function POST(request) {
  try {
    const req = await request.json();
    const user = await addUser(req);
    return NextResponse.json({ body: { status: user.message } }, { status: user.code });
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
