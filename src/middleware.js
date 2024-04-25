import { NextResponse } from "next/server";
import { USER } from "./constants/messages";
import { OPERATION } from "./constants/controllers";
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)']
// }

const protectedPages = ["page/dashboard", "api/user"];
const notProtectedApis = ["api/user/add", "api/user/login", "api/user/auth"];
const API = "api";
const AUTH_HEADER = "Authorization";
const TOKEN_PREFIX = "Bearer ";

export async function middleware(req) {
  let storedToken = req.cookies.get("jwtToken");
  let url = req.url;

  //protected pages
  if (
    !storedToken &&
    !url.includes(API) &&
    protectedPages.some((pPage) => url.includes(pPage))
  ) {
    return NextResponse.redirect(new URL("/page/login", req.url));
  }

  if (
    storedToken &&
    !url.includes(API) &&
    protectedPages.some((pPage) => url.includes(pPage))
  ) {
    const authToken = storedToken.value.split(TOKEN_PREFIX)[1];
    const apiUrl = `${req.nextUrl.origin}/api/user/${OPERATION.AUTHENTICATE}`;
      const userAuthResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          token: authToken,
        }),
      });

      if (userAuthResponse.status === 200) {
        NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/page/login", req.url));
      }
  }

  //protected apis
  if (
    url.includes(API) &&
    !notProtectedApis.some((pApi) => url.includes(pApi))
  ) {
    const requestHeaders = new Headers(req.headers);
    if (requestHeaders.has(AUTH_HEADER)) {
      const authToken = requestHeaders.get(AUTH_HEADER).split(TOKEN_PREFIX)[1];
      const apiUrl = `${url}/${OPERATION.AUTHENTICATE}`;
      const userAuthResponse = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          token: authToken,
        }),
      });

      if (userAuthResponse.status === 200) {
        NextResponse.next();
      } else {
        return NextResponse.json(
          { error: USER.USER_WRONG_CREDS },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        { error: USER.USER_JWT_MISSING },
        { status: 401 }
      );
    }
  }
  return NextResponse.next();
}
