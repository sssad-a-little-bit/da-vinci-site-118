"use client";

import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-[var(--color-graphite)]/10 bg-[var(--color-warm-black)]/95 backdrop-blur-md safe-area-pb">
      <div className="grid grid-cols-2 gap-0">
        <Link
          href="#booking"
          className="flex items-center justify-center py-4 text-sm font-medium tracking-wide uppercase text-[var(--color-cream)] hover:bg-white/5 transition-colors"
        >
          Забронировать
        </Link>
        <a
          href={`${restaurant.whatsapp}?text=${encodeURIComponent(restaurant.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-4 text-sm font-medium tracking-wide uppercase bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
