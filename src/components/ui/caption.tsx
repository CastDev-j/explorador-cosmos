import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CaptionProps {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}

export const Caption: FC<CaptionProps> = ({
  children,
  className,
  align = "center",
}) => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <figcaption
      className={cn(
        "text-xs md:text-sm text-stone-600 italic mt-2",
        alignments[align],
        className
      )}
    >
      {children}
    </figcaption>
  );
};
