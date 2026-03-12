/* ──────────────────────────────────────────────
 *  File Database – Alwan Marketplace
 *  Persistent JSON storage for incoming messages.
 *
 *  DB file location: /data/messages.json
 *  Since your project is on E: drive, data is stored on E: too.
 * ────────────────────────────────────────────── */

import fs from "fs";
import path from "path";

export interface NewMessage {
  creatorId: number;
  creatorName: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  senderCity?: string;
  message: string;
}

const dataDir = path.join(process.cwd(), "data");
const dbPath = path.join(dataDir, "messages.json");

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

interface StoredMessage {
  id: number;
  creatorId: number;
  creatorName: string;
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  senderCity: string;
  message: string;
  createdAt: string;
}

interface MessageDb {
  lastId: number;
  messages: StoredMessage[];
}

function ensureDbFile() {
  if (!fs.existsSync(dbPath)) {
    const initial: MessageDb = { lastId: 0, messages: [] };
    fs.writeFileSync(dbPath, JSON.stringify(initial, null, 2), "utf-8");
  }
}

function readDb(): MessageDb {
  ensureDbFile();
  const raw = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(raw) as MessageDb;
}

function writeDb(data: MessageDb) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), "utf-8");
}

export function createMessage(input: NewMessage) {
  const db = readDb();
  const nextId = db.lastId + 1;

  const message: StoredMessage = {
    id: nextId,
    creatorId: input.creatorId,
    creatorName: input.creatorName,
    senderName: input.senderName,
    senderEmail: input.senderEmail,
    senderPhone: input.senderPhone ?? "",
    senderCity: input.senderCity ?? "",
    message: input.message,
    createdAt: new Date().toISOString(),
  };

  db.lastId = nextId;
  db.messages.unshift(message);
  writeDb(db);

  return {
    id: nextId,
  };
}

export function getLatestMessages(limit = 50) {
  const db = readDb();
  return db.messages.slice(0, limit);
}
