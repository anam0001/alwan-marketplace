import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { marketplaceItems } from "@/lib/data";
import GigDetailClient from "./GigDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const gig = marketplaceItems.find((item) => item.id === Number(id));
  if (!gig) {
    return { title: "Gig Not Found" };
  }

  return {
    title: `${gig.title} – Gig Pricing`,
    description: gig.description,
  };
}

export default async function GigPage({ params }: Props) {
  const { id } = await params;
  const gig = marketplaceItems.find((item) => item.id === Number(id));
  if (!gig) notFound();

  return <GigDetailClient gig={gig} />;
}