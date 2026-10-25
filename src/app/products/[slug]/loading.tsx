export default function LoadingProductPage() {
  return (
    <div className="animate-pulse">
      <div className="bg-zinc-200 dark:bg-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="h-4 w-40 rounded bg-zinc-300 dark:bg-zinc-700" />
          <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="h-20 w-20 rounded-2xl bg-zinc-300 dark:bg-zinc-700" />
            <div className="flex-1">
              <div className="h-8 w-64 rounded bg-zinc-300 dark:bg-zinc-700" />
              <div className="mt-3 h-5 w-80 rounded bg-zinc-300 dark:bg-zinc-700" />
              <div className="mt-3 h-4 w-48 rounded bg-zinc-300 dark:bg-zinc-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="h-5 w-40 rounded bg-zinc-200 dark:bg-zinc-800" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="h-4 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>
          </div>
          <div className="h-40 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-72 rounded-2xl bg-zinc-200 dark:bg-zinc-800" />
          ))}
        </div>
      </div>
    </div>
  );
}
