import type { Metadata, Viewport } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { RevealObserver } from "@/components/layout/RevealObserver";
import { isLocale, localeCodes, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { alternatesFor, siteConfig } from "@/lib/site";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

type LayoutParams = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const title = siteConfig.title[locale];
  const description = siteConfig.description[locale];
  const ogLocale = locales.find((item) => item.code === locale)!.ogLocale;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s | ${siteConfig.name}` },
    description,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      type: "website",
      locale: ogLocale,
      alternateLocale: locales.filter((item) => item.code !== locale).map((item) => item.ogLocale),
      url: alternatesFor(locale, "/").canonical,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
};

export default async function RootLayout({ children, params }: LayoutParams & { children: React.ReactNode }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${manrope.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JavaScript runs. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh">
        <div id="top" className="site-shell">
          <a
            href="#main"
            className="sr-only z-[200] rounded-[9px] bg-ink px-4 py-3 text-[13px] font-bold text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            {dict.actions.skipToContent}
          </a>
          <Header locale={locale} />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer locale={locale} />
        </div>
        <RevealObserver />
      </body>
    </html>
  );
}
