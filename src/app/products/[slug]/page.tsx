import type { Metadata } from "next";
import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, products, startingPrice } from "@/lib/products";
import LicenseTierCard from "@/components/LicenseTierCard";
import ProductCard from "@/components/ProductCard";
import StickyBuyBar from "@/components/StickyBuyBar";
import { siteUrl } from "@/lib/site";

const navTransition = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

export const instant = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const title = `${product.name} — Vaultix`;
  return {
    title,
    description: product.description,
    alternates: {
      canonical: `${siteUrl}/products/${product.slug}`,
    },
    openGraph: {
      title,
      description: product.description,
      url: `${siteUrl}/products/${product.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviews,
    },
    offers: product.licenses.map((license) => ({
      "@type": "Offer",
      name: license.name,
      price: license.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/products/${product.slug}`,
    })),
  };

  return (
    <ViewTransition key={product.slug} enter={navTransition} exit={navTransition} default="none">
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <section className={`bg-gradient-to-br ${product.gradient}`}>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <nav className="text-sm text-white/80">
            <Link href="/products" transitionTypes={["nav-back"]} className="hover:text-white">
              All licenses
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <ViewTransition name={`product-icon-${product.slug}`} share="morph" default="none">
              <span className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-white/15 text-5xl backdrop-blur-sm">
                {product.icon}
              </span>
            </ViewTransition>
            <div>
              {product.badge && (
                <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-900">
                  {product.badge}
                </span>
              )}
              <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{product.name}</h1>
              <p className="mt-2 text-lg text-white/90">{product.tagline}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/80">
                ⭐ {product.rating} &middot; {product.reviews.toLocaleString()} reviews &middot;{" "}
                {product.category}
              </p>
            </div>
          </div>
        </div>
      </section>

      <StickyBuyBar name={product.name} icon={product.icon} price={startingPrice(product)} />

      <section className="mx-auto max-w-7xl px-6 py-16 pb-24 sm:pb-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">About this license</h2>
            <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
              {product.description}
            </p>

            <h3 className="mt-10 text-lg font-semibold text-zinc-900 dark:text-white">Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2 rounded-xl border border-black/[.06] bg-zinc-50 p-4 text-sm text-zinc-600 dark:border-white/[.08] dark:bg-zinc-900 dark:text-zinc-300"
                >
                  <span className="mt-0.5 text-indigo-500">✦</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-black/[.06] bg-zinc-50 p-6 dark:border-white/[.08] dark:bg-zinc-900">
            <h3 className="font-semibold text-zinc-900 dark:text-white">Need help choosing?</h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Compare the license tiers below. Checkout is launching soon — choose a plan to join
              the early-access notification list.
            </p>
            <Link
              href="/products"
              transitionTypes={["nav-back"]}
              className="mt-4 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              &larr; Back to all licenses
            </Link>
          </aside>
        </div>

        <h2
          id="license-tiers"
          className="mt-16 scroll-mt-20 text-xl font-semibold text-zinc-900 dark:text-white"
        >
          License tiers
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {product.licenses.map((license) => (
            <LicenseTierCard key={license.name} license={license} productName={product.name} />
          ))}
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              More in {product.category}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
    </ViewTransition>
  );
}
