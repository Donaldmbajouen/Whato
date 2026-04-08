import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, MessageSquare, Zap, History, Building2, Code2 } from "lucide-react";

const features = [
  { icon: Brain, title: "Réponses IA", desc: "Gemini AI comprend le contexte et génère des réponses naturelles adaptées à votre entreprise." },
  { icon: MessageSquare, title: "Système FAQ intelligent", desc: "Pré-configurez les réponses aux questions fréquentes pour des réponses instantanées et précises." },
  { icon: Zap, title: "Réponses en temps réel", desc: "Répondez à vos clients en secondes, pas en heures. Ne laissez plus jamais un message sans réponse." },
  { icon: History, title: "Historique des conversations", desc: "Logs complets et analytics. Suivez chaque conversation et améliorez-vous avec le temps." },
  { icon: Building2, title: "Multi-entreprises", desc: "Gérez plusieurs numéros WhatsApp et entreprises depuis un seul tableau de bord." },
  { icon: Code2, title: "Sans code", desc: "Configurez en quelques minutes avec notre interface intuitive. Aucun développeur nécessaire." },
];

export function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Fonctionnalités</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Tout ce qu'il faut pour <span className="text-primary">automatiser le support</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feat, i) => (
            <div
              key={i}
              className={`group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <feat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
