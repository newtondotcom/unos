import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, TrendingUp, Shield } from "lucide-react";

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
            le contrôle de leur système d'information tout en bénéficiant d'une solution clé en main.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {audiences.map((audience, index) => (
            <Card key={index} className={`shadow-card hover-lift transition-all duration-300 animate-scale-in animate-delay-${(index + 1) * 200}`}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{audience.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {audience.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="w-4 h-4 text-primary-blue" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center animate-fade-in animate-delay-500">
          <Button variant="sovereign" size="lg" className="shadow-elegant hover-lift">
            Découvrir Nos Offres
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;