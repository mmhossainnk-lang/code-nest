export default function LoadingProductsPage() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse px-6 py-16 lg:px-8">
      <div className="h-9 w-56 rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="mt-3 h-4 w-96 max-w-full rounded bg-zinc-200 dark:bg-zinc-800" />

      <div className="mt-8 flex flex-wrap gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-80 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        ))}
      </div>
    </div>
  );
}
