import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "acid" | "ghost-dark";
type Size = "sm" | "md";

const base =
  "group/button inline-flex items-center justify-center rounded-[9px] border font-bold whitespace-nowrap transition-[color,background-color,border-color,transform] duration-[180ms] ease-in-out";

const variants: Record<Variant, string> = {
  primary: "border-ink bg-ink text-paper hover:-translate-y-0.5 hover:border-acid hover:bg-acid hover:text-ink",
  secondary: "border-line-strong bg-transparent text-ink hover:border-ink",
  acid: "border-acid bg-acid text-ink hover:-translate-y-0.5 hover:border-paper hover:bg-paper",
  "ghost-dark": "border-white/20 bg-transparent text-paper hover:border-white/50 hover:bg-white/[0.04]",
};

const sizes: Record<Size, string> = {
  sm: "h-10 gap-[9px] px-4 text-[13px]",
  md: "min-h-12 gap-2.5 px-5 text-[13px]",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  /** Marks the link as a file download. */
  download?: boolean;
  icon?: ReactNode;
  /** Places the icon after the label. */
  iconAfter?: boolean;
  className?: string;
  "aria-label"?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  download,
  icon,
  iconAfter,
  className,
  ...rest
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon && !iconAfter && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconAfter && (
        <span className="shrink-0 transition-transform duration-[180ms] group-hover/button:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (external || download || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...(download && { download: "" })}
        {...rest}
      >
        {content}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
