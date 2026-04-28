import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { IDENTITY_TAGS, IDENTITY_METHOD } from "@/lib/constants";

export function IdentitySection() {
  return (
    <SectionWrapper id="identity">
      <div className="max-w-[640px] mx-auto">
        <FadeIn>
          <Badge>Identity Panel</Badge>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-[24px] font-medium leading-normal tracking-[0.2px] text-text-primary mt-6 mb-8">
            AI Content Creator / Product Expresser
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-3 mb-8">
            {IDENTITY_TAGS.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-[18px] font-normal leading-[1.15] tracking-[0.2px] text-text-secondary">
            {IDENTITY_METHOD}
          </p>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
