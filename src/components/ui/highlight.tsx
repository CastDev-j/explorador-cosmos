import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface HighlightProps {
  children: ReactNode;
  className?: string;
  variant?: "indigo" | "yellow" | "green" | "red";
}

export const Highlight: FC<HighlightProps> = ({
  children,
  className,
  variant = "indigo",
}) => {
  const variants = {
    indigo: "bg-indigo-100 text-indigo-700 ",
    yellow: "bg-yellow-100 text-yellow-700",
    green: "bg-green-100 text-green-700 ",
    red: "bg-red-100 text-red-700 ",
  };

  return (
    <mark
      className={cn(
        "px-2 py-1 rounded font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </mark>
  );
};
