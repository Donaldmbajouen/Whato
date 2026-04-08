import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ChatMockup } from "./ChatMockup";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Propulsé par Gemini AI
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight text-foreground mb-6">
              Automatisez votre support WhatsApp{" "}
              <span className="text-primary">avec l'IA</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Répondez instantanément à vos clients, 24h/24, 7j/7, sans lever le petit doigt.
              Une IA intelligente qui comprend votre business et ravit vos clients.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 font-bold text-base h-13 px-8 group"
              >
                Essai Gratuit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base h-13 px-8 border-border hover:bg-muted group"
              >
                <Play className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                Réserver une Démo
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Utilisé par <span className="font-semibold text-foreground">500+</span> entreprises
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
