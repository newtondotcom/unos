import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-unos.jpg";
import { Shield, Cpu, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-30">
        <img 
          src={heroImage} 
          alt="UnOS - Système d'exploitation français unifié" 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-white/90 font-medium">Souveraineté Numérique Française</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            UnOS
            <span className="block text-4xl md:text-5xl text-blue-200 font-normal mt-2">
              Unified Operating System
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Le système d'exploitation français qui unifie des solutions open source pour offrir 
            aux entreprises une suite bureautique complète, sécurisée et souveraine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-sovereign-navy hover:bg-white/90">
              Découvrir UnOS
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Demander une démo
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-white/70">Open Source</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">🇫🇷</div>
              <div className="text-white/70">Made in France</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-white/70">GAFAM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;