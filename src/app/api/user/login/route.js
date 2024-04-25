import { NextResponse } from "next/server";
import prisma from "../../../../server/prisma";
import { addUser, userSignIn } from "../../../../services/userService";

export async function POST(request) {
  try {
    const req = await request.json();
    const user = await userSignIn(req);
    return NextResponse.json({ ...user }, { status: user.code });
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImlhdCI6MTcxMjc4MTY3Nn0.kKO1BU65Bt_tL1QRCvZjznEitzcF6zKc_7pbLbtEQog
