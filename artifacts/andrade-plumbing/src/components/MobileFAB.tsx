import React from "react";
import { Phone } from "lucide-react";

export function MobileFAB() {
  return (
    <a
      href="tel:+18187144581"
      className="md:hidden fixed bottom-6 right-6 z-50 bg-secondary text-white p-4 rounded-full shadow-2xl hover:bg-secondary/90 transition-all active:scale-95 animate-pulse"
      aria-label="Call Emergency Plumber"
      data-testid="mobile-call-fab"
    >
      <Phone size={28} fill="currentColor" />
    </a>
  );
}
