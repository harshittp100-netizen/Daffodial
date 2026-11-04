"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/about", label: "About" },
  { href: "/championship", label: "Championship" },
  { href: "/agenda", label: "Agenda" },
  { href: "/speakers", label: "Speakers" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/venue", label: "Venue" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-display font-bold text-navy-900 text-lg">
              M
            </div>
            <div>
              <span className="block text-lg font-semibold tracking-tight">
                MBDC 2027
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-500">
                Business Debate Championship
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/sponsor-enquiry" className="btn-outline text-sm">
              Partner With Us
            </Link>
            <Link href="/rsvp" className="btn-primary text-sm">
              RSVP / Register
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-navy-800 border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-white/90 hover:text-gold-400"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link href="/sponsor-enquiry" className="btn-outline text-center" onClick={() => setOpen(false)}>
                Partner With Us
              </Link>
              <Link href="/rsvp" className="btn-primary text-center" onClick={() => setOpen(false)}>
                RSVP / Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
