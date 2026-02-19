import { SectionReveal } from "@/components/ui/section-reveal"; // Corrected import path
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TechStack } from "@/components/home/TechStack";
import { ProjectsBento } from "@/components/home/ProjectsBento";
import { Pricing } from "@/components/home/Pricing";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <SectionReveal direction="none">
        <Hero />
      </SectionReveal>

      <SectionReveal>
        <Services />
      </SectionReveal>

      <SectionReveal>
        <WhyUs />
      </SectionReveal>

      <SectionReveal direction="right">
        <HowItWorks />
      </SectionReveal>

      <SectionReveal direction="left">
        <TechStack />
      </SectionReveal>

      <SectionReveal>
        <ProjectsBento />
      </SectionReveal>

      <SectionReveal>
        <Pricing />
      </SectionReveal>

      <SectionReveal>
        <Testimonials />
      </SectionReveal>

      <SectionReveal>
        <FAQ />
      </SectionReveal>

      <SectionReveal direction="up" delay={0.2}>
        <CTABanner />
      </SectionReveal>
    </>
  );
}
