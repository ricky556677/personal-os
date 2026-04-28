export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 bg-surface-card rounded-work text-[12px] font-medium leading-[1.33] tracking-normal text-text-primary">
      {children}
    </span>
  );
}
