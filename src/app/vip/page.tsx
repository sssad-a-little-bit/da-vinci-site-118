import { Metadata } from "next";
import { vipRooms, restaurant } from "@/data/restaurant";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VIP-залы",
  description: `Приватные VIP-залы ресторана ${restaurant.name}: Милан, Сибирь, Азия. Для встреч, праздников и особых событий.`,
};

export default function VIPPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-muted)] mb-4">
          Private
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4">
          Ваш вечер. Ваше пространство.
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-xl mb-16">
          Приватные пространства Da Vinci для встреч, праздников и особых
          событий.
        </p>

        <div className="space-y-16">
          {vipRooms.map((room) => (
            <article
              key={room.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className="aspect-[4/3] bg-[var(--color-beige)] relative">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--color-text-muted)] tracking-wide uppercase">
                  [Фото зала {room.name}]
                </div>
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-2">
                  {room.name}
                </h2>
                <p className="text-xs tracking-wider uppercase text-[var(--color-gold-muted)] mb-4">
                  {room.capacity}
                </p>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                  {room.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {room.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs px-3 py-1.5 border border-[var(--color-graphite)]/15"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contacts#booking">
                  <Button variant="primary">Узнать о свободной дате</Button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
