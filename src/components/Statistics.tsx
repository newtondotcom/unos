import { Card, CardContent } from "@/components/ui/card";
import { NumberTicker } from "./magicui/number-ticker";

const Statistics = () => {
  const stats = [
    {
      number: "92,5",
      suffix: "%",
      description:
        "Part du marché français détenue par un OS américain en 2024",
      context: "Il est temps de reprendre notre indépendance numérique",
    },
    {
      number: "80",
      suffix: "%",
      description:
        "Des entreprises françaises utilisent déjà des solutions open source",
      context: "UnOS s'inscrit dans cette dynamique existante",
    },
    {
      number: "30",
      suffix: "%",
      description:
        "du chiffre d'affaires UnOS réinvesti chaque année dans les audits open source",
      context:
        "Un engagement chiffré et contractuel pour sécuriser l'écosystème",
    },
  ];

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Les Chiffres Parlent d'Eux-Mêmes
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            La dépendance numérique de la France est réelle, mais l'écosystème
            open source est déjà robuste et prêt à porter cette révolution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`bg-white/10 backdrop-blur-xs border-white/20 text-center shadow-hero hover-lift animate-slide-in-${index % 2 === 0 ? "left" : "right"} animate-delay-${(index + 1) * 200}`}
            >
              <CardContent className="p-8">
                <NumberTicker
                  value={parseFloat(stat.number.replace(",", "."))}
                  decimalPlaces={stat.number.indexOf(",") !== -1 ? 1 : 0}
                  className="text-5xl md:text-6xl font-bold text-white mb-4"
                />
                <span className="text-2xl text-white/70">{stat.suffix}</span>
                <div className="text-lg text-white/90 mb-3 font-semibold">
                  {stat.description}
                </div>
                <div className="text-sm font-medium text-white/70 leading-relaxed">
                  {stat.context}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
