import Link from "next/link";
import { cuisineCategories } from "@/data/restaurant";
import { SectionHeader } from "./SectionHeader";
/* no external icons */

export function Cuisine() {
  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          label="Cuisine"
          title="Вкус — главный повод вернуться."
          subtitle="Итальянская и паназиатская кухня, стейки и блюда на гриле."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {cuisineCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/menu#${cat.id}`}
              className="group relative aspect-[4/5] bg-[var(--color-graphite)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-[var(--color-warm-black)] transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--color-cream)]">
                <h3 className="font-serif text-2xl mb-1">{cat.name}</h3>
                <p className="text-sm text-[var(--color-cream)]/70 mb-3">
                  {cat.label}
                </p>
                <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Смотреть →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
