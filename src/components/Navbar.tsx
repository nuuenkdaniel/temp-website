"use client";

import Link from "next/link";
import * as React from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [hiddenOnMobile, setHiddenOnMobile] = React.useState(false);

  // Close on Escape
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Prevent background scroll when menu open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [menuOpen]);

  // Hide-on-scroll (mobile only)
  React.useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)"); // md breakpoint
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (media.matches) return; // desktop: don't hide

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;
          const goingDown = y > lastY;
          const delta = Math.abs(y - lastY);

          if (delta > 8) {
            // don't hide at very top; also don't hide while menu is open
            setHiddenOnMobile(!menuOpen && goingDown && y > 72);
            lastY = y;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* Sticky bar */}
      <nav
        className={[
          "sticky top-0 z-9999 bg-white shadow-sm border border-neutral-200",
          "transition-transform duration-300",
          hiddenOnMobile ? "-translate-y-full md:translate-y-0" : "translate-y-0",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="text-2xl font-serif text-primary-900 font-bold tracking-tight no-underline"
            onClick={closeMenu}
          >
            Company <span className="text-primary-500">name</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-stone-600 font-medium [&_a]:no-underline">
            <Link href="/services" className="hover:text-primary-700 transition-colors">
              Services
            </Link>
            <Link href="/therapists" className="hover:text-primary-700 transition-colors">
              Therapists
            </Link>
            <Link href="/about" className="hover:text-primary-700 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary-700 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white/80 backdrop-blur px-3 py-2 text-neutral-700 hover:bg-white transition"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-10000 md:hidden">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={closeMenu}
          />

          {/* Panel */}
          <div className="absolute top-0 left-0 right-0 bg-white rounded-b-2xl shadow-xl border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-serif text-primary-900 font-bold tracking-tight no-underline"
                onClick={closeMenu}
              >
                Company <span className="text-primary-500">name</span>
              </Link>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 py-2 text-neutral-700 hover:bg-neutral-50 transition"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-7">
              <div className="grid gap-2 text-neutral-800">
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="no-underline rounded-xl px-4 py-3 text-lg font-medium hover:bg-primary-50 hover:text-primary-900 transition"
                >
                  Services
                </Link>
                <Link
                  href="/therapists"
                  onClick={closeMenu}
                  className="no-underline rounded-xl px-4 py-3 text-lg font-medium hover:bg-primary-50 hover:text-primary-900 transition"
                >
                  Therapists
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="no-underline rounded-xl px-4 py-3 text-lg font-medium hover:bg-primary-50 hover:text-primary-900 transition"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="no-underline rounded-xl px-4 py-3 text-lg font-medium hover:bg-primary-50 hover:text-primary-900 transition"
                >
                  Contact Us
                </Link>
              </div>

              {/* Optional quick contact block */}
              <div className="mt-6 rounded-2xl border border-primary-100 bg-primary-50 p-4">
                <div className="text-sm font-medium text-primary-900">Need help booking?</div>
                <div className="text-sm text-primary-900/80">
                  Email us or send a message on the Contact page.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

