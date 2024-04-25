import { NextResponse } from "next/server";
import { authenticateUser } from "../../../../services/userService";

export async function POST(request) {
  try {
    const req = await request.json();
    const { token } = req;
    const isUserVerified = await authenticateUser(token);
    if (isUserVerified) {
      return NextResponse.json(
        { body: { userVerified: true } },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { body: { userVerified: false } },
        { status: 401 }
      );
    }
  } catch (e) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6ZmFsc2UsImlhdCI6MTcxMjc4MTY3Nn0.kKO1BU65Bt_tL1QRCvZjznEitzcF6zKc_7pbLbtEQog
