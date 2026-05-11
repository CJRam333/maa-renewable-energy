import * as React from "react";
import { cn } from "@/lib/utils";

import { ArrowRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  withArrow?: boolean;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", withArrow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
          {
            /* Variants */
            "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-[var(--color-primary-hover)] shadow-sm hover:shadow-md":
              variant === "primary",
            "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] hover:bg-[var(--color-secondary-hover)] shadow-sm hover:shadow-md":
              variant === "secondary",
            "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-surface-hover)] text-[var(--color-foreground)]":
              variant === "outline",
            "hover:bg-[var(--color-surface-hover)] text-[var(--color-foreground)]":
              variant === "ghost",
            "text-[var(--color-primary)] underline-offset-4 hover:underline":
              variant === "link",

            /* Sizes */
            "h-9 px-4 py-2": size === "sm",
            "h-11 px-6 py-2": size === "md",
            "h-12 px-8 py-3 text-base": size === "lg",
            "h-11 w-11": size === "icon",
          },
          className
        )}
        {...props}
      >
        {children}
        {withArrow && (
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
