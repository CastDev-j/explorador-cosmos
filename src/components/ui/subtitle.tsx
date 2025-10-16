import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SubtitleProps {
  children: ReactNode;
  className?: string;
  variant?: "h4" | "h5" | "h6";
  align?: "left" | "center" | "right";
}

export const Subtitle: FC<SubtitleProps> = ({
  children,
  className,
  variant = "h4",
  align = "left",
}) => {
  const variants = {
    h4: "text-xl md:text-2xl",
    h5: "text-lg md:text-xl",
    h6: "text-base md:text-lg",
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
        "font-semibold text-stone-950",
        variants[variant],
        alignments[align],
        className
      )}
    >
      {children}
    </Component>
  );
};
