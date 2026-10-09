import { cn } from "@/lib/cn";

/** 1180px content column: 48px total gutter, 32px below 600px. */
export function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-[min(1180px,calc(100%-48px))] max-[600px]:w-[calc(100%-32px)]", className)}>
      {children}
    </div>
  );
}
