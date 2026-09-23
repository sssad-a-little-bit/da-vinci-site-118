import { restaurant } from "@/data/restaurant";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section className="section-padding bg-[var(--color-milk)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-[4/5] bg-[var(--color-beige)] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)] text-sm tracking-wide uppercase">
              [Фото интерьера Da Vinci]
            </div>
          </div>

          <div>
            <SectionHeader
              label="About Da Vinci"
              title="Место для вкуса. Место для встреч."
            />
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-lg">
              Da Vinci — ресторан в Павлодаре, созданный вокруг идеи качественной
              кухни, выразительной подачи и атмосферы, в которой хочется
              оставаться дольше.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-[var(--color-graphite)]/10 pt-8">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-2">
                  Кухня
                </p>
                <p className="text-sm leading-snug">
                  Итальянская · Паназиатская · Авторская
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-2">
                  Формат
                </p>
                <p className="text-sm leading-snug">
                  Ужин · Встречи · Особые события
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-2">
                  Адрес
                </p>
                <p className="text-sm leading-snug">{restaurant.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
