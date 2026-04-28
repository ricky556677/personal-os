export function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="font-mono text-[14px] font-medium leading-[1.60] tracking-[0.3px] text-text-secondary bg-surface-100 border border-white/[0.06] rounded-input p-4">
      {children}
    </pre>
  );
}
