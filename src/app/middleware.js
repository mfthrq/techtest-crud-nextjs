// Middleware to protect routes
import { NextResponse } from "next/server";

export function middleware(req) {
    const isLoggedIn = req.cookies.get("@isLoggedIn") === "true";
    const url = req.nextUrl.clone();

    if (!isLoggedIn && url.pathname !== "/login") {
        url.pathname = "/login";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/crud/:path*"], // Define protected routes
};
