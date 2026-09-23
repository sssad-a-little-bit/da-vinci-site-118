import { Hero } from "@/components/Hero";
import { QuickInfo } from "@/components/QuickInfo";
import { About } from "@/components/About";
import { Cuisine } from "@/components/Cuisine";
import { VIPRooms } from "@/components/VIPRooms";
import { Events } from "@/components/Events";
import { Location } from "@/components/Location";
import { FinalCTA } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <About />
      <Cuisine />

      {/* Signature dishes — from real menu */}
      <section className="section-padding bg-[var(--color-milk)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-muted)] mb-4">
              04 — Signature
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
              То, ради чего возвращаются.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Рибай стейк", price: "8 500 ₸", note: "Говядина" },
              { name: "Сибас на гриле", price: "8 500 ₸", note: "С вялеными томатами и оливками" },
              { name: "Фирменный салат DaVinci", price: "4 800 ₸", note: "С перепёлкой" },
              { name: "Тар-тар из семги", price: "5 300 ₸", note: "В облаке дыма" },
              { name: "Хоспер микс", price: "29 500 ₸", note: "На компанию" },
              { name: "Семга по-гималайски", price: "9 500 ₸", note: "На соляном блоке" },
            ].map((dish) => (
              <a
                key={dish.name}
                href="/menu"
                className="group border border-[var(--color-graphite)]/10 bg-white overflow-hidden hover:border-[var(--color-gold)]/40 transition-colors"
              >
                <div className="aspect-[4/5] bg-[var(--color-beige)] flex items-center justify-center text-xs text-[var(--color-text-muted)] tracking-wide uppercase">
                  [Фото]
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl mb-1">{dish.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-3">{dish.note}</p>
                  <p className="font-medium">{dish.price}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="/menu"
              className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-[var(--color-gold-muted)] hover:text-[var(--color-graphite)]"
            >
              Открыть полное меню →
            </a>
          </div>
        </div>
      </section>

      {/* Steak section */}
      <section className="section-padding bg-[var(--color-graphite)] text-[var(--color-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4">
              Grill
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.15] mb-6">
              Огонь. Мясо. Характер.
            </h2>
            <p className="text-lg text-[var(--color-cream)]/70 leading-relaxed">
              Стейки и блюда на гриле — одна из гастрономических причин
              заглянуть в Da Vinci.
            </p>
          </div>
        </div>
      </section>

      <VIPRooms />
      <Events />

      {/* Reviews placeholder */}
      <section className="section-padding bg-[var(--color-milk)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-muted)] mb-8">
            07 — Reviews
          </p>
          <blockquote className="font-serif text-2xl sm:text-3xl leading-relaxed mb-6 text-balance">
            «Очень понравился ресторан. Заказывали стейк — мясо было очень
            вкусным и приготовлено отлично. Особенно хочу отметить
            обслуживание.»
          </blockquote>
          <p className="text-sm text-[var(--color-text-muted)]">
            — Ayana Kasym · 2GIS
          </p>
          <p className="mt-8 text-xs text-[var(--color-text-muted)]">
            Полный блок отзывов — после подтверждения актуальных публичных
            отзывов.
          </p>
        </div>
      </section>

      {/* Instagram */}
      <section className="section-padding bg-[var(--color-cream)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">
            Следите за Da Vinci
          </h2>
          <a
            href="https://www.instagram.com/da_vinci_restaurant_pvl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-[var(--color-gold-muted)] hover:text-[var(--color-graphite)] transition-colors"
          >
            Instagram →
          </a>
          <p className="mt-8 text-sm text-[var(--color-text-muted)]">
            [Сетка реальных фото из Instagram — после курирования]
          </p>
        </div>
      </section>

      <Location />
      <FinalCTA />
    </>
  );
}
