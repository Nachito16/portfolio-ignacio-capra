"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  copiedLabel: string;
};

export function CopyEmailButton({ email, label, copiedLabel }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the mailto link remains available.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex size-11 shrink-0 items-center justify-center rounded-[9px] border border-white/20 text-dim-2 transition-colors duration-[180ms] hover:border-acid hover:text-acid"
    >
      {copied ? <CheckIcon className="size-[18px] text-acid" /> : <CopyIcon className="size-[18px]" />}
      <span className="sr-only">{copied ? copiedLabel : label}</span>
      <span aria-live="polite" className="sr-only">
        {copied ? copiedLabel : ""}
      </span>
    </button>
  );
}
