import React, { useState } from "react";
import { Link } from "wouter";
import { Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-display font-bold text-xl tracking-tight leading-tight">ANDRADE PLUMBING</span>
          <span className="text-secondary font-bold text-sm leading-none">&amp; ROOTER</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 font-medium text-sm">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
            <Link href="/service-areas" className="hover:text-secondary transition-colors">Service Areas</Link>
            <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col items-end">
            <a href="tel:+18187144581" className="text-xl font-display font-bold hover:text-secondary transition-colors" data-testid="nav-call-link">
              (818) 714-4581
            </a>
            <span className="text-secondary text-xs font-bold uppercase tracking-wider">24/7 Emergency Service</span>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <a href="tel:+18187144581" className="bg-secondary text-white p-2 rounded-full shadow-lg" aria-label="Call Now" data-testid="mobile-nav-call">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white" aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 absolute w-full left-0 shadow-xl">
          <nav className="flex flex-col p-4 space-y-4 font-medium">
            <Link href="/" className="px-4 py-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" className="px-4 py-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/service-areas" className="px-4 py-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Service Areas</Link>
            <Link href="/about" className="px-4 py-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="px-4 py-2 hover:bg-white/5 rounded-md" onClick={() => setIsOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
