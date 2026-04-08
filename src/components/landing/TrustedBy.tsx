import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const brands = ["TechCorp", "ShopEasy", "FoodHub", "StyleBox", "AutoServ"];

export function TrustedBy() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <p className={`text-center text-sm font-medium text-muted-foreground mb-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Plus de 500 entreprises nous font confiance
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand, i) => (
            <div
              key={brand}
              className={`text-xl sm:text-2xl font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
