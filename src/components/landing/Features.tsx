import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, MessageSquare, Zap, History, Building2, Code2 } from "lucide-react";

const features = [
  { icon: Brain, title: "AI-Powered Replies", desc: "Gemini AI understands context and generates human-like responses tailored to your business." },
  { icon: MessageSquare, title: "Smart FAQ System", desc: "Pre-configure answers to common questions for instant, accurate replies every time." },
  { icon: Zap, title: "Real-Time Responses", desc: "Reply to customers in seconds, not hours. Never leave a message unanswered." },
  { icon: History, title: "Conversation History", desc: "Full chat logs and analytics. Track every conversation and improve over time." },
  { icon: Building2, title: "Multi-Business Support", desc: "Manage multiple WhatsApp numbers and businesses from a single dashboard." },
  { icon: Code2, title: "No Coding Required", desc: "Set up in minutes with our intuitive interface. No developers needed." },
];

export function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            Everything you need to <span className="text-gradient">automate support</span>
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
