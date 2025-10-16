import type { FC, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface QuoteProps {
  children: ReactNode;
  className?: string;
  author?: string;
  cite?: string;
}

export const Quote: FC<QuoteProps> = ({
  children,
  className,
  author,
  cite,
}) => {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-indigo-500 pl-4 py-2 italic text-stone-950 ",
        className
      )}
      cite={cite}
    >
      <p className="text-lg md:text-xl leading-relaxed">"{children}"</p>
      {author && (
        <footer className="mt-2 text-sm text-stone-600  not-italic">
          — {author}
        </footer>
      )}
    </blockquote>
  );
};
