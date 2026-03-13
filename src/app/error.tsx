"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen pt-36 pb-16 bg-neutral-50">
      <div className="container-custom max-w-2xl">
        <div className="rounded-3xl bg-white border border-neutral-200 shadow-card p-8 md:p-10 text-center">
          <p className="inline-flex px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-semibold">
            Something went wrong
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-neutral-900">
            We hit a small glitch ⚠️
          </h1>
          <p className="mt-3 text-neutral-600">
            Don&apos;t worry — your data is safe. Please try again, or continue browsing.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 rounded-2xl bg-gradient-primary text-white font-semibold"
            >
              Retry Page
            </button>
            <Link
              href="/"
              className="px-6 py-3 rounded-2xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Back to Home
            </Link>
          </div>

          {process.env.NODE_ENV === "development" && (
            <pre className="mt-6 text-left text-xs p-4 rounded-xl bg-neutral-900 text-neutral-100 overflow-auto">
              {error?.message}
            </pre>
          )}
        </div>
      </div>
    </section>
  );
}