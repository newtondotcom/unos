import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Cpu, Building2, Lock, Puzzle, HeadphonesIcon } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Authentification multi-facteurs et architecture sécurisée par design pour protéger vos données d'entreprise."
    },
    {
      icon: Puzzle,
      title: "Modularité Accrue",
      description: "Architecture modulaire permettant aux entreprises de personnaliser leur environnement selon leurs besoins spécifiques."
    },
    {
      icon: Building2,
      title: "Bureautique Complète",
      description: "Suite bureautique, navigateur, messagerie, emails - tout l'écosystème nécessaire pour votre entreprise."
    },
    {
      icon: Cpu,
      title: "Performance Optimisée",
      description: "Conçu pour fonctionner efficacement même sur des configurations matérielles modestes."
    },
    {
      icon: Lock,
      title: "Souveraineté Numérique",
      description: "Solution 100% française pour réduire la dépendance aux GAFAM et reprendre le contrôle de votre SI."
    },
    {
      icon: HeadphonesIcon,
      title: "Support Inclus",
      description: "Support technique français inclus avec formation et accompagnement dans la migration."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Une Suite Complète pour Votre Entreprise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            UnOS réunit le meilleur de l'open source dans une distribution managée, 
            accessible et pensée pour les besoins des entreprises françaises.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`shadow-card hover-lift transition-all duration-300 bg-gradient-card animate-scale-in animate-delay-${(index + 1) * 100}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mb-4 animate-float">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;