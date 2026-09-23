import { Metadata } from "next";
import { restaurant } from "@/data/restaurant";

export const metadata: Metadata = {
  title: "Галерея",
  description: `Фотографии ресторана ${restaurant.name}: интерьер, блюда, VIP-залы, мероприятия.`,
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-muted)] mb-4">
          Gallery
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-12">
          Галерея
        </h1>
        <p className="text-[var(--color-text-muted)] mb-12 max-w-xl">
          Editorial photo journal. Реальные фотографии появятся после
          курирования материалов ресторана.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-[var(--color-beige)] flex items-center justify-center text-xs text-[var(--color-text-muted)] tracking-wide uppercase"
            >
              [Фото {i + 1}]
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
