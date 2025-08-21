import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import TargetAudience from "@/components/TargetAudience";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Statistics />
      <TargetAudience />
      <CallToAction />
    </main>
  );
};

export default Index;
