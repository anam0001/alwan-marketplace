"use client";

import { FormEvent, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function ReviewForm({ orderId }: { orderId: number }) {
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const { data } = await getSupabaseBrowserClient().auth.getSession();
    if (!data.session) return;
    const response = await fetch("/api/orders/review", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` }, body: JSON.stringify({ orderId, rating: Number(form.get("rating")), review: form.get("review") }) });
    const result = await response.json();
    setMessage(response.ok ? "Review submitted." : result.error || "Could not submit review.");
  }
  return <form onSubmit={submit} className="mt-3 flex flex-col gap-2 sm:flex-row"><select name="rating" className="rounded-xl border border-neutral-200 px-3 py-2"><option value="5">5 stars</option><option value="4">4 stars</option><option value="3">3 stars</option><option value="2">2 stars</option><option value="1">1 star</option></select><input name="review" required minLength={5} placeholder="Share your experience" className="flex-1 rounded-xl border border-neutral-200 px-3 py-2" /><button className="rounded-xl bg-primary px-4 py-2 font-semibold text-white">Review</button>{message && <span className="text-sm text-neutral-600">{message}</span>}</form>;
}
