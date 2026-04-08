import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Ne ratez plus jamais un message client",
  "Gagnez des heures chaque jour sur le support",
  "Augmentez vos conversions de 40%",
  "Améliorez la satisfaction de vos clients",
];

function AnimatedCounter({ target, suffix = "", isVisible }: { target: number; suffix?: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 10000, suffix: "+", label: "Messages traités" },
  { value: 99, suffix: "%", label: "Taux de réponse" },
  { value: 5, suffix: " min", label: "Temps de configuration" },
];

export function Benefits() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <span className="text-sm font-bold text-primary uppercase tracking-widest">Avantages</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display mt-3 mb-8 text-foreground">
              Pourquoi les entreprises <span className="text-primary">adorent Whato</span>
            </h2>

            <div className="space-y-5">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg text-foreground font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center lg:text-left"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-primary">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </p>
                <p className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
