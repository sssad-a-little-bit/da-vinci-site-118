import { Metadata } from "next";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "О ресторане",
  description: restaurant.description,
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-muted)] mb-4">
          About
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-8 max-w-2xl">
          Место для вкуса. Место для встреч.
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="prose prose-lg text-[var(--color-text-muted)]">
            <p>
              Da Vinci — ресторан в Павлодаре, созданный вокруг идеи
              качественной кухни, выразительной подачи и атмосферы, в которой
              хочется оставаться дольше.
            </p>
            <p>
              Здесь встречаются итальянская и паназиатская кухня, стейки и блюда
              на гриле. Место для семейных ужинов, встреч с друзьями,
              романтических вечеров, деловых переговоров и особых событий.
            </p>
          </div>
          <div className="aspect-[4/5] bg-[var(--color-beige)] relative">
            <div className="absolute inset-0 flex items-center justify-center text-sm text-[var(--color-text-muted)] tracking-wide uppercase">
              [Фото ресторана]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
