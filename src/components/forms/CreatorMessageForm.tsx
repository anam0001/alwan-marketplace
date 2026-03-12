"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";

interface CreatorMessageFormProps {
  creatorId: number;
  creatorName: string;
}

interface FormState {
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  senderCity: string;
  message: string;
}

const initialState: FormState = {
  senderName: "",
  senderEmail: "",
  senderPhone: "",
  senderCity: "",
  message: "",
};

export default function CreatorMessageForm({
  creatorId,
  creatorName,
}: CreatorMessageFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusText, setStatusText] = useState("");

  const isValid = useMemo(() => {
    return (
      form.senderName.trim().length >= 2 &&
      /.+@.+\..+/.test(form.senderEmail) &&
      form.message.trim().length >= 10
    );
  }, [form]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isValid || isSubmitting) return;

    try {
      setIsSubmitting(true);
      setStatus("idle");

      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          creatorId,
          creatorName,
          senderName: form.senderName.trim(),
          senderEmail: form.senderEmail.trim(),
          senderPhone: form.senderPhone.trim(),
          senderCity: form.senderCity.trim(),
          message: form.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error ?? "Failed to submit message");
      }

      setStatus("success");
      setStatusText("Message sent! We saved your details safely.");
      setForm(initialState);
      setTimeout(() => setIsOpen(false), 1600);
    } catch (error) {
      setStatus("error");
      setStatusText("Could not send message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mt-6">
      <Button
        variant="primary"
        size="md"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        📩 {isOpen ? "Close Form" : `Contact ${creatorName.split(" ")[0]}`}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.form
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            onSubmit={handleSubmit}
            className="mt-4 p-5 md:p-6 rounded-2xl bg-white border border-primary/10 shadow-soft space-y-4"
          >
            <p className="text-sm text-neutral-500">
              Send a direct message to <span className="font-semibold text-primary">{creatorName}</span>. Your details are stored securely for follow-up.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="text-sm text-neutral-700">
                Your Name
                <input
                  className="mt-1 w-full rounded-xl border-neutral-200 focus:border-primary focus:ring-primary/20"
                  value={form.senderName}
                  onChange={(e) => setForm((prev) => ({ ...prev, senderName: e.target.value }))}
                  required
                  minLength={2}
                  placeholder="Ayesha"
                />
              </label>
              <label className="text-sm text-neutral-700">
                Email
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border-neutral-200 focus:border-primary focus:ring-primary/20"
                  value={form.senderEmail}
                  onChange={(e) => setForm((prev) => ({ ...prev, senderEmail: e.target.value }))}
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-sm text-neutral-700">
                Phone (optional)
                <input
                  className="mt-1 w-full rounded-xl border-neutral-200 focus:border-primary focus:ring-primary/20"
                  value={form.senderPhone}
                  onChange={(e) => setForm((prev) => ({ ...prev, senderPhone: e.target.value }))}
                  placeholder="03xx-xxxxxxx"
                />
              </label>
              <label className="text-sm text-neutral-700">
                City (optional)
                <input
                  className="mt-1 w-full rounded-xl border-neutral-200 focus:border-primary focus:ring-primary/20"
                  value={form.senderCity}
                  onChange={(e) => setForm((prev) => ({ ...prev, senderCity: e.target.value }))}
                  placeholder="Lahore"
                />
              </label>
            </div>

            <label className="block text-sm text-neutral-700">
              Message
              <textarea
                rows={4}
                className="mt-1 w-full rounded-xl border-neutral-200 focus:border-primary focus:ring-primary/20"
                value={form.message}
                onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                required
                minLength={10}
                placeholder="Tell us what service you need, budget, and timeline..."
              />
            </label>

            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-neutral-400">Minimum 10 characters in message.</p>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {status !== "idle" && (
              <p
                className={`text-sm font-medium ${
                  status === "success" ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {statusText}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
