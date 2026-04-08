const links = {
  Produit: ["Fonctionnalités", "Tarifs", "Démo", "Intégrations"],
  Entreprise: ["À propos", "Blog", "Carrières", "Contact"],
  Support: ["Centre d'aide", "Documentation API", "Statut", "Politique de confidentialité"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <a href="#" className="flex items-center flex-shrink-0">
              <img src="/whato.png" alt="Whato" />
            </a>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-bold text-foreground text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Whato. Made by{" "}
            <a
              href="https://donald-njemi-portofolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Donald Njemi
            </a>
          </p>
          <div className="flex items-center gap-4">
            {[
              { label: "Twitter", url: "https://donald-njemi-portofolio.vercel.app/" },
              { label: "LinkedIn", url: "https://donald-njemi-portofolio.vercel.app/" },
              { label: "GitHub", url: "https://donald-njemi-portofolio.vercel.app/" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
