import * as React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  as?: React.ElementType;
}

export function Grid({
  columns = 1,
  gap = "md",
  className,
  as: Component = "div",
  ...props
}: GridProps) {
  return (
    <Component
      className={cn(
        "grid",
        {
          "grid-cols-1": columns === 1,
          "grid-cols-1 md:grid-cols-2": columns === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": columns === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": columns === 4,
          "grid-cols-1 md:grid-cols-3 lg:grid-cols-5": columns === 5,
          "grid-cols-1 md:grid-cols-3 lg:grid-cols-6": columns === 6,
          "grid-cols-12": columns === 12,
        },
        {
          "gap-0": gap === "none",
          "gap-4": gap === "sm",
          "gap-6 md:gap-8": gap === "md",
          "gap-8 md:gap-12": gap === "lg",
          "gap-12 md:gap-16 lg:gap-24": gap === "xl",
        },
        className
      )}
      {...props}
    />
  );
}
