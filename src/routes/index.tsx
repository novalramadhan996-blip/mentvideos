
import { CTA } from "@/components/site/CTA";
import { Examples } from "@/components/site/Examples";
import { Features } from "@/components/site/Features";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { UseCases } from "@/components/site/UseCases";
import { Why } from "@/components/site/Why";
import { useReveal } from "@/hooks/use-reveal";


function Index() {
  useReveal();
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Examples />
      <UseCases />
      <Why />
      <CTA />
      <Footer />
    </main>
  );
}
export default Index;