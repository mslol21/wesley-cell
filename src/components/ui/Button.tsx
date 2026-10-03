import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-[var(--radius-sm)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variants = {
      primary:
        "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] active:scale-[0.98] shadow-sm hover:shadow",
      secondary:
        "bg-[var(--surface-elevated)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--border-strong)] hover:bg-[#1f2b42] active:scale-[0.98]",
      ghost:
        "bg-transparent text-[var(--foreground-muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-subtle)] active:scale-[0.98]",
      whatsapp:
        "bg-[var(--whatsapp)] text-white hover:bg-[var(--whatsapp-hover)] active:scale-[0.98] font-semibold shadow-sm hover:shadow",
    };

    const sizes = {
      sm: "h-9 px-3.5 text-xs gap-1.5",
      md: "h-11 px-5 text-sm gap-2",
      lg: "h-13 px-6 text-base gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
