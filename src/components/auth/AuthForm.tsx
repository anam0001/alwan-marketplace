"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const router = useRouter();
  const isSignup = mode === "signup";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const supabase = getSupabaseBrowserClient();
      const result = isSignup
        ? await supabase.auth.signUp({
            email: email.trim(),
            password,
            options: {
              data: { full_name: name.trim() },
              emailRedirectTo: `${window.location.origin}/sign-in?verified=true`,
            },
          })
        : await supabase.auth.signInWithPassword({ email: email.trim(), password });

      if (result.error) throw result.error;

      if (isSignup && !result.data.session) {
        setMessage("Account created. Check your email to confirm your account, then sign in.");
      } else {
        router.push(isSignup ? "/join" : "/dashboard");
        router.refresh();
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Authentication failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-secondary/10 to-white pt-28 pb-16">
      <div className="container-custom">
        <div className="mx-auto max-w-lg rounded-[2rem] border border-primary/10 bg-white p-6 shadow-card md:p-10">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">
            Alwan account
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-neutral-900 font-heading">
            {isSignup ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-3 text-neutral-600">
            {isSignup
              ? "Create a secure account before publishing your creator profile."
              : "Sign in to manage your profile, portfolio, and creator application."}
          </p>

          <form onSubmit={submit} className="mt-8 space-y-5">
            {isSignup && (
              <label className="block text-sm font-semibold text-neutral-700">
                Full name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  minLength={3}
                  className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
            )}
            <label className="block text-sm font-semibold text-neutral-700">
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="block text-sm font-semibold text-neutral-700">
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                minLength={6}
                className="mt-2 w-full rounded-2xl border border-neutral-200 px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>

            {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
            {message && <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{message}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-gradient-primary px-5 py-3 font-semibold text-white shadow-glow disabled:opacity-60"
            >
              {loading ? "Please wait..." : isSignup ? "Create account" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-neutral-600">
            {isSignup ? "Already have an account?" : "Need an account?"}{" "}
            <Link href={isSignup ? "/sign-in" : "/sign-up"} className="font-semibold text-primary hover:underline">
              {isSignup ? "Sign in" : "Create one"}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
