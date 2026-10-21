"use client";

import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

type Creator = { id: number; name: string; city: string; skill: string; description: string; status: string; created_at: string; };

export default function AdminCreatorsPage() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [error, setError] = useState("");

  async function load() {
    try {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase.auth.getSession();
      if (!data.session) throw new Error("Please sign in as an admin.");
      const response = await fetch("/api/admin/creators", { headers: { Authorization: `Bearer ${data.session.access_token}` }, cache: "no-store" });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not load creators.");
      setCreators(result.creators);
    } catch (loadError) { setError(loadError instanceof Error ? loadError.message : "Could not load creators."); }
  }

  useEffect(() => { load(); }, []);

  async function update(id: number, status: string) {
    const supabase = getSupabaseBrowserClient();
    const { data } = await supabase.auth.getSession();
    if (!data.session) return;
    await fetch("/api/admin/creators", { method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` }, body: JSON.stringify({ id, status }) });
    load();
  }

  return <section className="min-h-screen bg-neutral-50 pt-28 pb-16"><div className="container-custom"><h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 font-heading">Creator approvals</h1><p className="mt-3 text-neutral-600">Review creator applications before they appear publicly.</p>{error && <p className="mt-6 rounded-2xl bg-red-50 p-4 text-red-700">{error}</p>}<div className="mt-8 space-y-4">{creators.map((creator) => <article key={creator.id} className="rounded-3xl bg-white p-6 shadow-soft"><div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div><h2 className="text-xl font-bold text-neutral-900">{creator.name}</h2><p className="text-primary">{creator.skill} · {creator.city}</p><p className="mt-2 text-neutral-600">{creator.description}</p></div><div className="flex gap-2"><button onClick={() => update(creator.id, "approved")} className="rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white">Approve</button><button onClick={() => update(creator.id, "rejected")} className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white">Reject</button></div></div><p className="mt-4 text-sm font-semibold capitalize text-neutral-500">Status: {creator.status}</p></article>)}{!error && creators.length === 0 && <p className="rounded-3xl bg-white p-8 text-neutral-500">No creator applications found.</p>}</div></div></section>;
}
