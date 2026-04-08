import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    desc: "Perfect for small businesses getting started.",
    features: ["1,000 messages/month", "Basic AI responses", "1 WhatsApp number", "FAQ system", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: 79,
    desc: "For growing businesses that need more power.",
    features: ["10,000 messages/month", "Advanced AI (Gemini)", "3 WhatsApp numbers", "Conversation history", "Priority support", "Analytics dashboard"],
    popular: true,
  },
  {
    name: "Business",
    price: 149,
    desc: "For enterprises with high-volume needs.",
    features: ["Unlimited messages", "Custom AI training", "Unlimited numbers", "API access", "Dedicated manager", "Custom integrations", "SLA guarantee"],
    popular: false,
  },
];

export function Pricing() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="pricing" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Start free for 14 days. No credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 transition-all duration-700 ${
                plan.popular
                  ? "bg-card border-2 border-primary shadow-2xl shadow-primary/10 scale-[1.02] lg:scale-105"
                  : "bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-lg shadow-primary/30">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6">{plan.desc}</p>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>

              <Button
                className={`w-full font-semibold mb-8 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Get Started
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
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
