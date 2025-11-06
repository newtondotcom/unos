import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import CyberSecurity from "@/components/CyberSecurity";
import TargetAudience from "@/components/TargetAudience";
import CallToAction from "@/components/CallToAction";
import OpenSourceAudits from "@/components/OpenSourceAudits";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Statistics />
      <CyberSecurity />
      <OpenSourceAudits />
      <TargetAudience />
      <CallToAction />
    </main>
  );
};

export default Index;
