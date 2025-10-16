import { type ButtonHTMLAttributes, type FC, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  disabled = false,
  type = "button",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<string, string> = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
    secondary:
      "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
    ghost:
      "bg-transparent text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
  };

  const sizes: Record<string, string> = {
    sm: "text-sm px-2 py-1 rounded",
    md: "text-sm px-3 py-2 rounded-md",
    lg: "text-base px-4 py-3 rounded-md",
  };

  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
