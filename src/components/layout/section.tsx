import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Vertical padding sizing based on CSS variables */
  spacing?: "none" | "sm" | "md" | "lg";
}

export function Section({
  children,
  className,
  spacing = "md",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative w-full",
        {
          "py-0": spacing === "none",
          "py-[var(--spacing-section-sm)]": spacing === "sm",
          "py-[var(--spacing-section-md)]": spacing === "md",
          "py-[var(--spacing-section-lg)]": spacing === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
