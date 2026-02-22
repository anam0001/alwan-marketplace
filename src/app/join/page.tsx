/* ──────────────────────────────────────────────
 *  Join as Creator Page – /join
 *  Server component wrapper with metadata.
 * ────────────────────────────────────────────── */

import type { Metadata } from "next";
import JoinFormClient from "./JoinFormClient";

export const metadata: Metadata = {
  title: "Join as Creator",
  description:
    "Join Alwan and start showcasing your handmade talent. Sign up as a creator and reach customers across Pakistan.",
};

export default function JoinPage() {
  return <JoinFormClient />;
}
