import { Metadata } from "next";
import { restaurant } from "@/data/restaurant";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Контакты ресторана ${restaurant.name}: ${restaurant.address}, ${restaurant.phone}.`,
};

export default function ContactsPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-muted)] mb-4">
          Contacts
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-12">
          Контакты
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-2">
                Адрес
              </p>
              <p className="text-xl">{restaurant.addressFull}</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-2">
                Режим работы
              </p>
              <p className="text-xl">{restaurant.hours}</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-2">
                Телефон
              </p>
              <a
                href={`tel:${restaurant.phoneTel}`}
                className="text-xl hover:text-[var(--color-gold-muted)]"
              >
                {restaurant.phone}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a href={`tel:${restaurant.phoneTel}`}>
                <Button variant="primary">Позвонить</Button>
              </a>
              <a
                href={`${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">WhatsApp</Button>
              </a>
              <a
                href="https://2gis.kz/pavlodar/firm/70000001104427099"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost">Открыть в картах</Button>
              </a>
            </div>
          </div>

          <div
            id="booking"
            className="border border-[var(--color-graphite)]/10 p-8 bg-[var(--color-cream)]"
          >
            <h2 className="font-serif text-2xl mb-6">Забронировать стол</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                    Дата
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                    Время
                  </label>
                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                  Количество гостей
                </label>
                <input
                  type="number"
                  name="guests"
                  min={1}
                  max={50}
                  required
                  className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
                />
              </div>
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
              <div>
                <label className="block text-xs tracking-wider uppercase text-[var(--color-text-muted)] mb-1">
                  Комментарий
                </label>
                <textarea
                  name="comment"
                  rows={2}
                  className="w-full border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
                />
              </div>
              <Button type="submit" variant="primary" fullWidth size="lg">
                Запросить бронирование
              </Button>
              <p className="text-xs text-center text-[var(--color-text-muted)]">
                Запрос получен. Мы свяжемся с вами для подтверждения.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
