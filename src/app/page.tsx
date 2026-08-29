import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ServicesSection } from "@/components/home/ServicesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { AreasSection } from "@/components/home/AreasSection";
import { GuidesSection } from "@/components/home/GuidesSection";
import { CTASection } from "@/components/shared/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Pushing Pressure LTD | Pressure Washing & Cleaning Service",
  description:
    "Professional exterior cleaning for homes, estates, communal areas and commercial properties across London, Surrey, Essex and Kent. Get a free quote today.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <BeforeAfterSection />
      <AreasSection />
      <GuidesSection />
      <CTASection />
    </>
  );
}
