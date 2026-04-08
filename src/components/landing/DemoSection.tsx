import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Bot, User } from "lucide-react";

const chatExamples = [
  { from: "user", text: "What are your prices?" },
  { from: "bot", text: "Our services start from $29/month with the Starter plan. It includes up to 1,000 messages and basic AI responses. Would you like to compare all plans?" },
  { from: "user", text: "Do you ship internationally?" },
  { from: "bot", text: "Yes! We ship to over 50 countries. Delivery typically takes 5-10 business days for international orders. Want me to check your specific location?" },
];

export function DemoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm font-bold text-primary uppercase tracking-widest">Live Demo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display mt-3 text-foreground">
            See it <span className="text-gradient">in action</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Here's how WhatsAuto AI handles real customer conversations automatically.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xl shadow-primary/5">
            <div className="bg-accent px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold text-accent-foreground">Your Business</p>
                <p className="text-xs text-accent-foreground/70">WhatsAuto AI Assistant</p>
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
