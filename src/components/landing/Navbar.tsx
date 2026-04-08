import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Comment ça marche", href: "#how-it-works" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Témoignages", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Déterminer la section active
      const sections = navLinks.map((link) => link.href.substring(1)); // enlever le #
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto py-2 lg:h-32">
          <a href="#" className="flex items-center group flex-shrink-0">
            <img src="/whato.png" alt="Whato" className="h-25 sm:h-30 lg:h-40 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                    isActive
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-sm font-medium">
              Connexion
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 font-semibold">
              Essai Gratuit
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2 flex flex-col gap-2">
                <Button variant="outline" className="w-full">Connexion</Button>
                <Button className="w-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 font-semibold">
                  Essai Gratuit
                </Button>
              </div>
            </div>
          </div>
    </nav>
  );
}
