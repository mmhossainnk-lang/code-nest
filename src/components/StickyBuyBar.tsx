"use client";

import { useEffect, useRef, useState } from "react";

export default function StickyBuyBar({
  name,
  icon,
  price,
}: {
  name: string;
  icon: string;
  price: number;
}) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      rootMargin: "-1px 0px 0px 0px",
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="h-px" aria-hidden />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-black/[.08] bg-white/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 dark:border-white/[.1] dark:bg-black/95 sm:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-lg dark:bg-zinc-800">
              {icon}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-zinc-900 dark:text-white">{name}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {price === 0 ? "Free" : `From $${price}`}
              </p>
            </div>
          </div>
          <a
            href="#license-tiers"
            className="shrink-0 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900"
          >
            View plans
          </a>
        </div>
      </div>
    </>
  );
}
