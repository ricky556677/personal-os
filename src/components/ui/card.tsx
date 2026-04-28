import { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-surface-100 border border-white/[0.06] rounded-card transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
