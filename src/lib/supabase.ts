/* ──────────────────────────────────────────────
 *  Supabase Client (Server-Side)
 *  Uses service-role key for secure inserts.
 * ────────────────────────────────────────────── */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

function isPlaceholder(value: string) {
  return (
    !value ||
    value.includes("YOUR_PROJECT_REF") ||
    value.includes("YOUR_SERVICE_ROLE_KEY") ||
    value.includes("your-project")
  );
}

export function getSupabaseServerClient() {
  if (isPlaceholder(supabaseUrl) || isPlaceholder(supabaseServiceKey)) {
    return null;
  }

  try {
    return createClient(supabaseUrl, supabaseServiceKey, {
      auth: { persistSession: false },
    });
  } catch {
    return null;
  }
}

export async function getAuthenticatedUser(accessToken: string | null | undefined) {
  const supabase = getSupabaseServerClient();
  if (!supabase || !accessToken) return null;
  const { data } = await supabase.auth.getUser(accessToken);
  return data.user ?? null;
}

export function getAdminEmails() {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}
