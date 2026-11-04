"use client";

import { FormEvent, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function ServiceForm() {
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSaving(true); setMessage("");
    try {
      const { data } = await getSupabaseBrowserClient().auth.getSession();
      if (!data.session) throw new Error("Please sign in again.");
      const form = new FormData(event.currentTarget);
      const response = await fetch("/api/services", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` }, body: JSON.stringify({ title: form.get("title"), category: form.get("category"), description: form.get("description"), basicPrice: form.get("basicPrice"), plusPrice: form.get("plusPrice"), premiumPrice: form.get("premiumPrice") }) });
      const result = await response.json(); if (!response.ok) throw new Error(result.error || "Could not publish service.");
      setMessage("Service published and now available in Explore."); (event.target as HTMLFormElement).reset();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Could not publish service."); } finally { setSaving(false); }
  }
  return <form onSubmit={submit} className="mt-5 space-y-3"><input name="title" required placeholder="Service title" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><input name="category" required placeholder="Category" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><textarea name="description" required minLength={20} rows={3} placeholder="Describe your service" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><div className="grid grid-cols-3 gap-2"><input name="basicPrice" type="number" min="0" placeholder="Basic" className="w-full rounded-2xl border border-neutral-200 px-3 py-3" /><input name="plusPrice" type="number" min="0" placeholder="Plus" className="w-full rounded-2xl border border-neutral-200 px-3 py-3" /><input name="premiumPrice" type="number" min="0" placeholder="Premium" className="w-full rounded-2xl border border-neutral-200 px-3 py-3" /></div><button disabled={saving} className="rounded-2xl bg-gradient-primary px-5 py-3 font-semibold text-white">{saving ? "Publishing..." : "Publish service"}</button>{message && <p className="text-sm text-neutral-600">{message}</p>}</form>;
}
