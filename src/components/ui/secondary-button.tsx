import Link from "next/link";

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export function SecondaryButton({ children, href, onClick }: SecondaryButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-work bg-transparent text-text-primary font-button border border-white/[0.1] transition-opacity duration-300 hover:opacity-60";

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
