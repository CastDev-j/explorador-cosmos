import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TitleProps {
  children: ReactNode;
  className?: string;
  variant?: "h1" | "h2" | "h3";
  align?: "left" | "center" | "right";
}

export const Title: FC<TitleProps> = ({
  children,
  className,
  variant = "h1",
  align = "left",
}) => {
  const variants = {
    h1: "text-4xl md:text-5xl lg:text-6xl",
    h2: "text-3xl md:text-4xl lg:text-5xl",
    h3: "text-2xl md:text-3xl lg:text-4xl",
  };

  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const Component = variant;

  return (
    <Component
      className={cn(
        "font-bold text-stone-950 tracking-tight",
        variants[variant],
        alignments[align],
        className
      )}
    >
      {children}
    </Component>
  );
};
