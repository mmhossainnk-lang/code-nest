export default function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden 2xl:block" aria-hidden>
      <div
        className="animate-float absolute left-4 top-24 w-52 rounded-2xl border border-black/[.06] bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:border-white/[.1] dark:bg-zinc-900/90"
        style={{ "--float-rotate": "-4deg" } as React.CSSProperties}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500 text-lg">
            💻
          </span>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">CodeHive IDE</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Pro license</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">✓ Activated</span>
          <span className="text-sm font-bold text-zinc-900 dark:text-white">$19/mo</span>
        </div>
      </div>

      <div
        className="animate-float absolute right-4 top-24 w-48 rounded-2xl border border-black/[.06] bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:border-white/[.1] dark:bg-zinc-900/90"
        style={{ "--float-rotate": "3deg", animationDelay: "1.2s" } as React.CSSProperties}
      >
        <div className="flex items-center gap-1 text-amber-500">⭐⭐⭐⭐⭐</div>
        <p className="mt-2 text-sm font-medium text-zinc-700 dark:text-zinc-200">
          &ldquo;Instant key, zero hassle.&rdquo;
        </p>
        <p className="mt-1 text-xs text-zinc-400">Verified buyer</p>
      </div>

      <div
        className="animate-float absolute bottom-10 left-10 w-44 rounded-2xl border border-black/[.06] bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:border-white/[.1] dark:bg-zinc-900/90"
        style={{ "--float-rotate": "2deg", animationDelay: "0.6s" } as React.CSSProperties}
      >
        <p className="text-xs text-zinc-500 dark:text-zinc-400">License key</p>
        <p className="mt-1 font-mono text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-400">
          VX-7F2K-9QRT
        </p>
      </div>

      <div
        className="animate-float absolute bottom-10 right-10 w-40 rounded-2xl border border-black/[.06] bg-white/90 p-4 shadow-xl backdrop-blur-sm dark:border-white/[.1] dark:bg-zinc-900/90"
        style={{ "--float-rotate": "-3deg", animationDelay: "1.8s" } as React.CSSProperties}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-lg">
          🛡️
        </span>
        <p className="mt-2 text-sm font-semibold text-zinc-900 dark:text-white">Nimbus VPN</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">10 devices</p>
      </div>
    </div>
  );
}
