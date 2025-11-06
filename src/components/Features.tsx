import {
  Shield,
  Cpu,
  Building2,
  Lock,
  Puzzle,
  HeadphonesIcon,
  ClipboardCheck,
} from "lucide-react";
import BentoGrid from "@/components/kokonutui/bento-grid";

const Features = () => {
  const features = [
    {
      icon: ClipboardCheck,
      title: "Audits Open Source Récurrents",
      description:
        "Chaque contribution financière alimente un fonds qui finance nos audits de code trimestriels pour maintenir un niveau de sécurité exemplaire.",
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description:
        "Authentification multi-facteurs et architecture sécurisée par design pour protéger vos données d'entreprise.",
    },
    {
      icon: Puzzle,
      title: "Modularité Accrue",
      description:
        "Architecture modulaire permettant aux entreprises de personnaliser leur environnement selon leurs besoins spécifiques.",
    },
    {
      icon: Building2,
      title: "Bureautique Complète",
      description:
        "Suite bureautique, navigateur, messagerie, emails - tout l'écosystème nécessaire pour votre entreprise.",
    },
    {
      icon: Cpu,
      title: "Performance Optimisée",
      description:
        "Conçu pour fonctionner efficacement même sur des configurations matérielles modestes.",
    },
    {
      icon: Lock,
      title: "Souveraineté Numérique",
      description:
        "Solution 100% française pour réduire la dépendance aux GAFAM et reprendre le contrôle de votre SI.",
    },
    {
      icon: HeadphonesIcon,
      title: "Support Inclus",
      description:
        "Support technique français inclus avec formation et accompagnement dans la migration.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <BentoGrid items={features} />
      </div>
    </section>
  );
};

export default Features;
