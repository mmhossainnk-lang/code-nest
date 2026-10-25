import { ViewTransition } from "react";
import Link from "next/link";
import { startingPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const price = startingPrice(product);

  return (
    <Link
      href={`/products/${product.slug}`}
      transitionTypes={["nav-forward"]}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[.06] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/[.08] dark:bg-zinc-900"
    >
      <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${product.gradient}`}>
        <ViewTransition name={`product-icon-${product.slug}`} share="morph" default="none">
          <span className="text-5xl drop-shadow-sm">{product.icon}</span>
        </ViewTransition>
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-zinc-900 shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-indigo-600 dark:text-indigo-400">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
            ⭐ {product.rating}
            <span className="text-zinc-400">({product.reviews.toLocaleString()})</span>
          </span>
        </div>

        <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{product.name}</h3>
        <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{product.tagline}</p>

        <div className="mt-4 flex items-center justify-between border-t border-black/[.06] pt-4 dark:border-white/[.08]">
          <div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">Starting at</span>
            <p className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
              {price === 0 ? "Free" : `$${price}`}
            </p>
          </div>
          <span className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition-transform group-hover:scale-105 dark:bg-white dark:text-zinc-900">
            View license
          </span>
        </div>
      </div>
    </Link>
  );
}
