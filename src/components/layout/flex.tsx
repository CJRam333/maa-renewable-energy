import * as React from "react";
import { cn } from "@/lib/utils";

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  as?: React.ElementType;
}

export function Flex({
  direction = "row",
  align = "start",
  justify = "start",
  wrap = "nowrap",
  gap = "none",
  className,
  as: Component = "div",
  ...props
}: FlexProps) {
  return (
    <Component
      className={cn(
        "flex",
        {
          "flex-row": direction === "row",
          "flex-col": direction === "col",
          "flex-row-reverse": direction === "row-reverse",
          "flex-col-reverse": direction === "col-reverse",
        },
        {
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
          "items-stretch": align === "stretch",
          "items-baseline": align === "baseline",
        },
        {
          "justify-start": justify === "start",
          "justify-center": justify === "center",
          "justify-end": justify === "end",
          "justify-between": justify === "between",
          "justify-around": justify === "around",
          "justify-evenly": justify === "evenly",
        },
        {
          "flex-nowrap": wrap === "nowrap",
          "flex-wrap": wrap === "wrap",
          "flex-wrap-reverse": wrap === "wrap-reverse",
        },
        {
          "gap-0": gap === "none",
          "gap-2 md:gap-4": gap === "sm",
          "gap-4 md:gap-6": gap === "md",
          "gap-6 md:gap-8": gap === "lg",
          "gap-8 md:gap-12": gap === "xl",
        },
        className
      )}
      {...props}
    />
  );
}
