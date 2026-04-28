import { TopNav } from "@/components/layout/top-nav";
import { HeroSection } from "@/components/sections/hero-section";
import { IdentitySection } from "@/components/sections/identity-section";
import { AbilitySection } from "@/components/sections/ability-section";
import { RunLogsSection } from "@/components/sections/run-logs-section";
import { KnowledgeSection } from "@/components/sections/knowledge-section";
import { ActionSection } from "@/components/sections/action-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <HeroSection />
        <IdentitySection />
        <AbilitySection />
        <RunLogsSection />
        <KnowledgeSection />
        <ActionSection />
      </main>
      <Footer />
    </>
  );
}
