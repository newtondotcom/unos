import heroImage from "@/assets/hero-unos.jpg";
import { Shield, Cpu, Building2 } from "lucide-react";
import GradientButton from "@/components/kokonutui/gradient-button";
import { FlickeringGrid } from "./magicui/flickering-grid";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      
      <div className="absolute inset-0 bg-black/20 h-full" > 
        <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        width={1600}
      />
      </div>
      <div className="absolute right-0 top-0 h-full w-full opacity-30">
        <img 
          src={heroImage} 
          alt="UnOS - Système d'exploitation français unifié" 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-float">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-float animate-delay-100">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-float animate-delay-200">
                <Building2 className="w-4 h-4 text-white" />
              </div>
            </div>
            <span className="text-white/90 font-medium">Pionnier de la Souveraineté Numérique Française</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-in-left animate-delay-200">
            UnOS
            <span className="block text-4xl md:text-5xl text-blue-200 font-normal mt-2">
              <span className="font-bold">Un</span> seul <span className="font-bold">OS</span> pour les entreprises françaises
            </span>
          </h1>
          
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-in-left animate-delay-300">
              Le système d'exploitation français qui unifie des solutions open source pour offrir 
              aux entreprises une suite bureautique complète, sécurisée et souveraine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left animate-delay-400">
              <Link to="/configurateur">
                <GradientButton label={"Configurateur & Devis"} variant="emerald" />
              </Link>
              <GradientButton label={"Demander une démo"} variant="purple" />
              <Link to="/details">
                <GradientButton label={"Voir nos choix technologiques"} variant="orange" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-12 pt-8 border-t border-white/20 animate-fade-in animate-delay-500">
            <div className="animate-scale-in animate-delay-100">
              <div className="text-2xl font-medium text-white">Pensé et créé en France, par des français, pour des français 🇫🇷🥐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;