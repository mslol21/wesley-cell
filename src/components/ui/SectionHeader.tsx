import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-8 md:mb-12",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[var(--primary)] mb-2.5">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-[1.2]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-[var(--foreground-muted)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
