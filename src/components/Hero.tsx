"use client";

import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
      {/* Background placeholder — заменить реальным cinematic фото */}
      <div className="absolute inset-0 bg-[var(--color-warm-black)]">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(15,15,15,0.3) 0%, rgba(15,15,15,0.7) 70%, rgba(15,15,15,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-graphite)_0%,_var(--color-warm-black)_70%)]" />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-28 pt-32 md:pb-24 md:pt-0">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6">
            {restaurant.name} · {restaurant.city}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] text-[var(--color-cream)] text-balance mb-6">
            Вечер, который хочется повторить.
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-cream)]/80 max-w-xl mb-10 leading-relaxed">
            Авторская кухня, выразительные блюда и атмосфера для встреч, которые
            запоминаются.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="#booking">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Забронировать стол
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[var(--color-cream)]/40 text-[var(--color-cream)] hover:bg-[var(--color-cream)]/10 hover:border-[var(--color-cream)]"
              >
                Посмотреть меню
              </Button>
            </Link>
          </div>

          <p className="text-sm text-[var(--color-cream)]/60 tracking-wide">
            {restaurant.address} · {restaurant.hours}
          </p>
        </div>
      </div>
    </section>
  );
}
