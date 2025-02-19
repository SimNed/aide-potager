import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

type SectionProps = {
  variant?: "sm" | "md" | "lg" | "full";
  className?: string;
};

export default function Section({
  variant = "md",
  className,
  children,
}: PropsWithChildren<SectionProps>) {
  const variantStyles = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    full: "w-full",
  };

  return (
    <div className={cn("m-auto flex", variantStyles[variant], className)}>
      {children}
    </div>
  );
}
