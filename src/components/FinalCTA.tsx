import Link from "next/link";
import { Button } from "./Button";

export function FinalCTA() {
  return (
    <section
      id="booking"
      className="section-padding bg-[var(--color-warm-black)] text-[var(--color-cream)]"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6">
          09 — Book
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.15] mb-6 text-balance">
          Ваш стол ждёт.
        </h2>
        <p className="text-lg text-[var(--color-cream)]/70 mb-10 max-w-xl mx-auto">
          Выберите день для следующего вечера в Da Vinci.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#booking-form">
            <Button variant="secondary" size="lg">
              Забронировать стол
            </Button>
          </Link>
          <Link href="/menu">
            <Button
              variant="outline"
              size="lg"
              className="border-[var(--color-cream)]/40 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10"
            >
              Посмотреть меню
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
