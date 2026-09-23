import Link from "next/link";
import { restaurant } from "@/data/restaurant";

const footerNav = [
  { href: "/menu", label: "Меню" },
  { href: "/about", label: "О ресторане" },
  { href: "/vip", label: "VIP" },
  { href: "/events", label: "Мероприятия" },
  { href: "/gallery", label: "Галерея" },
  { href: "/contacts", label: "Контакты" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-warm-black)] text-[var(--color-cream)] pb-20 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl tracking-[0.15em] uppercase"
            >
              {restaurant.name}
            </Link>
            <p className="mt-4 text-sm text-[var(--color-cream)]/70">
              {restaurant.city}
              <br />
              {restaurant.address}
              <br />
              {restaurant.hoursShort}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
              Навигация
            </p>
            <nav className="flex flex-col gap-2">
              {footerNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-gold)] mb-4">
              Связь
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${restaurant.phoneTel}`}
                className="text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] transition-colors"
              >
                {restaurant.phone}
              </a>
              <a
                href={`${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={restaurant.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-cream)]/80 hover:text-[var(--color-gold)] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-cream)]/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-[var(--color-cream)]/50">
          <span>© {new Date().getFullYear()} {restaurant.name}</span>
          <Link href="/privacy" className="hover:text-[var(--color-cream)]/80">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
