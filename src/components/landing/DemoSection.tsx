import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, User } from "lucide-react";

const chatExamples = [
  { from: "user", text: "Quels sont vos tarifs ?" },
  { from: "bot", text: "Nos services commencent à 20 000 FCFA/mois avec le plan Starter. Il inclut jusqu'à 1 000 messages et des réponses IA de base. Souhaitez-vous comparer tous les plans ?" },
  { from: "user", text: "Est-ce que vous livrez à l'international ?" },
  { from: "bot", text: "Oui ! Nous livrons dans plus de 50 pays. La livraison prend généralement 5 à 10 jours ouvrables. Voulez-vous que je vérifie pour votre localisation ?" },
];

export function DemoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Démo en direct</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Voyez Whato <span className="text-primary">en action</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Voici comment Whato gère automatiquement les conversations clients.
          </p>
        </div>

        <div className="w-full max-w-sm sm:max-w-xl lg:max-w-2xl mx-auto px-2 sm:px-0">
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl shadow-primary/5">
            <div className="bg-accent px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-accent-foreground">Votre Entreprise</p>
                <p className="text-xs text-accent-foreground/70">Assistant IA Whato</p>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-muted/20">
              {chatExamples.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 transition-all duration-600 ${
                    msg.from === "user" ? "flex-row-reverse" : ""
                  } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{ transitionDelay: `${300 + i * 200}ms` }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.from === "user" ? "bg-muted" : "bg-primary/10"
                  }`}>
                    {msg.from === "user" ? (
                      <User className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Bot className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-card border border-border text-card-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
