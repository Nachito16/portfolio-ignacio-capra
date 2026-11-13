"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, DownloadIcon, MenuIcon } from "@/components/ui/Icons";
import { getNavItems } from "@/data/navigation";
import { getProfile } from "@/data/profile";
import { localePath, stripLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  locale: Locale;
};

/** Floating capsule header. Turns into frosted glass after 24px of scroll; dropdown menu below 900px. */
export function Header({ locale }: HeaderProps) {
  const dict = getDictionary(locale);
  const profile = getProfile(locale);
  const pathname = usePathname();
  const isHome = stripLocale(pathname ?? "/").path === "/";
  const navItems = getNavItems(dict, locale);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!isHome) {
      setActiveId(null);
      return;
    }
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // navItems is derived from static dictionary data.
  }, [isHome]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close the menu on navigation.
  useEffect(() => setMenuOpen(false), [pathname]);

  // Dropdown: focus the first link, close on Escape, outside click or resize to desktop; return focus.
  useEffect(() => {
    if (!menuOpen) return;

    const button = menuButtonRef.current;
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const onChange = () => desktop.matches && setMenuOpen(false);

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onChange);
      button?.focus();
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-[18px] left-1/2 z-[100] w-[min(1180px,calc(100%-36px))] -translate-x-1/2 max-[600px]:top-[10px] max-[600px]:w-[calc(100%-20px)]"
    >
      <div
        className={cn(
          "flex h-16 items-center justify-between gap-6 rounded-2xl border pr-[14px] pl-[22px] transition-[background-color,border-color,box-shadow] duration-[250ms] ease-in-out",
          scrolled || menuOpen
            ? "border-line bg-[rgb(242_243_239/0.86)] shadow-[0_12px_40px_rgba(11,15,20,0.08)] backdrop-blur-[16px]"
            : "border-transparent",
        )}
      >
        <Link href={localePath(locale, "/")} aria-label={dict.nav.home} className="rounded-sm text-xl font-extrabold tracking-[-0.06em] text-ink">
          IC<span className="text-acid-deep">.</span>
        </Link>

        <nav aria-label={dict.nav.primary} className="max-[900px]:hidden">
          <ul className="flex items-center gap-[30px]">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    aria-current={active ? "location" : undefined}
                    className={cn(
                      "group/nav relative inline-block py-1 text-[13px] font-semibold transition-colors duration-[180ms]",
                      active ? "text-ink" : "text-nav hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-0 -bottom-[7px] h-px origin-right bg-ink transition-transform duration-[180ms] ease-in-out group-hover/nav:scale-x-100",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4 max-[900px]:hidden">
          <LanguageSwitcher current={locale} label={dict.nav.language} comingSoonLabel={dict.nav.comingSoon} />
          <ButtonLink href={profile.cvUrl} download size="sm" icon={<DownloadIcon className="size-4" />}>
            {dict.actions.downloadCv}
          </ButtonLink>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="hidden size-[42px] items-center justify-center rounded-[9px] bg-ink text-paper max-[900px]:inline-flex"
        >
          {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          <span className="sr-only">{menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}</span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!menuOpen}
        className="on-dark absolute top-[72px] right-0 left-0 rounded-[14px] bg-ink p-3 shadow-[0_20px_50px_rgba(11,15,20,0.24)] min-[901px]:hidden"
      >
        <nav aria-label={dict.nav.primary}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id} className="border-b border-white/10 last:border-b-0">
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-[9px] px-3 py-[15px] text-[15px] font-semibold text-paper transition-colors hover:text-acid"
                >
                  {item.label}
                  <span aria-hidden className="font-mono text-[11px] text-dim-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-3 flex items-center justify-between gap-3 px-3 pb-1">
          <LanguageSwitcher
            current={locale}
            label={dict.nav.language}
            comingSoonLabel={dict.nav.comingSoon}
            tone="dark"
          />
          <ButtonLink href={profile.cvUrl} download variant="acid" size="sm" icon={<DownloadIcon className="size-4" />}>
            {dict.actions.downloadCv}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
