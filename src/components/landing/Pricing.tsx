import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "20 000",
    currency: "FCFA",
    desc: "Parfait pour les petites entreprises qui débutent.",
    features: ["1 000 messages/mois", "Réponses IA de base", "1 numéro WhatsApp", "Système FAQ", "Support par email"],
    popular: true,
    disabled: false,
  },
  {
    name: "Pro",
    price: "—",
    currency: "",
    desc: "Pour les entreprises en croissance. Bientôt disponible.",
    features: ["10 000 messages/mois", "IA avancée (Gemini)", "3 numéros WhatsApp", "Historique des conversations", "Support prioritaire", "Tableau de bord analytics"],
    popular: false,
    disabled: true,
  },
  {
    name: "Business",
    price: "—",
    currency: "",
    desc: "Pour les entreprises à fort volume. Bientôt disponible.",
    features: ["Messages illimités", "IA personnalisée", "Numéros illimités", "Accès API", "Manager dédié", "Intégrations sur mesure", "Garantie SLA"],
    popular: false,
    disabled: true,
  },
];

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Tarifs</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Des tarifs simples et <span className="text-primary">transparents</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Essayez gratuitement pendant 14 jours. Aucune carte bancaire requise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-700 ${
                plan.disabled
                  ? "bg-muted/50 border border-border opacity-60"
                  : plan.popular
                    ? "bg-card border-2 border-primary shadow-2xl shadow-primary/10 scale-[1.02] lg:scale-105"
                    : "bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg shadow-primary/30">
                  Recommandé
                </span>
              )}
              {plan.disabled && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-muted-foreground text-background text-xs font-bold rounded-full">
                  Bientôt
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                {plan.currency && <span className="text-muted-foreground text-sm"> {plan.currency}/mois</span>}
              </div>

              <Button
                className={`w-full font-semibold mb-8 ${
                  plan.disabled
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                      : "bg-muted text-foreground hover:bg-muted/80"
                }`}
                disabled={plan.disabled}
              >
                {plan.disabled ? "Bientôt disponible" : "Commencer"}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.disabled ? "text-muted-foreground" : "text-primary"}`} />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
