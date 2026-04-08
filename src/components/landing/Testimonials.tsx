import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Amina K.",
    role: "Propriétaire de boulangerie",
    quote: "Whato me fait gagner 3 heures chaque jour. Mes clients reçoivent des réponses instantanées sur les commandes et les prix même quand je suis en cuisine !",
    avatar: "AK",
    stars: 5,
  },
  {
    name: "Carlos M.",
    role: "Gérant de salon de coiffure",
    quote: "La prise de rendez-vous prenait une éternité. Maintenant l'IA gère 80% de mes messages WhatsApp automatiquement. Un vrai game changer !",
    avatar: "CM",
    stars: 5,
  },
  {
    name: "Fatima R.",
    role: "Propriétaire de boutique en ligne",
    quote: "Mes ventes ont augmenté de 35% depuis que j'utilise Whato. Les clients adorent recevoir des réponses instantanées sur la disponibilité des produits.",
    avatar: "FR",
    stars: 5,
  },
];

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Témoignages</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Adoré par les <span className="text-primary">entrepreneurs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 text-sm">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
