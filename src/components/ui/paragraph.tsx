import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg";
  align?: "left" | "center" | "right" | "justify";
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  className,
  size = "base",
  align = "left",
}) => {
  const sizes = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };

  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  return (
    <p
      className={cn(
        "text-stone-950  leading-relaxed",
        sizes[size],
        alignments[align],
        className
      )}
    >
      {children}
    </p>
  );
};
