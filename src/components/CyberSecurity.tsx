import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, TrendingDown, Eye, EyeOff } from "lucide-react";

const CyberSecurity = () => {
  const visibleCosts = [
    "Enquêtes technique / frais de restauration",
    "Notification client de l'intrusion (RGPD)",
    "Mise en conformité réglementaire (RGPD)",
    "Honoraires d'avocat et frais de justice",
    "Sécurisation des données client post-incident",
    "Relations publiques",
    "Amélioration des dispositifs de cybersécurité"
  ];

  const hiddenCosts = [
    "Augmentation du coût de la dette",
    "Impacts liés à la perturbation ou l'interruption des activités",
    "Érosion du chiffre d'affaires liée à la perte de contrats client",
    "Dépréciation de la valeur de marque",
    "Perte de propriété intellectuelle",
    "Perte de la confiance accordée par le client"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-float">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <AlertTriangle className="w-8 h-8 text-destructive animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Les PME Face aux Cyberattaques
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Les petites et moyennes entreprises sont devenues les cibles privilégiées des cybercriminels. 
            UnOS vous offre une protection renforcée et souveraine.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card hover-lift animate-slide-in-left">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-10 h-10 text-destructive" />
              </div>
              <CardTitle className="text-3xl font-bold text-destructive">60%</CardTitle>
              <p className="text-muted-foreground">
                des victimes d'attaques malveillantes sont des PME
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Les petites entreprises sont souvent plus vulnérables que les grandes entreprises, 
                qui possèdent davantage de ressources pour protéger leur système d'information. 
                Il est plus facile pour un pirate informatique de cibler une PME que de s'attaquer 
                à une grande entreprise du CAC 40.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover-lift animate-slide-in-right animate-delay-200">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-10 h-10 text-destructive" />
              </div>
              <CardTitle className="text-3xl font-bold text-destructive">300K€ - 500K€</CardTitle>
              <p className="text-muted-foreground">
                Coût financier moyen d'une cyberattaque pour une PME
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Pour 54% des PME victimes d'une cyber intrusion, la perte était supérieure à 500K€. 
                Ces chiffres s'appuient sur une étude CISCO de 2018 et représentent un énorme impact 
                financier difficilement surmontable pour les PME.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Costs Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-card hover-lift animate-scale-in animate-delay-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-xl">Coûts Visibles</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Partie émergée de l'iceberg - Coûts financiers les plus connus
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {visibleCosts.map((cost, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {cost}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card hover-lift animate-scale-in animate-delay-400">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                  <EyeOff className="w-5 h-5 text-destructive" />
                </div>
                <CardTitle className="text-xl">Coûts Cachés</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">
                Partie immergée - Coûts financiers cachés ou moins visibles
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {hiddenCosts.map((cost, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    {cost}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in animate-delay-500">
          <div className="bg-gradient-primary text-white p-6 rounded-lg shadow-elegant max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">UnOS : Votre Bouclier Numérique</h3>
            <p className="text-white/90 leading-relaxed">
              Face à ces menaces croissantes, UnOS intègre des solutions de cybersécurité avancées 
              et propose un accompagnement dédié pour protéger votre entreprise contre les cyberattaques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberSecurity;