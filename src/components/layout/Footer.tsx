import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionaries";

/** Dark mono footer that continues the Contact band (and the Next-project band on project pages). */
export function Footer({ dict }: { dict: Dictionary }) {
  const links = [
    { label: "LinkedIn", href: profile.social.linkedin, external: true },
    { label: "GitHub", href: profile.social.github, external: true },
    { label: "Email", href: `mailto:${profile.email}`, external: false },
  ];
  const linkClass = "transition-colors duration-[180ms] hover:text-acid";

  return (
    <footer className="on-dark bleed flex items-center justify-between gap-6 border-t border-white/10 bg-ink py-7 font-mono text-[9px] tracking-[0.04em] text-dim-3 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-3">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>
        {profile.role} · {profile.location}
      </p>
      <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {links.map(({ label, href, external }) => (
          <li key={label}>
            <a
              href={href}
              className={linkClass}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            >
              {label}
              {external && <span className="sr-only"> (opens in a new tab)</span>}
            </a>
          </li>
        ))}
        <li>
          <a href="#top" className={linkClass}>
            {dict.footer.backToTop} ↑
          </a>
        </li>
      </ul>
    </footer>
  );
}
