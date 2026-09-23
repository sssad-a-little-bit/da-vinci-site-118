"use client";

import { useState, useMemo } from "react";
import { menuCategories, menuItems } from "@/data/menu";
import { restaurant } from "@/data/restaurant";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let items = menuItems.filter((i) => i.is_available);
    if (activeCategory !== "all") {
      items = items.filter((i) => i.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (i) =>
          i.name_ru.toLowerCase().includes(q) ||
          (i.name_en && i.name_en.toLowerCase().includes(q))
      );
    }
    return items;
  }, [activeCategory, search]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof menuItems>();
    for (const item of filtered) {
      const list = map.get(item.category) || [];
      list.push(item);
      map.set(item.category, list);
    }
    return map;
  }, [filtered]);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[var(--color-milk)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-gold-muted)] mb-4">
          Menu
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-3">
          Меню
        </h1>
        <p className="text-[var(--color-text-muted)] max-w-xl mb-8">
          Выберите то, ради чего хочется задержаться ещё немного.
        </p>

        <div className="mb-6">
          <input
            type="search"
            placeholder="Поиск по блюдам..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border border-[var(--color-graphite)]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-gold)]"
          />
        </div>

        <div className="sticky top-20 z-20 -mx-4 px-4 py-3 bg-[var(--color-milk)]/95 backdrop-blur-sm border-b border-[var(--color-graphite)]/10 mb-10 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-xs tracking-wider uppercase whitespace-nowrap transition-colors ${
                activeCategory === "all"
                  ? "bg-[var(--color-graphite)] text-[var(--color-cream)]"
                  : "border border-[var(--color-graphite)]/20 hover:border-[var(--color-graphite)]"
              }`}
            >
              Все
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-wider uppercase whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? "bg-[var(--color-graphite)] text-[var(--color-cream)]"
                    : "border border-[var(--color-graphite)]/20 hover:border-[var(--color-graphite)]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-2xl mb-4">Ничего не найдено</p>
            <p className="text-[var(--color-text-muted)] mb-6">
              Попробуйте изменить запрос или категорию.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="text-sm tracking-wider uppercase text-[var(--color-gold-muted)]"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {Array.from(grouped.entries()).map(([catId, items]) => {
              const cat = menuCategories.find((c) => c.id === catId);
              return (
                <section key={catId} id={catId}>
                  <h2 className="font-serif text-2xl md:text-3xl mb-6 border-b border-[var(--color-graphite)]/10 pb-3">
                    {cat?.name || catId}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items
                      .sort((a, b) => a.sort_order - b.sort_order)
                      .map((item) => (
                        <article
                          key={item.id}
                          className="border border-[var(--color-graphite)]/10 bg-white p-5 hover:border-[var(--color-gold)]/40 transition-colors"
                        >
                          <div className="aspect-[4/3] bg-[var(--color-beige)] mb-4 flex items-center justify-center text-xs text-[var(--color-text-muted)] tracking-wide uppercase">
                            [Фото блюда]
                          </div>
                          <h3 className="font-serif text-lg mb-1 leading-snug">
                            {item.name_ru}
                          </h3>
                          {item.name_en && (
                            <p className="text-xs text-[var(--color-text-muted)] mb-2">
                              {item.name_en}
                            </p>
                          )}
                          <div className="flex items-baseline justify-between mt-auto pt-2">
                            {item.weight && (
                              <span className="text-xs text-[var(--color-text-muted)]">
                                {item.weight}
                              </span>
                            )}
                            <span className="font-medium text-[var(--color-graphite)]">
                              {item.price.toLocaleString("ru-RU")} ₸
                            </span>
                          </div>
                          {item.is_signature && (
                            <span className="inline-block mt-2 text-[10px] tracking-wider uppercase text-[var(--color-gold-muted)]">
                              Signature
                            </span>
                          )}
                        </article>
                      ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        <div className="mt-16 p-6 border border-[var(--color-graphite)]/10 bg-[var(--color-cream)] text-center">
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Обслуживание 10%. Цены актуальны на момент публикации меню.
            Уточняйте наличие у администратора.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${restaurant.phoneTel}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-graphite)] text-[var(--color-cream)] text-sm tracking-wide uppercase"
            >
              Позвонить
            </a>
            <a
              href={restaurant.wolt}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-[var(--color-graphite)]/30 text-sm tracking-wide uppercase"
            >
              Заказать доставку (Wolt)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
