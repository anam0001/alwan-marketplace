"use client";

import { FormEvent, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function OrderRequestForm({ creatorId, creatorName }: { creatorId: number; creatorName: string }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setStatus("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase.auth.getSession();
      if (!data.session) throw new Error("Please sign in before placing an order.");
      const form = new FormData(event.currentTarget);
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` },
        body: JSON.stringify({ creatorId, title: form.get("title"), details: form.get("details"), amount: form.get("amount") }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not place order request.");
      setStatus("Order request sent. The creator will see it in their dashboard.");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Could not place order request.");
    } finally { setSaving(false); }
  }

  return <div className="mt-4"><button onClick={() => setOpen((value) => !value)} className="rounded-2xl bg-primary px-5 py-3 font-semibold text-white">{open ? "Close order request" : `Request an order from ${creatorName.split(" ")[0]}`}</button>{open && <form onSubmit={submit} className="mt-4 rounded-3xl border border-primary/10 bg-white p-5 shadow-soft space-y-3"><input name="title" required placeholder="What do you need?" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><textarea name="details" required minLength={10} rows={4} placeholder="Describe the work, deadline, and requirements" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><input name="amount" type="number" min="0" step="0.01" placeholder="Budget in PKR" className="w-full rounded-2xl border border-neutral-200 px-4 py-3" /><button disabled={saving} className="rounded-2xl bg-gradient-primary px-5 py-3 font-semibold text-white disabled:opacity-60">{saving ? "Sending..." : "Send order request"}</button>{status && <p className="text-sm text-neutral-600">{status}</p>}</form>}</div>;
}
