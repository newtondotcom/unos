import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, TrendingUp, Shield } from "lucide-react";
import CardFlip from "./kokonutui/card-flip";

const TargetAudience = () => {
  const audiences = [
    {
      icon: Building,
      title: "PME en Croissance",
      description: "Entreprises souhaitant construire un SI modulaire et évolutif sans dépendance aux GAFAM",
      benefits: ["Architecture modulaire", "Coûts maîtrisés", "Support français"]
    },
    {
      icon: Users,
      title: "Entreprises Établies",
      description: "Organisations cherchant à migrer vers une solution souveraine avec accompagnement",
      benefits: ["Migration assistée", "Formation incluse", "Support technique"]
    },
    {
      icon: Shield,
      title: "Secteurs Sensibles",
      description: "Organisations nécessitant un haut niveau de sécurité et de confidentialité des données",
      benefits: ["Sécurité renforcée", "Conformité", "Souveraineté"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Qui Peut Bénéficier d'UnOS ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            UnOS s'adresse principalement aux PME françaises qui souhaitent reprendre 
            le contrôle de leur système d'information tout en bénéficiant d'une solution clé en main. Cependant, par sa modularité, il permet également aux grandes entreprises et aux secteurs sensibles de migrer vers une solution souveraine et sécurisée.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {audiences.map((audience, index) => (
            < CardFlip key={index} title={audience.title} description={audience.description} subtitle={audience.description} features={audience.benefits}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;