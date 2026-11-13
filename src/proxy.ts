import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, LOCALE_HEADER, localeCodes, stripLocale } from "@/i18n/config";

/**
 * Locale routing. English lives at "/" (no prefix) and Spanish at "/es".
 * - "/es/…" passes through to app/[locale] with locale "es".
 * - "/en/…" redirects to the unprefixed URL, so each page has a single English address.
 * - Every other path is rewritten internally to "/en/…".
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const headers = new Headers(request.headers);
  headers.set(LOCALE_HEADER, stripLocale(pathname).locale);

  const hasLocale = localeCodes.some((code) => pathname === `/${code}` || pathname.startsWith(`/${code}/`));
  if (hasLocale) return NextResponse.next({ request: { headers } });

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  // Skip Next internals and any path with a file extension (images, CV PDFs, sitemap.xml, icon.svg…).
  matcher: ["/((?!_next/|.*\\.[^/]+$).*)"],
};
