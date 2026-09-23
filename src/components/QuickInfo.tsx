import { restaurant } from "@/data/restaurant";
import Link from "next/link";

export function QuickInfo() {
  return (
    <section className="bg-[var(--color-graphite)] text-[var(--color-cream)] py-5 border-b border-[var(--color-cream)]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-serif tracking-wider uppercase">
              {restaurant.name}
            </span>
            <span className="text-[var(--color-cream)]/60">
              {restaurant.city} · {restaurant.address}
            </span>
            <span className="text-[var(--color-cream)]/60">
              {restaurant.hoursShort}
            </span>
            <a
              href={`tel:${restaurant.phoneTel}`}
              className="text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] transition-colors"
            >
              {restaurant.phone}
            </a>
          </div>
          <Link
            href="#booking"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium tracking-wide uppercase bg-[var(--color-cream)] text-[var(--color-warm-black)] hover:bg-white transition-colors shrink-0"
          >
            Забронировать
          </Link>
        </div>
      </div>
    </section>
  );
}
