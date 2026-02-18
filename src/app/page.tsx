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
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <TechStack />
      <ProjectsBento />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
