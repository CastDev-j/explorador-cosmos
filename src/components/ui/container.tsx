import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  animated?: boolean;
  padding?: boolean;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  padding = true,
  animated = true,
}) => {
  return (
    <div
      className={cn(
        "container mx-auto",
        padding ? "px-4 py-6 md:px-8 md:py-8" : "px-0",
        animated &&
          "animate-fade animate-once animate-duration-300 animate-ease-in",
        className
      )}
    >
      {children}
    </div>
  );
};
