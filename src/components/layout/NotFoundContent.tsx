import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowLeftIcon } from "@/components/ui/Icons";
import { localePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * 404 content for app/global-not-found.tsx, which bypasses the [locale] layout.
 * The locale comes from the request header set by src/proxy.ts.
 */
export function NotFoundContent({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <>
      <header className="fixed top-[18px] left-1/2 z-[100] w-[min(1180px,calc(100%-36px))] -translate-x-1/2 max-[600px]:top-[10px] max-[600px]:w-[calc(100%-20px)]">
        <div className="flex h-16 items-center pl-[22px]">
          <Link href={localePath(locale, "/")} aria-label={dict.nav.home} className="text-xl font-extrabold tracking-[-0.06em] text-ink">
            IC<span className="text-acid-deep">.</span>
          </Link>
        </div>
      </header>
      <main>
        <Container className="flex min-h-dvh flex-col justify-center pt-[120px] pb-[120px]">
          <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
            <span className="text-ink">404</span> / {dict.notFound.label}
          </p>
          <h1 className="mt-5 text-[clamp(50px,6.1vw,88px)] leading-[0.98] font-semibold tracking-[-0.065em] text-ink">
            {dict.notFound.title}
            <span className="text-acid-deep">.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-[1.65] text-body">{dict.notFound.text}</p>
          <div className="mt-10">
            <ButtonLink href={localePath(locale, "/")} icon={<ArrowLeftIcon className="size-4" />}>
              {dict.notFound.back}
            </ButtonLink>
          </div>
        </Container>
      </main>
    </>
  );
}
