"use client";

import { FormEvent, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function ServiceForm() {
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const formElement = event.currentTarget; setSaving(true); setMessage("");
    try {
      const { data } = await getSupabaseBrowserClient().auth.getSession();
      if (!data.session) throw new Error("Please sign in again.");
      const form = new FormData(formElement);
      const tiers = ["basic", "plus", "premium"] as const;
      const payload = Object.fromEntries(["title", "category", "description"].map((name) => [name, form.get(name)]));
      for (const tier of tiers) {
        payload[`${tier}Price`] = form.get(`${tier}Price`);
        payload[`${tier}DeliveryDays`] = form.get(`${tier}DeliveryDays`);
        payload[`${tier}Revisions`] = form.get(`${tier}Revisions`);
        payload[`${tier}Details`] = form.get(`${tier}Details`);
      }
      const response = await fetch("/api/services", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` }, body: JSON.stringify(payload) });
      const result = await response.json(); if (!response.ok) throw new Error(result.error || "Could not publish service.");
      setMessage("Service published and now available in Explore."); formElement.reset();
    } catch (error) { setMessage(error instanceof Error ? error.message : "Could not publish service."); } finally { setSaving(false); }
  }
  return <form onSubmit={submit} className="mt-5 space-y-5"><input name="title" required placeholder="Service title" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><input name="category" required placeholder="Category" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><textarea name="description" required minLength={20} rows={3} placeholder="Describe your service" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><div className="grid gap-4 md:grid-cols-3">{(["basic", "plus", "premium"] as const).map((tier) => <div key={tier} className="rounded-2xl border border-neutral-200 p-4"><h3 className="font-bold capitalize text-neutral-900">{tier}</h3><input name={`${tier}Price`} type="number" min="0" required placeholder="Price in PKR" className="mt-3 w-full rounded-xl border border-neutral-200 px-3 py-2" /><input name={`${tier}DeliveryDays`} type="number" min="1" required placeholder="Delivery days" className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2" /><input name={`${tier}Revisions`} type="number" min="0" required placeholder="Revisions" className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2" /><textarea name={`${tier}Details`} required minLength={5} rows={3} placeholder="What this package includes" className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2" /></div>)}</div><button disabled={saving} className="rounded-2xl bg-gradient-primary px-5 py-3 font-semibold text-white">{saving ? "Publishing..." : "Publish service"}</button>{message && <p className="text-sm text-neutral-600">{message}</p>}</form>;
}
