import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`relative rounded-3xl overflow-hidden bg-accent p-12 sm:p-16 lg:p-20 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-accent-foreground mb-4">
              Automatisez votre WhatsApp dès aujourd'hui
            </h2>
            <p className="text-accent-foreground/70 text-lg mb-8 max-w-lg mx-auto">
              Rejoignez plus de 500 entreprises qui gagnent du temps et augmentent leurs ventes avec Whato.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 font-bold text-base h-14 px-10 group"
            >
              Commencer — C'est Gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-accent-foreground/50 text-sm mt-4">14 jours d'essai gratuit • Aucune carte bancaire requise</p>
          </div>
        </div>
      </div>
    </section>
  );
}
