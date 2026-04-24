import React from "react";
import { Link } from "wouter";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <div className="flex flex-col mb-4">
            <span className="font-display font-bold text-xl tracking-tight leading-tight">ANDRADE PLUMBING</span>
            <span className="text-secondary font-bold text-sm leading-none">&amp; ROOTER</span>
          </div>
          <p className="text-primary-foreground/80 mb-2">6355 De Soto Ave<br />Woodland Hills, CA 91367</p>
          <a href="tel:+18187144581" className="text-xl font-display font-bold text-white hover:text-secondary inline-block mt-2">
            (818) 714-4581
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center">
          <p className="font-bold text-lg mb-2 text-white">Open 24 Hours &middot; 7 Days a Week</p>
          <div className="flex items-center gap-2 text-secondary font-medium mt-4 bg-white/5 px-4 py-2 rounded-full">
            <ShieldCheck size={20} />
            <span>Licensed &amp; Insured</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center space-y-3 font-medium">
          <Link href="/services" className="hover:text-secondary transition-colors">Services</Link>
          <Link href="/service-areas" className="hover:text-secondary transition-colors">Service Areas</Link>
          <Link href="/about" className="hover:text-secondary transition-colors">About</Link>
          <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Andrade Plumbing &amp; Rooter. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Woodland Hills, CA</p>
      </div>
    </footer>
  );
}
