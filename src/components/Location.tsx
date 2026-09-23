import { restaurant } from "@/data/restaurant";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";
import Link from "next/link";

export function Location() {
  return (
    <section className="section-padding bg-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          label="Location"
          title="Найдите нас в Павлодаре."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-1">
                Адрес
              </p>
              <p className="text-lg">{restaurant.addressFull}</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-1">
                Режим
              </p>
              <p className="text-lg">{restaurant.hours}</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold-muted)] mb-1">
                Телефон
              </p>
              <a
                href={`tel:${restaurant.phoneTel}`}
                className="text-lg hover:text-[var(--color-gold-muted)] transition-colors"
              >
                {restaurant.phone}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a href={`tel:${restaurant.phoneTel}`}>
                <Button variant="primary" size="md">
                  Позвонить
                </Button>
              </a>
              <a
                href={`${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="md">
                  Написать в WhatsApp
                </Button>
              </a>
              <a
                href={`https://2gis.kz/pavlodar/firm/70000001104427099`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="md">
                  Построить маршрут
                </Button>
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="aspect-[4/3] bg-[var(--color-beige)] relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--color-text-muted)] tracking-wide uppercase">
              [Карта 2GIS / Яндекс]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
