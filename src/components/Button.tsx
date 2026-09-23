import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  asChild?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-graphite)] text-[var(--color-cream)] hover:bg-[var(--color-warm-black)] border border-transparent",
  secondary:
    "bg-[var(--color-gold)] text-[var(--color-warm-black)] hover:bg-[var(--color-gold-muted)] border border-transparent",
  outline:
    "bg-transparent text-[var(--color-text)] border border-[var(--color-graphite)]/30 hover:border-[var(--color-graphite)] hover:bg-[var(--color-graphite)]/5",
  ghost:
    "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-graphite)]/5 border border-transparent",
  text: "bg-transparent text-[var(--color-text)] hover:text-[var(--color-gold-muted)] border-none underline-offset-4 hover:underline p-0",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm tracking-wide",
  lg: "px-8 py-4 text-base tracking-wide",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      fullWidth,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-sans font-medium uppercase transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)] disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
