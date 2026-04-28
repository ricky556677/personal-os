import Link from "next/link";

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "cta";
}

export function PillButton({ children, href, onClick, variant = "default" }: PillButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-pill font-button transition-opacity duration-300 hover:opacity-60";
  const styles =
    variant === "cta"
      ? "bg-white/81 text-button-foreground hover:bg-white"
      : "bg-transparent text-text-primary";

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles}`}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
