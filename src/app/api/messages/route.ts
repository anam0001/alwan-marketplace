/* ──────────────────────────────────────────────
 *  API Route: /api/messages
 *  - POST: store a new message in SQLite
 *  - GET : fetch latest messages (for admin/testing)
 * ────────────────────────────────────────────── */

import { NextResponse } from "next/server";
import { createMessage, getLatestMessages } from "@/lib/db";

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

    const inserted = createMessage({
      creatorId: payload.creatorId,
      creatorName: String(payload.creatorName).trim(),
      senderName: String(payload.senderName).trim(),
      senderEmail: String(payload.senderEmail).trim(),
      senderPhone: String(payload.senderPhone ?? "").trim(),
      senderCity: String(payload.senderCity ?? "").trim(),
      message: String(payload.message).trim(),
    });

    return NextResponse.json(
      {
        ok: true,
        messageId: inserted.id,
        message: "Your message has been saved successfully.",
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

    const rows = getLatestMessages(limit);
    return NextResponse.json({ ok: true, count: rows.length, messages: rows });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not fetch messages." },
      { status: 500 }
    );
  }
}
