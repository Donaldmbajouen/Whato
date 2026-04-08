import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Amina K.",
    role: "Bakery Owner",
    quote: "WhatsAuto AI saves me 3 hours every day. My customers get instant replies about orders and prices even when I'm baking!",
    avatar: "AK",
    stars: 5,
  },
  {
    name: "Carlos M.",
    role: "Hair Salon Owner",
    quote: "Booking appointments used to take forever. Now the AI handles 80% of my WhatsApp messages automatically. Game changer!",
    avatar: "CM",
    stars: 5,
  },
  {
    name: "Fatima R.",
    role: "Online Shop Owner",
    quote: "My sales increased by 35% since using WhatsAuto AI. Customers love getting instant responses about product availability.",
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
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Loved by <span className="text-gradient">business owners</span>
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
