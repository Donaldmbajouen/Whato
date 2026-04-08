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
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-accent-foreground mb-4">
              Start automating your WhatsApp today
            </h2>
            <p className="text-accent-foreground/70 text-lg mb-8 max-w-lg mx-auto">
              Join 500+ businesses already saving time and increasing sales with WhatsAuto AI.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 font-bold text-base h-14 px-10 group"
            >
              Get Started — It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-accent-foreground/50 text-sm mt-4">14-day free trial • No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
