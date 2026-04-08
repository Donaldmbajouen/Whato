import { useEffect, useState } from "react";
import { Bot } from "lucide-react";

const messages = [
  { from: "user", text: "Hi! What are your prices?", delay: 0 },
  { from: "bot", text: "Hello! 👋 Our services start from $29/month for the Starter plan. Would you like to see all our plans?", delay: 1200 },
  { from: "user", text: "Yes please! And do you offer a free trial?", delay: 2800 },
  { from: "bot", text: "Absolutely! We offer a 14-day free trial with full access. No credit card required. Shall I set one up for you? 🚀", delay: 4200 },
];

export function ChatMockup() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (visibleCount >= messages.length) return;
    const nextMsg = messages[visibleCount];
    
    // Show typing indicator before bot messages
    if (nextMsg.from === "bot" && visibleCount > 0) {
      const typingTimer = setTimeout(() => setShowTyping(true), nextMsg.delay - 800);
      const msgTimer = setTimeout(() => {
        setShowTyping(false);
        setVisibleCount((c) => c + 1);
      }, nextMsg.delay);
      return () => { clearTimeout(typingTimer); clearTimeout(msgTimer); };
    }

    const timer = setTimeout(() => setVisibleCount((c) => c + 1), nextMsg.delay);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <div className="animate-float w-full max-w-sm">
      {/* Phone frame */}
      <div className="rounded-[2rem] bg-foreground/5 border border-border p-2 shadow-2xl shadow-primary/10">
        <div className="rounded-[1.5rem] bg-card overflow-hidden">
          {/* WhatsApp header */}
          <div className="bg-accent px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm font-bold text-accent-foreground">WhatsAuto AI</p>
              <p className="text-xs text-accent-foreground/70">Online • AI Assistant</p>
            </div>
          </div>

          {/* Chat area */}
          <div className="p-4 min-h-[320px] bg-muted/30 flex flex-col gap-3">
            {messages.slice(0, visibleCount).map((msg, i) => (
              <div
                key={i}
                className={`animate-chat-bubble max-w-[80%] ${
                  msg.from === "user" ? "self-end" : "self-start"
                }`}
              >
                <div
                  className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border text-card-foreground rounded-bl-md shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
                <p className={`text-[10px] text-muted-foreground mt-1 ${msg.from === "user" ? "text-right" : ""}`}>
                  {msg.from === "bot" ? "AI • " : ""}now
                </p>
              </div>
            ))}

            {showTyping && (
              <div className="self-start animate-chat-bubble">
                <div className="bg-card border border-border rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5 shadow-sm">
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full typing-dot" />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full typing-dot" />
                  <span className="w-2 h-2 bg-muted-foreground/50 rounded-full typing-dot" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
