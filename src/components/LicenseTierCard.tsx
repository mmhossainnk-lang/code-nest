"use client";

import { useState } from "react";
import type { License } from "@/lib/products";
import { buildCheckoutUrl, lemonSqueezyConfigured } from "@/lib/lemonsqueezy";

function periodLabel(period: License["period"]) {
  if (period === "one-time") return "one-time";
  if (period === "year") return "/ year";
  return "/ month";
}

export default function LicenseTierCard({
  license,
  productName,
}: {
  license: License;
  productName: string;
}) {
  const [notified, setNotified] = useState(false);

  const canCheckout = lemonSqueezyConfigured && Boolean(license.lemonVariantId);

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 transition-all ${
        license.highlighted
          ? "border-indigo-500 bg-indigo-50/60 shadow-md dark:border-indigo-400 dark:bg-indigo-500/10"
          : "border-black/[.08] bg-white dark:border-white/[.08] dark:bg-zinc-900"
      }`}
    >
      {license.highlighted && (
        <span className="absolute -top-3 left-6 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
          Most popular
        </span>
      )}

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{license.name}</h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{license.seats}</p>

      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-zinc-900 dark:text-white">
          {license.price === 0 ? "Free" : `$${license.price}`}
        </span>
        {license.price > 0 && (
          <span className="text-sm text-zinc-500 dark:text-zinc-400">{periodLabel(license.period)}</span>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {license.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <span className="mt-0.5 text-emerald-500">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {canCheckout ? (
        <a
          href={buildCheckoutUrl(license.lemonVariantId!)}
          className={`lemonsqueezy-button mt-6 inline-block rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-colors ${
            license.highlighted
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          }`}
          data-product={productName}
          data-tier={license.name}
        >
          Buy {license.name} license
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setNotified(true)}
          className={`mt-6 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
            notified
              ? "bg-emerald-500 text-white"
              : license.highlighted
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          }`}
        >
          {notified ? "Added — checkout opening soon" : "Choose this plan"}
        </button>
      )}
    </div>
  );
}
