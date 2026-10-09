import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowLeftIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <Container className="flex min-h-[80dvh] flex-col justify-center pt-[150px] pb-[120px]">
      <p className="font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
        <span className="text-ink">404</span> / Not found
      </p>
      <h1 className="mt-5 text-[clamp(50px,6.1vw,88px)] leading-[0.98] font-semibold tracking-[-0.065em] text-ink">
        Page not found<span className="text-acid-deep">.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg leading-[1.65] text-body">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10">
        <ButtonLink href="/" icon={<ArrowLeftIcon className="size-4" />}>
          Back to home
        </ButtonLink>
      </div>
    </Container>
  );
}
