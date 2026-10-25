import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import HeroVisual from "@/components/HeroVisual";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";

const stats = [
  { label: "Active licenses", value: "48,000+" },
  { label: "Software titles", value: "120+" },
  { label: "Avg. rating", value: "4.7 / 5" },
  { label: "Instant delivery", value: "100%" },
];

const features = [
  {
    icon: "⚡",
    title: "Instant activation",
    desc: "License keys are generated and delivered the moment your order is confirmed — no waiting, no manual approval.",
  },
  {
    icon: "🔒",
    title: "Verified & secure",
    desc: "Every title is reviewed before listing, and keys are issued directly from official vendor pools.",
  },
  {
    icon: "🔁",
    title: "Free lifetime updates",
    desc: "Your license always covers the latest version within your plan — no surprise upgrade fees.",
  },
  {
    icon: "💬",
    title: "Real human support",
    desc: "Activation issues or license transfers handled by a real support team, not a chatbot loop.",
  },
];

const testimonials = [
  {
    quote:
      "We switched our whole design team to PixelForge Studio through Vaultix — key arrived in seconds, onboarding took minutes.",
    name: "Amelia Reyes",
    role: "Design Lead, Northwind Co.",
    avatar: "🧑‍🎨",
  },
  {
    quote:
      "CodeHive's AI assistant alone paid for the license in the first week. Vaultix checkout was the easiest license purchase I've made.",
    name: "Tariq Hassan",
    role: "Senior Engineer, Fluxware",
    avatar: "👨‍💻",
  },
  {
    quote:
      "Ledgerly keeps our invoicing sane across three currencies. Support actually answers — rare for software this affordable.",
    name: "Priya Nair",
    role: "Founder, Studio Nair",
    avatar: "👩‍💼",
  },
];

const faqs = [
  {
    q: "How is my license delivered?",
    a: "Right after checkout, your activation key and setup instructions are sent to your email and shown on your order confirmation page — usually within seconds.",
  },
  {
    q: "Can I use one license on multiple devices?",
    a: "Seat and device limits vary by plan and are listed on each product's license tiers. Most plans support activation on multiple personal devices.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes — unused licenses can be refunded within 14 days of purchase. Activated enterprise seats are handled case by case by our support team.",
  },
  {
    q: "Is checkout available yet?",
    a: "We're finalizing secure checkout now. Browse products and license tiers today, and join the waitlist on any product page to be notified the moment purchasing opens.",
  },
];

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-white dark:from-indigo-950/40 dark:via-black dark:to-black"
          aria-hidden
        />
        <HeroVisual />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 text-center lg:px-8 lg:pt-28">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/[.08] bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 shadow-sm dark:border-white/[.1] dark:bg-zinc-900 dark:text-zinc-300">
            🚀 New titles added every week
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
            Genuine software &amp; app licenses,{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              activated instantly
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Vaultix is a curated marketplace for design, developer, security, business, and
            media software — verified vendors, transparent pricing, and keys delivered the
            moment you check out.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="rounded-full bg-zinc-900 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-zinc-900/10 transition-transform hover:scale-105 dark:bg-white dark:text-zinc-900"
            >
              Browse all licenses
            </Link>
            <Link
              href="/#features"
              className="rounded-full border border-black/[.08] px-7 py-3 text-base font-semibold text-zinc-700 transition-colors hover:bg-black/[.03] dark:border-white/[.12] dark:text-zinc-200 dark:hover:bg-white/[.05]"
            >
              How it works
            </Link>
          </div>

          <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-black/[.06] bg-white/60 p-5 backdrop-blur-sm dark:border-white/[.08] dark:bg-zinc-900/60"
              >
                <dd className="text-2xl font-bold text-zinc-900 dark:text-white">{s.value}</dd>
                <dt className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
              Featured licenses
            </h2>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Hand-picked software our customers reach for the most.
            </p>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 sm:block"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-black/[.06] bg-zinc-50 py-20 dark:border-white/[.08] dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
              Why teams buy through Vaultix
            </h2>
            <p className="mt-3 text-zinc-500 dark:text-zinc-400">
              Everything you&apos;d expect from a trusted software marketplace, nothing you wouldn&apos;t.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-black/[.06] bg-white p-6 transition-transform hover:-translate-y-1 dark:border-white/[.08] dark:bg-zinc-900">
                  <span className="text-3xl">{f.icon}</span>
                  <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
              Loved by builders and buyers alike
            </h2>
            <p className="mt-3 text-zinc-500 dark:text-zinc-400">
              A few words from people who found their tools through Vaultix.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-black/[.06] bg-white p-6 dark:border-white/[.08] dark:bg-zinc-900">
                  <div className="text-amber-500">★★★★★</div>
                  <blockquote className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-fuchsia-100 text-lg dark:from-indigo-500/20 dark:to-fuchsia-500/20">
                      {t.avatar}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.name}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-rose-500 px-8 py-14 text-center shadow-xl sm:px-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to find your next tool?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-indigo-100">
            Explore every category — design, development, security, business, and media — and
            compare license tiers side by side.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-base font-semibold text-zinc-900 shadow-lg transition-transform hover:scale-105"
          >
            Browse the catalog
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-black/[.06] py-20 dark:border-white/[.08]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            Frequently asked questions
          </h2>

          <div className="mt-10 divide-y divide-black/[.06] dark:divide-white/[.08]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-zinc-900 dark:text-white">
                  {f.q}
                  <span className="ml-4 text-zinc-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
