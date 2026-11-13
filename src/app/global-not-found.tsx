import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import { headers } from "next/headers";
import { NotFoundContent } from "@/components/layout/NotFoundContent";
import { defaultLocale, isLocale, LOCALE_HEADER } from "@/i18n/config";
import "./globals.css";

/*
 * Site-wide 404. The root layout lives under app/[locale], so a regular not-found.js can't be
 * composed for unmatched URLs; Next renders this standalone document instead (see next.config.ts).
 * It receives no params, so src/proxy.ts passes the locale in a request header.
 */

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-manrope", display: "swap" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-dm-mono", display: "swap" });

export const metadata: Metadata = {
  title: "404 — Ignacio Capra",
  robots: { index: false },
};

export default async function GlobalNotFound() {
  const requested = (await headers()).get(LOCALE_HEADER) ?? "";
  const locale = isLocale(requested) ? requested : defaultLocale;

  return (
    <html lang={locale} className={`${manrope.variable} ${dmMono.variable}`}>
      <body className="min-h-dvh">
        <div className="site-shell">
          <NotFoundContent locale={locale} />
        </div>
      </body>
    </html>
  );
}
