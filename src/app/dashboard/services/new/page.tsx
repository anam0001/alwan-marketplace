"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServiceForm from "@/components/forms/ServiceForm";

const criteria = [
  "Use a clear, specific service title and category.",
  "Add one strong display image for the gig card.",
  "Upload at least three examples of completed work.",
  "Define Basic, Plus, and Premium prices in Pakistani rupees.",
  "Set delivery time, revision count, and package inclusions for every tier.",
  "Only approved creators can submit gigs for admin review.",
];

export default function NewServicePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-secondary/20 to-white pt-28 pb-16">
      <div className="container-custom max-w-6xl">
        <Link href="/dashboard" className="text-sm font-semibold text-primary hover:underline">Back to dashboard</Link>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.aside initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2rem] bg-gradient-to-br from-primary to-[#B4127B] p-6 text-white shadow-card md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-white/75">Creator studio</p>
            <h1 className="mt-3 text-3xl font-extrabold font-heading">Create a gig that earns attention.</h1>
            <p className="mt-4 leading-relaxed text-white/80">Build a clear offer, show your best work, and give customers enough detail to choose the right package with confidence.</p>
            <div className="mt-8 space-y-3">
              {criteria.map((item, index) => <motion.div key={item} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm text-white/90"><span className="mr-2 font-bold text-white">{index + 1}.</span>{item}</motion.div>)}
            </div>
            <p className="mt-8 text-sm text-white/70">After submission, your gig remains in review until an admin approves it.</p>
          </motion.aside>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2rem] bg-white p-6 shadow-card md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] font-semibold text-primary">Gig details</p>
            <h2 className="mt-2 text-2xl font-bold text-neutral-900 font-heading">Tell customers exactly what you offer</h2>
            <ServiceForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
