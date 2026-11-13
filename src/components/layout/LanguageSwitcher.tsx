"use client";

import { usePathname } from "next/navigation";
import { localePath, locales, stripLocale, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

type LanguageSwitcherProps = {
  current: Locale;
  label: string;
  comingSoonLabel: string;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Switches to the same page in the other language, keeping the current section (#hash).
 * Uses a full navigation so <html lang> and metadata update with the page.
 */
export function LanguageSwitcher({ current, label, comingSoonLabel, tone = "light", className }: LanguageSwitcherProps) {
  const dark = tone === "dark";
  const { path } = stripLocale(usePathname() ?? "/");

  return (
    <ul aria-label={label} className={cn("flex items-center gap-1 font-mono text-[11px] tracking-[0.04em]", className)}>
      {locales.map((locale, index) => {
        const isCurrent = locale.code === current;
        const item = "inline-flex h-7 items-center rounded-[5px] px-1.5";
        const href = localePath(locale.code, path);

        return (
          <li key={locale.code} className="flex items-center gap-1">
            {index > 0 && (
              <span aria-hidden className={dark ? "text-dim-3" : "text-muted"}>
                /
              </span>
            )}
            {isCurrent ? (
              <span lang={locale.code} aria-current="true" className={cn(item, dark ? "text-paper" : "text-ink")}>
                {locale.label}
                <span className="sr-only"> — {locale.name}</span>
              </span>
            ) : locale.enabled ? (
              <a
                href={href}
                lang={locale.code}
                hrefLang={locale.code}
                onClick={(event) => {
                  // Keep the visitor on the same section in the other language.
                  if (window.location.hash) event.currentTarget.href = `${href}${window.location.hash}`;
                }}
                className={cn(item, "transition-colors", dark ? "text-dim-2 hover:text-paper" : "text-muted hover:text-ink")}
              >
                {locale.label}
                <span className="sr-only"> — {locale.name}</span>
              </a>
            ) : (
              <span
                lang={locale.code}
                aria-disabled="true"
                title={`${locale.name} — ${comingSoonLabel}`}
                className={cn(item, "cursor-not-allowed", dark ? "text-dim-3" : "text-muted")}
              >
                {locale.label}
                <span className="sr-only">
                  {" "}
                  — {locale.name} ({comingSoonLabel})
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
