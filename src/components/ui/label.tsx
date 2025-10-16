import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface LabelProps {
  children: ReactNode;
  className?: string;
  htmlFor?: string;
  required?: boolean;
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  htmlFor,
  required = false,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium text-stone-950  block mb-1",
        className
      )}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};
