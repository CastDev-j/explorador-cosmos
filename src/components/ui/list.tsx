import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ListProps {
  children: ReactNode;
  className?: string;
  ordered?: boolean;
  variant?: "default" | "indigo" | "none";
}

export const List: FC<ListProps> = ({
  children,
  className,
  ordered = false,
  variant = "default",
}) => {
  const variants = {
    default: ordered ? "list-decimal list-inside" : "list-disc list-inside",
    indigo: ordered
      ? "list-decimal list-inside marker:text-indigo-500 marker:font-bold"
      : "list-disc list-inside marker:text-indigo-500",
    none: "list-none",
  };

  const Component = ordered ? "ol" : "ul";

  return (
    <Component
      className={cn("space-y-2 text-stone-950 ", variants[variant], className)}
    >
      {children}
    </Component>
  );
};

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

export const ListItem: FC<ListItemProps> = ({ children, className }) => {
  return <li className={cn("leading-relaxed", className)}>{children}</li>;
};
