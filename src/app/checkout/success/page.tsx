import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order confirmed — Vaultix",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center lg:px-8">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl dark:bg-emerald-500/10">
        ✅
      </span>
      <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        Thank you — your order is confirmed!
      </h1>
      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
        Your license key and receipt have been sent to your email. If it doesn&apos;t arrive within a
        few minutes, check your spam folder or contact support.
      </p>
      <Link
        href="/products"
        className="mt-10 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 dark:bg-white dark:text-zinc-900"
      >
        Browse more licenses
      </Link>
    </div>
  );
}
