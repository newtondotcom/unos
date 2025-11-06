import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";

type ServiceCategory = "IaaS" | "PaaS" | "SaaS";
type AdoptionStatus = "sure" | "thinking about";

interface TechnologyChoice {
  useCase: string;
  solution: string;
  logo: string;
  description: string;
  documentationUrl: string;
  landingUrl: string;
  categories: ServiceCategory[];
  license: string;
  status: AdoptionStatus;
}

const technologyChoices: TechnologyChoice[] = [
  {
    useCase: "Suite collaborative",
    solution: "Nextcloud Hub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Nextcloud_Logo.svg",
    description:
      "Solution phare pour consolider le stockage, le partage de fichiers et la collaboration en temps réel au sein d'un espace souverain.",
    documentationUrl: "https://docs.nextcloud.com/",
    landingUrl: "https://nextcloud.com/",
    categories: ["SaaS"],
    license: "AGPLv3",
    status: "sure",
  },
  {
    useCase: "Suite bureautique",
    solution: "ONLYOFFICE Docs",
    logo: "https://static-www.onlyoffice.com/images/logo-new.svg",
    description:
      "Éditeurs collaboratifs compatibles Microsoft Office pour produire et coéditer des documents sans quitter notre écosystème.",
    documentationUrl: "https://helpcenter.onlyoffice.com/",
    landingUrl: "https://www.onlyoffice.com/",
    categories: ["SaaS"],
    license: "AGPLv3",
    status: "sure",
  },
  {
    useCase: "Messagerie & calendrier",
    solution: "Zimbra Collaboration",
    logo: "https://www.zimbra.com/wp-content/uploads/2020/04/zimbra-logo.svg",
    description:
      "Plateforme de messagerie et agenda unifiés pour couvrir la communication quotidienne des collaborateurs.",
    documentationUrl: "https://docs.zimbra.com/",
    landingUrl: "https://www.zimbra.com/",
    categories: ["SaaS"],
    license: "GPLv2",
    status: "thinking about",
  },
  {
    useCase: "Visioconférence",
    solution: "Jitsi Meet",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Jitsi_logo.svg",
    description:
      "Conférences chiffrées auto-hébergées permettant de garantir la confidentialité des échanges audio/vidéo.",
    documentationUrl: "https://jitsi.github.io/handbook/docs/devops-guide/devops-guide-start",
    landingUrl: "https://jitsi.org/jitsi-meet/",
    categories: ["SaaS"],
    license: "Apache 2.0",
    status: "sure",
  },
  {
    useCase: "Gestion des identités",
    solution: "Keycloak",
    logo: "https://www.keycloak.org/resources/images/keycloak_logo_512.png",
    description:
      "Système de gestion des identités centralisé pour l'authentification unique, le MFA et la fédération d'identité.",
    documentationUrl: "https://www.keycloak.org/documentation",
    landingUrl: "https://www.keycloak.org/",
    categories: ["PaaS"],
    license: "Apache 2.0",
    status: "sure",
  },
  {
    useCase: "Virtualisation & compute",
    solution: "Proxmox VE",
    logo: "https://www.proxmox.com/images/proxmox/proxmox-logo-stacked.svg",
    description:
      "Base IaaS pour orchestrer machines virtuelles et conteneurs Linux avec haute disponibilité et sauvegardes intégrées.",
    documentationUrl: "https://pve.proxmox.com/pve-docs/",
    landingUrl: "https://www.proxmox.com/en/proxmox-ve",
    categories: ["IaaS"],
    license: "AGPLv3",
    status: "sure",
  },
  {
    useCase: "Supervision & observabilité",
    solution: "Grafana",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
    description:
      "Visualisation unifiée des métriques d'infrastructure et d'applications pour détecter les dérives en temps réel.",
    documentationUrl: "https://grafana.com/docs/",
    landingUrl: "https://grafana.com/",
    categories: ["PaaS"],
    license: "AGPLv3",
    status: "thinking about",
  },
  {
    useCase: "Passerelle d'applications",
    solution: "Traefik Proxy",
    logo: "https://doc.traefik.io/traefik/assets/img/traefik.logo.svg",
    description:
      "Reverse proxy moderne pour exposer nos services de manière sécurisée avec découverte automatique et observabilité.",
    documentationUrl: "https://doc.traefik.io/traefik/",
    landingUrl: "https://traefik.io/traefik/",
    categories: ["PaaS"],
    license: "MIT",
    status: "thinking about",
  },
  {
    useCase: "Recherche & analyse",
    solution: "OpenSearch",
    logo: "https://opensearch.org/assets/brand/SVG/Logo/opensearch.svg",
    description:
      "Moteur de recherche et d'analytics pour indexer les journaux applicatifs et alimenter les tableaux de bord métier.",
    documentationUrl: "https://opensearch.org/docs/latest/",
    landingUrl: "https://opensearch.org/",
    categories: ["PaaS"],
    license: "Apache 2.0",
    status: "thinking about",
  },
];

const statusCopy: Record<AdoptionStatus, { label: string; variant: "default" | "secondary" }> = {
  sure: {
    label: "sure",
    variant: "default",
  },
  "thinking about": {
    label: "thinking about",
    variant: "secondary",
  },
};

const Details = () => {
  return (
    <main className="bg-background min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <header className="space-y-4">
          <Badge variant="secondary" className="uppercase tracking-wide">
            Nos choix technologiques
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Pourquoi nous avons retenu ces briques open source
          </h1>
          <p className="max-w-3xl text-base text-muted-foreground">
            Chaque solution est évaluée selon son apport fonctionnel, sa licence open source et sa capacité à s'intégrer dans une plateforme souveraine. Les catégories IaaS, PaaS et SaaS suivent la définition de Brian J.S. Chee et Curtis Franklin Jr. (2010).
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {technologyChoices.map((choice) => {
            const status = statusCopy[choice.status];

            return (
              <Card key={choice.solution} className="flex flex-col">
                <CardHeader className="flex-1 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-muted">
                      <img
                        src={choice.logo}
                        alt={`${choice.solution} logo`}
                        className="h-12 w-12 object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {choice.useCase}
                      </p>
                      <h2 className="text-xl font-bold text-foreground">
                        {choice.solution}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {choice.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {choice.categories.map((category) => (
                      <Badge key={category} variant="outline">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Licence : <span className="font-medium text-foreground">{choice.license}</span>
                    </span>
                    <Badge variant={status.variant}>{status.label}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={choice.documentationUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2"
                      >
                        <FileText className="h-4 w-4" />
                        Documentation
                      </a>
                    </Button>
                    <Button variant="secondary" size="sm" asChild>
                      <a
                        href={choice.landingUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Site officiel
                      </a>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="pt-4 text-xs text-muted-foreground">
                  Dernière vérification : {new Date().getFullYear()}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Details;
