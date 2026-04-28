import { ReactNode } from "react";

export function SectionWrapper({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-14 py-section-sm md:py-section ${className}`}>
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
