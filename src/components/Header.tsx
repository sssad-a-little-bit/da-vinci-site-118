"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { cn } from "@/lib/utils";
// icons inlined

const navItems = [
  { href: "/menu", label: "Меню" },
  { href: "/about", label: "О ресторане" },
  { href: "/vip", label: "VIP-залы" },
  { href: "/events", label: "Мероприятия" },
  { href: "/gallery", label: "Галерея" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[var(--color-warm-black)]/90 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                "font-serif text-2xl tracking-[0.15em] uppercase transition-colors",
                scrolled ? "text-[var(--color-cream)]" : "text-[var(--color-cream)]"
              )}
            >
              {restaurant.name}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm tracking-wide uppercase transition-colors hover:text-[var(--color-gold)]",
                    scrolled
                      ? "text-[var(--color-cream)]/90"
                      : "text-[var(--color-cream)]/90"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="#booking"
                className={cn(
                  "inline-flex items-center px-5 py-2.5 text-sm font-medium tracking-wide uppercase transition-all duration-300",
                  scrolled
                    ? "bg-[var(--color-cream)] text-[var(--color-warm-black)] hover:bg-white"
                    : "bg-[var(--color-cream)] text-[var(--color-warm-black)] hover:bg-white"
                )}
              >
                Забронировать
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-3">
              <Link
                href="#booking"
                className="inline-flex items-center px-3 py-2 text-xs font-medium tracking-wide uppercase bg-[var(--color-cream)] text-[var(--color-warm-black)]"
              >
                Бронь
              </Link>
              <button
                type="button"
                aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-[var(--color-cream)]"
              >
                {mobileOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[var(--color-warm-black)] transition-all duration-500 lg:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-10">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-[var(--color-cream)] tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <a
              href={`tel:${restaurant.phoneTel}`}
              className="flex items-center gap-3 text-[var(--color-cream)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>{restaurant.phone}</span>
            </a>
            <a
              href={`${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center px-6 py-4 bg-[#25D366] text-white font-medium tracking-wide uppercase"
            >
              WhatsApp
            </a>
            <Link
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center px-6 py-4 bg-[var(--color-cream)] text-[var(--color-warm-black)] font-medium tracking-wide uppercase"
            >
              Забронировать стол
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
