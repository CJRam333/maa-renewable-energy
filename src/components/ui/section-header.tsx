import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  tagline?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  tagline,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        {
          "text-left items-start": align === "left",
          "text-center items-center mx-auto": align === "center",
          "text-right items-end ml-auto": align === "right",
        },
        className
      )}
      {...props}
    >
      {tagline && (
        <span className="text-label">
          {tagline}
        </span>
      )}
      <h2 className="text-balance">{title}</h2>
      {description && (
        <p
          className={cn("text-body-lg text-pretty max-w-2xl", {
            "mx-auto": align === "center",
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
}
