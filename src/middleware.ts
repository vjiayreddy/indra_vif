import { APP_ROUTES } from "@crema/constants/AppRoutes";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "next-auth/react";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const requestForNextAuth = {
    headers: {
      cookie: request.headers.get("cookie") ?? undefined,
    },
  };
  const session = await getSession({ req: requestForNextAuth });
  if (session && (url.pathname === APP_ROUTES.signin || url.pathname === "/")) {
    return NextResponse.redirect(new URL(APP_ROUTES.home, request.url));
  }
  if (!session && url.pathname !== APP_ROUTES.signin) {
    return NextResponse.redirect(new URL(APP_ROUTES.signin, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)"],
};
