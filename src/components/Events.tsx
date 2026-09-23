import Link from "next/link";
import { eventTypes } from "@/data/restaurant";
import { SectionHeader } from "./SectionHeader";
import { Button } from "./Button";

export function Events() {
  return (
    <section className="section-padding bg-[var(--color-milk)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          label="Events"
          title="Когда нужен не просто стол."
          subtitle="Дни рождения, юбилеи, корпоративы и приватные ужины."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {eventTypes.map((type) => (
            <div
              key={type}
              className="border border-[var(--color-graphite)]/10 px-5 py-6 text-center hover:border-[var(--color-gold)]/50 transition-colors"
            >
              <p className="font-serif text-lg md:text-xl">{type}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/events">
            <Button variant="primary" size="lg">
              Обсудить мероприятие
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
