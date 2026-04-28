import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PillButton } from "@/components/ui/pill-button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children";
import { SERVICES } from "@/lib/constants";

export function ActionSection() {
  return (
    <SectionWrapper id="action">
      <FadeIn>
        <Badge>Action Panel</Badge>
        <h2 className="text-[24px] font-medium leading-normal tracking-[0.2px] text-text-primary mt-6 mb-4">
          What I Can Do for You
        </h2>
        <p className="text-[16px] font-medium leading-[1.60] tracking-[0.2px] text-text-muted mb-10">
          把想法变成可传播的内容，把工具变成可复制的工作流。
        </p>
      </FadeIn>

      <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {SERVICES.map((service) => (
          <StaggerItem key={service.title}>
            <Card className="p-8">
              <h3 className="text-[22px] font-normal leading-[1.15] text-text-primary">
                {service.title}
              </h3>
              <p className="text-[16px] font-medium leading-[1.60] tracking-[0.2px] text-text-secondary mt-3">
                {service.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn>
        <div className="text-center">
          <p className="text-[14px] font-medium tracking-[0.2px] text-text-muted mb-6">
            合作方式：内容策划 · AI 工作流搭建 · 产品表达优化
          </p>
          <PillButton variant="cta" href="mailto:hello@example.com">
            Start a Conversation
          </PillButton>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
