import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number?: string;
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  number,
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {(number || label) && (
        <div className="flex items-center gap-4 mb-4">
          {number && (
            <span
              className={cn(
                "text-xs tracking-[0.3em] uppercase",
                light ? "text-[var(--color-gold)]" : "text-[var(--color-gold-muted)]"
              )}
            >
              {number}
            </span>
          )}
          {label && (
            <span
              className={cn(
                "text-xs tracking-[0.25em] uppercase",
                light ? "text-[var(--color-cream)]/50" : "text-[var(--color-text-muted)]"
              )}
            >
              {label}
            </span>
          )}
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-balance",
          light ? "text-[var(--color-cream)]" : "text-[var(--color-text)]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-[var(--color-cream)]/70" : "text-[var(--color-text-muted)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
