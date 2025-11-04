import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, Check, Shield, HardDrive, Mail, MessageSquare, FileText, Calendar, Eye, Lock, Wifi, BookOpen, Brain, ShieldCheck, AlertTriangle, Users, LifeBuoy, Settings, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

interface OptionService {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

const Configurateur = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [employees, setEmployees] = useState([10]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const includedServices = [
    { name: "10 GB drive par employé", icon: <HardDrive className="w-4 h-4" /> },
    { name: "Email professionnel", icon: <Mail className="w-4 h-4" /> },
    { name: "Chat (vidéo + texte)", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Suite office complète", icon: <FileText className="w-4 h-4" /> },
    { name: "Calendrier partagé", icon: <Calendar className="w-4 h-4" /> },
    { name: "Agent XDR", icon: <Eye className="w-4 h-4" /> },
    { name: "Authentification centralisée", icon: <Lock className="w-4 h-4" /> },
    { name: "VPN sécurisé", icon: <Wifi className="w-4 h-4" /> },
    { name: "Wiki d'entreprise", icon: <BookOpen className="w-4 h-4" /> },
  ];

  const optionalServices: OptionService[] = [
    {
      id: "more-drive",
      name: "Stockage supplémentaire",
      description: "+50 GB par employé",
      price: 5,
      icon: <HardDrive className="w-4 h-4" />
    },
    {
      id: "private-llm",
      name: "LLM privé",
      description: "IA générative dédiée",
      price: 25,
      icon: <Brain className="w-4 h-4" />
    },
    {
      id: "cyber-prevention",
      name: "Pack prévention cybersécurité",
      description: "Formation et sensibilisation",
      price: 8,
      icon: <ShieldCheck className="w-4 h-4" />
    },
    {
      id: "siem",
      name: "Pack SIEM",
      description: "Surveillance avancée",
      price: 15,
      icon: <AlertTriangle className="w-4 h-4" />
    },
    {
      id: "hr-saas",
      name: "Partenariat SaaS RH/Paie",
      description: "Odoo ou équivalent",
      price: 20,
      icon: <Users className="w-4 h-4" />
    },
    {
      id: "support-24-7",
      name: "Support 24/7",
      description: "Assistance continue",
      price: 12,
      icon: <LifeBuoy className="w-4 h-4" />
    },
    {
      id: "app-deployment",
      name: "Déploiement d'applications",
      description: "Sur demande",
      price: 10,
      icon: <Settings className="w-4 h-4" />
    },
    {
      id: "infrastructure-training",
      name: "Formation gestion infrastructure",
      description: "Formation complète",
      price: 30,
      icon: <GraduationCap className="w-4 h-4" />
    },
  ];

  const basePrice = 45; // Prix de base par employé
  const numberOfEmployees = employees[0];
  const optionsPrice = selectedOptions.reduce((total, optionId) => {
    const option = optionalServices.find(o => o.id === optionId);
    return total + (option ? option.price : 0);
  }, 0);
  const totalMonthlyPrice = numberOfEmployees * (basePrice + optionsPrice);

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">Configurateur UnOS</h1>
              <p className="text-sm text-gray-600">OS open source basé sur Linux - OS as a Service</p>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Étape {currentStep} sur {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round(progressPercentage)}% complété</span>
          </div>
          <Progress value={progressPercentage} className="w-full" />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span className={currentStep >= 1 ? "text-blue-600 font-medium" : ""}>Équipe</span>
            <span className={currentStep >= 2 ? "text-blue-600 font-medium" : ""}>Services</span>
            <span className={currentStep >= 3 ? "text-blue-600 font-medium" : ""}>Devis</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Step 1: Number of Employees */}
        {currentStep === 1 && (
          <Card className="w-full">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Combien d'employés dans votre entreprise ?</CardTitle>
              <CardDescription>
                Définissez la taille de votre équipe pour personnaliser votre offre
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="px-4">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {numberOfEmployees >= 95 ? "95+" : numberOfEmployees}
                  </div>
                  <div className="text-gray-600">employés</div>
                </div>
                <Slider
                  value={employees}
                  onValueChange={setEmployees}
                  max={100}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1</span>
                  <span>50</span>
                  <span>100+</span>
                </div>
              </div>

              {numberOfEmployees >= 95 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-900 mb-1">Grande entreprise détectée</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Pour les organisations de plus de 95 employés, nous recommandons un accompagnement personnalisé.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Contactez-nous directement
                  </Button>
                </div>
              )}

              <div className="flex justify-end">
                <Button onClick={nextStep} className="flex items-center gap-2">
                  Suivant
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Services */}
        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Included Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  Services inclus
                </CardTitle>
                <CardDescription>
                  Ces services sont automatiquement inclus dans votre abonnement UnOS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {includedServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="text-green-600">{service.icon}</div>
                      <span className="text-sm font-medium text-green-800">{service.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Optional Services */}
            <Card>
              <CardHeader>
                <CardTitle>Services optionnels</CardTitle>
                <CardDescription>
                  Sélectionnez les services supplémentaires selon vos besoins
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {optionalServices.map((service) => (
                    <div key={service.id} className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <Checkbox
                        id={service.id}
                        checked={selectedOptions.includes(service.id)}
                        onCheckedChange={() => handleOptionToggle(service.id)}
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {service.icon}
                          <label
                            htmlFor={service.id}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {service.name}
                          </label>
                          <Badge variant="outline" className="ml-auto">
                            +{service.price}€/mois/employé
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Précédent
              </Button>
              <Button onClick={nextStep} className="flex items-center gap-2">
                Voir le devis
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Pricing */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Votre devis personnalisé</CardTitle>
                <CardDescription>
                  Estimation basée sur {numberOfEmployees} employé{numberOfEmployees > 1 ? 's' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pricing Breakdown */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">UnOS Base ({numberOfEmployees} employé{numberOfEmployees > 1 ? 's' : ''})</span>
                    <span className="font-medium">{(numberOfEmployees * basePrice).toLocaleString('fr-FR')}€/mois</span>
                  </div>
                  
                  {selectedOptions.length > 0 && (
                    <>
                      <Separator />
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-700">Services optionnels :</h4>
                        {selectedOptions.map(optionId => {
                          const option = optionalServices.find(o => o.id === optionId);
                          if (!option) return null;
                          return (
                            <div key={optionId} className="flex justify-between items-center py-1 text-sm">
                              <span className="text-gray-600">• {option.name}</span>
                              <span className="text-gray-600">{(numberOfEmployees * option.price).toLocaleString('fr-FR')}€/mois</span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                  
                  <Separator />
                  <div className="flex justify-between items-center py-3 text-xl font-bold">
                    <span>Total mensuel</span>
                    <span className="text-blue-600">{totalMonthlyPrice.toLocaleString('fr-FR')}€/mois</span>
                  </div>
                  <div className="text-center text-sm text-gray-600">
                    Soit {Math.round(totalMonthlyPrice / numberOfEmployees)}€/mois par employé
                  </div>
                </div>

                <Separator />

                {/* Contact Section */}
                <div className="text-center space-y-4">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-blue-900 mb-2">Prêt à transformer votre infrastructure ?</h3>
                    <p className="text-blue-700 mb-4">
                      Contactez nos experts pour finaliser votre configuration et planifier votre migration vers UnOS.
                    </p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Contactez-nous
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">✅ Sans engagement</div>
                      <div className="text-gray-600">Résiliable à tout moment</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">🚀 Déploiement rapide</div>
                      <div className="text-gray-600">Mise en service sous 48h</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">🇫🇷 Support français</div>
                      <div className="text-gray-600">Équipe basée en France</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              <Button variant="outline" onClick={prevStep} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Précédent
              </Button>
              <Button onClick={() => setCurrentStep(1)} variant="outline">
                Recommencer
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Configurateur;