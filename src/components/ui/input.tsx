import type { FC, InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  fullWidth?: boolean;
}

export const Input: FC<InputProps> = ({
  className,
  error = false,
  fullWidth = true,
  ...props
}) => {
  return (
    <input
      className={cn(
        "px-3 py-2 border rounded-md text-sm transition-colors",
        "text-stone-950 ",
        "bg-white ",
        "border-stone-300 ",
        "placeholder:text-stone-400 ",
        "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        error && "border-red-500 focus:ring-red-500",
        fullWidth && "w-full",
        className
      )}
      {...props}
    />
  );
};
