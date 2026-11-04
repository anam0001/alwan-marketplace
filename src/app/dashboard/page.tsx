"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";
import ServiceForm from "@/components/forms/ServiceForm";
import ReviewForm from "@/components/forms/ReviewForm";

export default function DashboardPage() {
  const router = useRouter();
  const [creator, setCreator] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editError, setEditError] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);

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
        const ordersResponse = await fetch("/api/orders", { headers: { Authorization: `Bearer ${sessionData.session.access_token}` }, cache: "no-store" });
        const ordersResult = await ordersResponse.json();
        if (ordersResponse.ok) setOrders(ordersResult.orders ?? []);
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

  async function saveProfile(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setSaving(true);
    setEditError("");
    try {
      const supabase = getSupabaseBrowserClient();
      const { data } = await supabase.auth.getSession();
      if (!data.session) throw new Error("Please sign in again.");
      const form = new FormData(formElement);
      if (files) Array.from(files).forEach((file) => form.append("portfolio", file));
      const response = await fetch("/api/creators", { method: "POST", headers: { Authorization: `Bearer ${data.session.access_token}` }, body: form });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not update profile.");
      window.location.reload();
    } catch (saveError) {
      setEditError(saveError instanceof Error ? saveError.message : "Could not update profile.");
    } finally {
      setSaving(false);
    }
  }

  async function updateOrder(id: number, status: string) {
    const supabase = getSupabaseBrowserClient();
    const { data } = await supabase.auth.getSession();
    if (!data.session) return;
    await fetch("/api/orders", { method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${data.session.access_token}` }, body: JSON.stringify({ id, status }) });
    window.location.reload();
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
              <button onClick={() => setEditing((value) => !value)} className="mt-5 rounded-2xl border border-primary/20 px-4 py-2 text-sm font-semibold text-primary">
                {editing ? "Close editor" : "Edit profile"}
              </button>
              {editing && (
                <form onSubmit={saveProfile} className="mt-6 space-y-4 border-t border-neutral-100 pt-6">
                  <input name="name" defaultValue={creator.name} required minLength={3} className="w-full rounded-2xl border border-neutral-200 px-4 py-3" placeholder="Full name" />
                  <input name="city" defaultValue={creator.city} required className="w-full rounded-2xl border border-neutral-200 px-4 py-3" placeholder="City" />
                  <input name="skill" defaultValue={creator.skill} required className="w-full rounded-2xl border border-neutral-200 px-4 py-3" placeholder="Skill" />
                  <input name="phone" defaultValue={creator.phone} required className="w-full rounded-2xl border border-neutral-200 px-4 py-3" placeholder="Phone number" />
                  <input name="cnic" defaultValue={creator.cnic} required className="w-full rounded-2xl border border-neutral-200 px-4 py-3" placeholder="CNIC number" />
                  <input name="experience" defaultValue={creator.experience} required className="w-full rounded-2xl border border-neutral-200 px-4 py-3" placeholder="Experience and qualifications" />
                  <textarea name="description" defaultValue={creator.description} required minLength={20} rows={4} className="w-full rounded-2xl border border-neutral-200 px-4 py-3" placeholder="About your work" />
                  <input type="file" accept="image/*" multiple onChange={(event) => setFiles(event.target.files)} className="w-full rounded-2xl border border-neutral-200 p-3" />
                  <p className="text-xs text-neutral-500">New images are added to your existing portfolio. The first new image becomes your profile photo.</p>
                  {editError && <p className="rounded-2xl bg-red-50 p-3 text-sm text-red-700">{editError}</p>}
                  <button disabled={saving} className="rounded-2xl bg-gradient-primary px-5 py-3 font-semibold text-white disabled:opacity-60">{saving ? "Saving..." : "Save changes"}</button>
                </form>
              )}
              <p className="mt-6 leading-relaxed text-neutral-600">{creator.description}</p>
              <div className="mt-6 rounded-2xl bg-secondary/30 p-4 text-sm font-semibold text-neutral-800">Application status: <span className="text-primary capitalize">{creator.status}</span></div>
            </div>
            <div className="rounded-[2rem] bg-white p-6 shadow-card md:p-8">
              <h2 className="text-xl font-bold text-neutral-900">Portfolio</h2>
              {creator.portfolio_files?.length ? <div className="mt-4 grid grid-cols-2 gap-3">{creator.portfolio_files.map((url: string) => <img key={url} src={url} alt="Portfolio work" className="aspect-square w-full rounded-2xl object-cover" />)}</div> : <p className="mt-3 text-neutral-600">No portfolio images uploaded yet.</p>}
            </div>
          </div>
        )}
        {!loading && !error && creator?.status === "approved" && (
          <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-card md:p-8">
            <h2 className="text-xl font-bold text-neutral-900">Publish a Fiverr-style service</h2>
            <p className="mt-2 text-neutral-600">Add Basic, Plus, and Premium pricing so customers can discover and request your service.</p>
            <ServiceForm />
          </div>
        )}
        {!loading && !error && orders.length > 0 && (
          <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-card md:p-8">
            <h2 className="text-xl font-bold text-neutral-900">Order activity</h2>
            <div className="mt-4 space-y-3">{orders.map((order) => <div key={order.id} className="rounded-2xl border border-neutral-200 p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="font-semibold text-neutral-900">{order.title}</p><p className="text-sm text-neutral-600">{order.details}</p></div><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold capitalize text-primary">{order.status.replace("_", " ")}</span></div>{creator && ["requested", "accepted", "in_progress"].includes(order.status) && <div className="mt-3 flex flex-wrap gap-2">{order.status === "requested" && <button onClick={() => updateOrder(order.id, "accepted")} className="rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white">Accept</button>}{order.status === "accepted" && <button onClick={() => updateOrder(order.id, "in_progress")} className="rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-white">Start work</button>}{order.status === "in_progress" && <button onClick={() => updateOrder(order.id, "completed")} className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">Mark completed</button>}</div>}{!creator && order.status === "completed" && <ReviewForm orderId={order.id} />}</div>)}</div>
          </div>
        )}
      </div>
    </section>
  );
}
