"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Message = {
  id: number;
  creator_id?: number;
  creatorId?: number;
  creator_name?: string;
  creatorName?: string;
  sender_name?: string;
  senderName?: string;
  sender_email?: string;
  senderEmail?: string;
  sender_phone?: string;
  senderPhone?: string;
  sender_city?: string;
  senderCity?: string;
  message: string;
  created_at?: string;
  createdAt?: string;
};

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function loadMessages() {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/messages?limit=100", { cache: "no-store" });
      const data = await res.json();
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to load messages");
      setMessages(data.messages || []);
    } catch (e: any) {
      setError(e?.message || "Could not load messages");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMessages();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return messages;
    return messages.filter((m) => {
      const creator = (m.creator_name || m.creatorName || "").toLowerCase();
      const sender = (m.sender_name || m.senderName || "").toLowerCase();
      const email = (m.sender_email || m.senderEmail || "").toLowerCase();
      const city = (m.sender_city || m.senderCity || "").toLowerCase();
      const text = (m.message || "").toLowerCase();
      return [creator, sender, email, city, text].some((v) => v.includes(q));
    });
  }, [messages, search]);

  return (
    <section className="min-h-screen bg-neutral-50 pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Admin • Messages</h1>
            <p className="text-neutral-500 mt-2">All contact submissions are shown here (latest first).</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={loadMessages}
              className="px-4 py-2 rounded-xl border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Refresh
            </button>
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-gradient-primary text-white font-semibold"
            >
              Home
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 shadow-soft p-4 md:p-6 mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by creator, sender, city, email, message..."
            className="w-full rounded-xl border-neutral-200 focus:border-primary focus:ring-primary/20"
          />
        </div>

        {loading && <p className="text-neutral-500">Loading messages...</p>}
        {error && <p className="text-rose-600 font-medium">{error}</p>}

        {!loading && !error && filtered.length === 0 && (
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 text-center text-neutral-500">
            No messages found yet.
          </div>
        )}

        <div className="space-y-4">
          {filtered.map((m) => {
            const creator = m.creator_name || m.creatorName || "Unknown Creator";
            const sender = m.sender_name || m.senderName || "Unknown Sender";
            const email = m.sender_email || m.senderEmail || "";
            const phone = m.sender_phone || m.senderPhone || "";
            const city = m.sender_city || m.senderCity || "";
            const created = m.created_at || m.createdAt || "";
            return (
              <article key={m.id} className="bg-white rounded-2xl border border-neutral-200 shadow-soft p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h2 className="font-bold text-neutral-900">#{m.id} • {sender} → {creator}</h2>
                  <span className="text-xs text-neutral-400">{created ? new Date(created).toLocaleString() : ""}</span>
                </div>
                <div className="mt-2 text-sm text-neutral-600">
                  <span className="font-medium">Email:</span> {email || "-"}
                  {phone ? <span className="ml-4"><span className="font-medium">Phone:</span> {phone}</span> : null}
                  {city ? <span className="ml-4"><span className="font-medium">City:</span> {city}</span> : null}
                </div>
                <p className="mt-3 text-neutral-700 leading-relaxed whitespace-pre-wrap">{m.message}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
