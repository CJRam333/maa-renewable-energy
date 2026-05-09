import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
