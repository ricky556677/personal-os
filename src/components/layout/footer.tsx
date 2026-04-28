export function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.06]">
      <div className="max-w-container mx-auto px-6 text-center">
        <p className="text-[12px] font-normal leading-[1.50] tracking-[0.4px] text-text-disabled">
          &copy; {new Date().getFullYear()} Personal OS
        </p>
      </div>
    </footer>
  );
}
