"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { startingPrice, type Product } from "@/lib/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

const sortOptions: { value: SortKey; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function ProductsBrowser({
  products,
  categories,
}: {
  products: Product[];
  categories: string[];
}) {
  const [active, setActive] = useState<string | "All">("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    const byCategory = active === "All" ? products : products.filter((p) => p.category === active);
    const q = query.trim().toLowerCase();
    const matched = !q
      ? byCategory
      : byCategory.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.tagline.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );

    const sorted = [...matched];
    if (sort === "price-asc") sorted.sort((a, b) => startingPrice(a) - startingPrice(b));
    else if (sort === "price-desc") sorted.sort((a, b) => startingPrice(b) - startingPrice(a));
    else if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);

    return sorted;
  }, [active, query, sort, products]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c as "All")}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                active === c
                  ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-900"
                  : "border-black/[.1] text-zinc-600 hover:border-black/[.2] dark:border-white/[.12] dark:text-zinc-300 dark:hover:border-white/[.25]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative w-full sm:w-64">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search licenses..."
              aria-label="Search licenses"
              className="w-full rounded-full border border-black/[.1] bg-white py-2 pl-9 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none dark:border-white/[.12] dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            aria-label="Sort licenses"
            className="rounded-full border border-black/[.1] bg-white px-4 py-2 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none dark:border-white/[.12] dark:bg-zinc-900 dark:text-white dark:focus:border-white"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
        {filtered.length} title{filtered.length === 1 ? "" : "s"}
        {active !== "All" ? ` in ${active}` : ""}
        {query.trim() ? ` matching "${query.trim()}"` : ""}
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 80}>
            <ProductCard product={p} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-400">
          No licenses match your search.
        </p>
      )}
    </div>
  );
}
