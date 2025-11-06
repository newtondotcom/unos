import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-sovereign-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à Reprendre Votre Indépendance Numérique ?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Rejoignez les entreprises françaises qui ont fait le choix de la souveraineté numérique
            avec UnOS. Notre équipe vous accompagne dans cette transition stratégique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-xs border-white/20 text-center">
            <CardContent className="p-6">
              <Mail className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-white/70 text-sm mb-4">Découvrez notre documentation complète</p>
              <Button size="sm">Accéder</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-xs border-white/20 text-center">
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 text-white mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Une idée, une question ou une démonstration ?
              </h3>
              <p className="text-white/70 text-sm mb-4">Échangez avec nos experts</p>
              <Button variant="outline" size="sm">Contacter</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="shadow-hero">
            Commencer Avec UnOS
          </Button>
          <p className="text-white/70 text-sm mt-4">
            Support français • Formation incluse • Migration accompagnée
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;