"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    function onResize() {
      if (window.innerWidth >= 640) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-shadow dark:bg-black/70 ${
        scrolled
          ? "border-black/[.08] shadow-sm dark:border-white/[.1]"
          : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white">
            VX
          </span>
          <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Vaultix
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300 sm:flex">
          <Link href="/products" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
            Products
          </Link>
          <Link href="/#features" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
            Features
          </Link>
          <Link href="/#faq" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/products"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white sm:block"
          >
            Sign in
          </Link>
          <Link
            href="/products"
            className="hidden rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] dark:bg-white dark:text-zinc-900 sm:block"
          >
            Browse Licenses
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[.08] text-zinc-600 dark:border-white/[.12] dark:text-zinc-300 sm:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-[18px] w-[18px]">
              {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-black/[.06] bg-white px-6 py-4 dark:border-white/[.08] dark:bg-black sm:hidden"
        >
          <div className="flex flex-col gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-black/[.04] dark:hover:bg-white/[.06]"
            >
              Products
            </Link>
            <Link
              href="/#features"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-black/[.04] dark:hover:bg-white/[.06]"
            >
              Features
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-black/[.04] dark:hover:bg-white/[.06]"
            >
              FAQ
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-black/[.04] dark:hover:bg-white/[.06]"
            >
              Sign in
            </Link>
            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-zinc-900 px-4 py-2.5 text-center font-semibold text-white dark:bg-white dark:text-zinc-900"
            >
              Browse Licenses
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
