import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Smartphone, Settings, Zap } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Connect Your WhatsApp",
    desc: "Link your business WhatsApp number in just 2 minutes. No technical skills needed.",
    step: "01",
  },
  {
    icon: Settings,
    title: "Configure Responses",
    desc: "Set up your FAQ answers and let AI learn your business context automatically.",
    step: "02",
  },
  {
    icon: Zap,
    title: "Let AI Reply",
    desc: "Sit back while WhatsAuto AI handles customer messages 24/7 with smart replies.",
    step: "03",
  },
];

export function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" ref={ref} className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Up and running in <span className="text-gradient">3 simple steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

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
