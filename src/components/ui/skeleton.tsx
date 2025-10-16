import React from "react";

type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  circle?: boolean;
  className?: string;
  "aria-label"?: string;
};

const toSizeClass = (v?: string | number) => {
  if (v === undefined) return undefined;
  if (typeof v === "number") return `${v}px`;
  return v;
};

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  rounded = true,
  circle = false,
  className = "",
  "aria-label": ariaLabel = "loading",
}) => {
  const style: React.CSSProperties = {
    width: toSizeClass(width),
    height: toSizeClass(height) || undefined,
  };

  const baseClasses = "bg-indigo-200/70 animate-pulse overflow-hidden";

  const shapeClasses = circle
    ? "rounded-full"
    : rounded
    ? "rounded-md"
    : "rounded-none";

  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={`${baseClasses} ${shapeClasses} ${className}`}
      style={style}
    />
  );
};

export default Skeleton;
