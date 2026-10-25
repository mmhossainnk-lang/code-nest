import type { Metadata } from "next";
import { ViewTransition } from "react";
import ProductsBrowser from "@/components/ProductsBrowser";
import { products, categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Licenses — Vaultix",
  description: "Browse every software and app license available on Vaultix.",
};

const navTransition = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

export default function ProductsPage() {
  return (
    <ViewTransition enter={navTransition} exit={navTransition} default="none">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            All licenses
          </h1>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            {products.length} software titles across design, development, security, business, and
            media. Pick a product to compare license tiers.
          </p>
        </div>

        <div className="mt-8">
          <ProductsBrowser products={products} categories={categories} />
        </div>
      </div>
    </ViewTransition>
  );
}
