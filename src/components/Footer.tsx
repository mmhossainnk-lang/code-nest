import Link from "next/link";
import { categories } from "@/lib/products";
import { lemonSqueezyConfigured } from "@/lib/lemonsqueezy";

export default function Footer() {
  return (
    <footer className="border-t border-black/[.06] bg-zinc-50 dark:border-white/[.08] dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white">
                VX
              </span>
              <span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Vaultix
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-400">
              Instant software & app licenses for creators, developers, and growing teams.
              Secure checkout, instant delivery, lifetime updates.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Categories</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
              {categories.map((c) => (
                <li key={c}>
                  <Link href="/products" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
              <li>
                <Link href="/#faq" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-black/[.06] pt-6 text-sm text-zinc-500 dark:border-white/[.08] dark:text-zinc-400 sm:flex-row">
          <p>&copy; 2026 Vaultix. All rights reserved.</p>
          <p>
            {lemonSqueezyConfigured
              ? "Secure checkout powered by Lemon Squeezy — instant activation keys."
              : "Secure payments coming soon — licenses ship with instant activation keys."}
          </p>
        </div>
      </div>
    </footer>
  );
}
