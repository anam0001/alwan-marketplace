/* ──────────────────────────────────────────────
 *  Creator Profile Page – /creator/[id]
 *  Dynamic route for individual creator profiles.
 *  
 *  CUSTOMIZE:
 *  - Edit creator data in src/lib/data.ts
 *  - Replace placeholder images
 * ────────────────────────────────────────────── */

import type { Metadata } from "next";
import { getPublicCreatorById, getPublicCreators } from "@/lib/creators";
import CreatorProfileClient from "./CreatorProfileClient";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

/* ─── Generate static params for all creators ─── */
export async function generateStaticParams() {
  const creators = await getPublicCreators();
  return creators.map((creator) => ({
    id: String(creator.id),
  }));
}

/* ─── Dynamic metadata ─── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const creator = await getPublicCreatorById(Number(id));
  if (!creator) return { title: "Creator Not Found" };

  return {
    title: `${creator.name} – ${creator.skill}`,
    description: creator.bio,
  };
}

export default async function CreatorProfilePage({ params }: Props) {
  const { id } = await params;
  const creator = await getPublicCreatorById(Number(id));
  if (!creator) notFound();

  return <CreatorProfileClient creator={creator} />;
}
