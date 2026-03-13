/* ──────────────────────────────────────────────
 *  API Route: /api/messages
 *  - POST: store a new message in database
 *  - GET : fetch latest messages (for admin/testing)
 * ────────────────────────────────────────────── */

import { NextResponse } from "next/server";
import { createMessage, getLatestMessages } from "@/lib/db";
import { getSupabaseServerClient } from "@/lib/supabase";

export const runtime = "nodejs";

function isEmail(value: string) {
  return /.+@.+\..+/.test(value);
}

function validatePayload(payload: any) {
  if (!payload || typeof payload !== "object") return false;
  if (!Number.isInteger(payload.creatorId) || payload.creatorId <= 0) return false;
  if (typeof payload.creatorName !== "string" || payload.creatorName.trim().length < 2) return false;
  if (typeof payload.senderName !== "string" || payload.senderName.trim().length < 2) return false;
  if (typeof payload.senderEmail !== "string" || !isEmail(payload.senderEmail.trim())) return false;
  if (typeof payload.message !== "string" || payload.message.trim().length < 10) return false;
  return true;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    if (!validatePayload(payload)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid input",
        },
        { status: 400 }
      );
    }

    const record = {
      creator_id: payload.creatorId,
      creator_name: String(payload.creatorName).trim(),
      sender_name: String(payload.senderName).trim(),
      sender_email: String(payload.senderEmail).trim(),
      sender_phone: String(payload.senderPhone ?? "").trim(),
      sender_city: String(payload.senderCity ?? "").trim(),
      message: String(payload.message).trim(),
    };

    const supabase = getSupabaseServerClient();

    if (supabase) {
      const { data, error } = await supabase
        .from("creator_messages")
        .insert(record)
        .select("id")
        .single();

      if (error) {
        return NextResponse.json(
          { ok: false, error: "Database insert failed." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          ok: true,
          messageId: data?.id,
          message: "Your message has been saved successfully.",
        },
        { status: 201 }
      );
    }

    const inserted = createMessage({
      creatorId: payload.creatorId,
      creatorName: record.creator_name,
      senderName: record.sender_name,
      senderEmail: record.sender_email,
      senderPhone: record.sender_phone,
      senderCity: record.sender_city,
      message: record.message,
    });

    return NextResponse.json(
      {
        ok: true,
        messageId: inserted.id,
        message: "Your message has been saved successfully.",
        note: "Stored locally because Supabase is not configured.",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong while saving your message.",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = Number(searchParams.get("limit") ?? 20);
    const limit = Number.isFinite(limitParam)
      ? Math.min(Math.max(limitParam, 1), 100)
      : 20;

    const supabase = getSupabaseServerClient();

    if (supabase) {
      const { data, error } = await supabase
        .from("creator_messages")
        .select(
          "id, creator_id, creator_name, sender_name, sender_email, sender_phone, sender_city, message, created_at"
        )
        .order("id", { ascending: false })
        .limit(limit);

      if (error) {
        return NextResponse.json(
          { ok: false, error: "Could not fetch messages." },
          { status: 500 }
        );
      }

      return NextResponse.json({ ok: true, count: data?.length ?? 0, messages: data ?? [] });
    }

    const rows = getLatestMessages(limit);
    return NextResponse.json({ ok: true, count: rows.length, messages: rows });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not fetch messages." },
      { status: 500 }
    );
  }
}
