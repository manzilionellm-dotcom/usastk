import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APEX = "iptvforfirestickusa.com";

export function middleware(req: NextRequest) {
  const host = (req.headers.get("x-forwarded-host") || req.headers.get("host") || "")
    .split(",")[0]
    .trim()
    .toLowerCase();

  const url = req.nextUrl.clone();
  const path = url.pathname;

  // blog.setup.faq subdomains rewrite to existing apex routes.
  // Canonical tags on pages already point at https://iptvforfirestickusa.com/...
  if (host === `blog.${APEX}`) {
    if (path === "/") url.pathname = "/blog";
    else if (!path.startsWith("/blog")) url.pathname = `/blog${path}`;
    return NextResponse.rewrite(url);
  }
  if (host === `setup.${APEX}`) {
    if (path === "/") url.pathname = "/devices";
    else if (path === "/firestick" || path.startsWith("/devices") || path.startsWith("/firestick")) {
      return NextResponse.next();
    } else {
      url.pathname = `/devices${path === "/" ? "" : path}`;
      return NextResponse.rewrite(url);
    }
  }
  if (host === `faq.${APEX}`) {
    if (path === "/") url.pathname = "/faq";
    else if (!path.startsWith("/faq")) url.pathname = `/faq${path}`;
    return NextResponse.rewrite(url);
  }

  const res = NextResponse.next();

  if (host.endsWith(".vercel.app") || path.startsWith("/ops")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
