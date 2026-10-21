"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function DashboardPage() {
  const router = useRouter();
  const [creator, setCreator] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const supabase = getSupabaseBrowserClient();
        const { data: sessionData } = await supabase.auth.getSession();
        if (!sessionData.session) {
          router.replace("/sign-in");
          return;
        }
        const response = await fetch("/api/me/creator", {
          headers: { Authorization: `Bearer ${sessionData.session.access_token}` },
          cache: "no-store",
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "Could not load dashboard.");
        setCreator(result.creator);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "Could not load dashboard.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [router]);

  async function signOut() {
    await getSupabaseBrowserClient().auth.signOut();
    router.replace("/");
  }

  return (
    <section className="min-h-screen bg-neutral-50 pt-28 pb-16">
      <div className="container-custom max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">Creator dashboard</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-neutral-900 font-heading">Your Alwan workspace</h1>
          </div>
          <button onClick={signOut} className="rounded-2xl border border-primary/20 px-5 py-3 font-semibold text-primary">Sign out</button>
        </div>

        {loading && <p className="mt-8 text-neutral-500">Loading your profile...</p>}
        {error && <p className="mt-8 rounded-2xl bg-red-50 p-4 text-red-700">{error}</p>}
        {!loading && !error && !creator && (
          <div className="mt-8 rounded-[2rem] bg-white p-8 shadow-card">
            <h2 className="text-2xl font-bold text-neutral-900">Your creator profile is not submitted yet.</h2>
            <p className="mt-3 text-neutral-600">Complete your profile and upload portfolio work to send it for approval.</p>
            <Link href="/join" className="mt-6 inline-flex rounded-2xl bg-gradient-primary px-6 py-3 font-semibold text-white">Create Profile</Link>
          </div>
        )}
        {!loading && !error && creator && (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] bg-white p-6 shadow-card md:p-8">
              <div className="flex items-center gap-4">
                {creator.image ? <img src={creator.image} alt={creator.name} className="h-20 w-20 rounded-2xl object-cover" /> : <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">{creator.name?.slice(0, 2).toUpperCase()}</div>}
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">{creator.name}</h2>
                  <p className="text-primary">{creator.skill} · {creator.city}</p>
                </div>
              </div>
              <p className="mt-6 leading-relaxed text-neutral-600">{creator.description}</p>
              <div className="mt-6 rounded-2xl bg-secondary/30 p-4 text-sm font-semibold text-neutral-800">Application status: <span className="text-primary capitalize">{creator.status}</span></div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-card md:p-8">
              <h2 className="text-xl font-bold text-neutral-900">Portfolio</h2>
              {creator.portfolio_files?.length ? <div className="mt-4 grid grid-cols-2 gap-3">{creator.portfolio_files.map((url: string) => <img key={url} src={url} alt="Portfolio work" className="aspect-square w-full rounded-2xl object-cover" />)}</div> : <p className="mt-3 text-neutral-600">No portfolio images uploaded yet.</p>}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
