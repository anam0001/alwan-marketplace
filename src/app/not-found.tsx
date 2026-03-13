import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      {/* Decorative animated background (server-rendered) */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary/60 blur-3xl animate-float-reverse" />
        <div className="absolute top-20 left-1/4 w-3 h-3 rounded-full bg-primary/30 animate-pulse-soft" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent-gold/40 animate-pulse-soft animation-delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/25 animate-pulse-soft animation-delay-2000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center rounded-3xl bg-white/85 backdrop-blur-md border border-primary/10 shadow-card p-8 md:p-12">
          <div
            className="text-6xl md:text-7xl"
            aria-hidden="true"
          >
            <span className="inline-block animate-float">🚧</span>
          </div>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gradient-primary">
            404
          </h1>

          <h2 className="mt-2 text-xl md:text-2xl font-bold text-neutral-900">
            This page is not available right now
          </h2>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            Good news: Alwan is actively evolving 💜
            <br />
            The page you tried is either missing or currently under development.
            We’re building new features to make this marketplace even better.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="px-6 py-3 rounded-2xl bg-gradient-primary text-white font-semibold shadow-soft hover:scale-[1.02] transition-transform"
            >
              Back to Home
            </Link>
            <Link
              href="/explore"
              className="px-6 py-3 rounded-2xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Explore Marketplace
            </Link>
          </div>

          <div className="mt-6 text-xs text-neutral-400">
            Tip: Try valid creator profiles like
            <Link href="/creator/1" className="mx-1 text-primary hover:underline">
              /creator/1
            </Link>
            or
            <Link href="/creator/2" className="mx-1 text-primary hover:underline">
              /creator/2
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
