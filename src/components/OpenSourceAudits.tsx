import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles } from "lucide-react";

const OpenSourceAudits = () => {
  const commitments = [
    "Audits de code trimestriels menés par des experts indépendants",
    "Publication transparente des rapports et plans de remédiation",
    "Priorisation des contributions aux projets open source que nous distribuons",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-slide-in-left">
          <Badge className="bg-primary/10 text-primary px-3 py-1 rounded-full w-max flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Fonds Open Source UnOS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nous finançons des audits réguliers du code open source
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chaque abonnement et prestation UnOS alimente un fonds dédié à la
            qualité et à la sécurité des logiciels open source que nous
            intégrons. Ce fonds finance des audits indépendants, la correction
            des vulnérabilités et l'amélioration continue des projets que nous
            redistribuons à nos clients.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                <span className="text-base leading-relaxed">{commitment}</span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="shadow-card hover-lift animate-slide-in-right">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-foreground">
              Un modèle vertueux pour l'écosystème
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground">
            <p>
              Les audits sont confiés à un réseau d'experts indépendants
              spécialisés dans la sécurité open source. Nous priorisons les
              composants critiques et coordonnons avec les mainteneurs pour
              accélérer la mise à disposition des correctifs.
            </p>
            <p>
              Cette démarche garantit à nos clients un socle logiciel robuste,
              tout en soutenant financièrement les communautés qui construisent
              les logiciels que nous utilisons. Investir dans UnOS, c'est donc
              contribuer directement à la résilience de l'open source français.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OpenSourceAudits;
