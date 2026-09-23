import Link from "next/link";
import { vipRooms } from "@/data/restaurant";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";

export function VIPRooms() {
  return (
    <section className="section-padding bg-[var(--color-warm-black)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          label="Private"
          title="Ваш вечер. Ваше пространство."
          subtitle="Приватные пространства Da Vinci для встреч, праздников и особых событий."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {vipRooms.map((room) => (
            <div
              key={room.id}
              className="group border border-[var(--color-cream)]/10 hover:border-[var(--color-gold)]/40 transition-colors duration-500"
            >
              <div className="aspect-[4/3] bg-[var(--color-graphite)] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--color-cream)]/40 tracking-wide uppercase">
                  [Фото {room.name}]
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-1">{room.name}</h3>
                <p className="text-xs tracking-wider uppercase text-[var(--color-gold)] mb-3">
                  {room.capacity}
                </p>
                <p className="text-sm text-[var(--color-cream)]/70 leading-relaxed mb-4">
                  {room.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-6">
                  {room.features.map((f) => (
                    <li
                      key={f}
                      className="text-xs px-2 py-1 border border-[var(--color-cream)]/15 text-[var(--color-cream)]/60"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/vip">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[var(--color-cream)]/30 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10"
                  >
                    Узнать о свободной дате
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
