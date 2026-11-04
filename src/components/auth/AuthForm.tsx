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
  const [accountType, setAccountType] = useState<"creator" | "customer">("customer");
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
              data: { full_name: name.trim(), account_type: accountType },
              emailRedirectTo: `${window.location.origin}/sign-in?verified=true`,
            },
          })
        : await supabase.auth.signInWithPassword({ email: email.trim(), password });

      if (result.error) throw result.error;

      if (isSignup && !result.data.user?.email_confirmed_at) {
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

  async function sendReset() {
    if (!email.trim()) { setError("Enter your email first."); return; }
    try {
      const supabase = getSupabaseBrowserClient();
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: `${window.location.origin}/sign-in` });
      if (resetError) throw resetError;
      setMessage("Password reset instructions have been sent to your email.");
    } catch (resetError) {
      setError(resetError instanceof Error ? resetError.message : "Could not send reset email.");
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
            {isSignup && (
              <fieldset>
                <legend className="text-sm font-semibold text-neutral-700">Account type</legend>
                <div className="mt-2 grid grid-cols-2 gap-3">
                  {(["customer", "creator"] as const).map((type) => (
                    <label key={type} className={`cursor-pointer rounded-2xl border px-4 py-3 text-sm font-semibold capitalize ${accountType === type ? "border-primary bg-primary/5 text-primary" : "border-neutral-200 text-neutral-700"}`}>
                      <input type="radio" name="accountType" value={type} checked={accountType === type} onChange={() => setAccountType(type)} className="sr-only" />
                      {type}
                    </label>
                  ))}
                </div>
              </fieldset>
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
            {!isSignup && <button type="button" onClick={sendReset} className="text-sm font-semibold text-primary hover:underline">Forgot password?</button>}
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
