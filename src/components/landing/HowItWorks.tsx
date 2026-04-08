import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Smartphone, Settings, Zap } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Connectez votre WhatsApp",
    desc: "Liez votre numéro WhatsApp Business en seulement 2 minutes. Aucune compétence technique requise.",
    step: "01",
  },
  {
    icon: Settings,
    title: "Configurez les réponses",
    desc: "Définissez vos réponses FAQ et laissez l'IA apprendre le contexte de votre entreprise automatiquement.",
    step: "02",
  },
  {
    icon: Zap,
    title: "Laissez l'IA répondre",
    desc: "Détendez-vous pendant que Whato gère les messages clients 24h/24 avec des réponses intelligentes.",
    step: "03",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Comment ça marche</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Opérationnel en <span className="text-primary">3 étapes simples</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-primary/20" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative mx-auto mb-6 w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/30">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
