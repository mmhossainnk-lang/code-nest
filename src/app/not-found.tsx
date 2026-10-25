import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found — Vaultix",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center lg:px-8">
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-2xl font-bold text-white">
        404
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        This license doesn&apos;t exist
      </h1>
      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        The page you&apos;re looking for may have been moved, renamed, or never existed. Let&apos;s
        get you back to browsing.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/products"
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-zinc-900"
        >
          Browse all licenses
        </Link>
        <Link
          href="/"
          className="rounded-full border border-black/[.08] px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-black/[.03] dark:border-white/[.12] dark:text-zinc-200 dark:hover:bg-white/[.05]"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
