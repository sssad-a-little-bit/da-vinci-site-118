import { Metadata } from "next";
import { eventTypes, restaurant } from "@/data/restaurant";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Мероприятия",
  description: `Организация мероприятий в ${restaurant.name}: дни рождения, юбилеи, корпоративы, приватные ужины.`,
};

export default function EventsPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-muted)] mb-4">
          Events
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4">
          Когда нужен не просто стол.
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-xl mb-12">
          Поводы проходят. Впечатления остаются.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {eventTypes.map((type) => (
            <div
              key={type}
              className="border border-[var(--color-graphite)]/10 px-5 py-8 text-center"
            >
              <p className="font-serif text-xl">{type}</p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto border border-[var(--color-graphite)]/10 p-8 bg-[var(--color-cream)]">
          <h2 className="font-serif text-2xl mb-6 text-center">
            Обсудить мероприятие
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                Имя
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                Телефон
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+7"
                className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                  Дата
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                  Гостей
                </label>
                <input
                  type="number"
                  name="guests"
                  min={1}
                  className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                Тип мероприятия
              </label>
              <select
                name="type"
                className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
              >
                <option value="">Выберите</option>
                {eventTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                Комментарий
              </label>
              <textarea
                name="comment"
                rows={3}
                className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <Button type="submit" variant="primary" fullWidth size="lg">
              Отправить запрос
            </Button>
            <p className="text-xs text-center text-[var(--color-text-muted)]">
              Мы получили ваш запрос и свяжемся с вами.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
