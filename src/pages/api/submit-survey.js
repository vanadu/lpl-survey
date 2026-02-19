import fs from "fs";
import path from "path";
import crypto from "crypto";
import { preSubmitTransform } from "../../../helpers/preSubmitTransform";
import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

/*
  Beta safeguards:
  - rate limit
  - duplicate suppression
  - scoring & flags
  - respondent fingerprint
*/


console.log("Top of file SEND_EMAIL =", process.env.SEND_EMAIL);


const RATE_WINDOW_MS = 60_000;
const RATE_MAX_PER_WINDOW = 12;
const DUPE_WINDOW_MS = 10 * 60_000;

const rateStore = new Map();
const dupeStore = new Map();

const sha256 = (x) =>
  crypto.createHash("sha256").update(String(x)).digest("hex");

function getClientIp(req) {
  const xff = req.headers["x-forwarded-for"];
  if (typeof xff === "string") return xff.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
}

function cleanupOldEntries() {
  const t = Date.now();
  for (const [k, v] of dupeStore.entries()) {
    if (t - v > DUPE_WINDOW_MS) dupeStore.delete(k);
  }
}

function rateLimitOrThrow(ipHash) {
  const now = Date.now();
  const entry = rateStore.get(ipHash);

  if (!entry || now - entry.windowStart > RATE_WINDOW_MS) {
    rateStore.set(ipHash, { windowStart: now, count: 1 });
    return;
  }

  entry.count++;

  if (entry.count > RATE_MAX_PER_WINDOW) {
    const err = new Error("rate_limited");
    err.statusCode = 429;
    throw err;
  }
}

/* ======================================================
   RESPONDENT IDENTITY (YOUR SURVEY FIELDS)
====================================================== */

function getRespondentIdentifier(raw) {
  const firstName = raw.UserInfoFirstName?.trim();
  const dogName = raw.CmpnName?.trim();

  const fb = raw.UserInfoContactTypeFacebook?.trim();
  const email = raw.UserInfoContactTypeEmail?.trim();

  const contact = fb || email || null;

  const missing = !firstName || !dogName || !contact;

const rawId = `${firstName || "unknown"}_${dogName || "unknown"}_${contact || "unknown"}`;

const id = rawId
  .toLowerCase()
  .replace(/^https?:\/\//, "")   // remove protocol
  .replace(/[^\w]+/g, "_")       // replace illegal chars
  .replace(/_+/g, "_")           // collapse repeats
  .replace(/^_|_$/g, "");        // trim underscores

  return { id, missing };
}

/* ======================================================
   SCORING
====================================================== */

function scoreSubmission(raw, rateCount) {
  const flags = [];

  if (raw.__hp) flags.push("honeypot");

  const durationMs = Number(raw?.__meta?.durationMs);
  if (durationMs && durationMs < 25000) flags.push("too_fast");

  if (rateCount >= RATE_MAX_PER_WINDOW * 0.8) flags.push("ip_burst");

  const score = flags.length;

  const disposition =
    score >= 4 ? "block" :
    score >= 2 ? "suspect" :
    "accept";

  return { score, flags, disposition, durationMs };
}

/* ======================================================
   HANDLER
====================================================== */

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    cleanupOldEntries();

    const raw = req.body;
    if (!raw) {
      return res.status(400).json({ success: false, error: "No data" });
    }

    const ipHash = sha256(getClientIp(req));
    rateLimitOrThrow(ipHash);

    const rateCount = rateStore.get(ipHash)?.count || 0;

    const payloadHash = sha256(JSON.stringify(raw));
    if (dupeStore.has(payloadHash)) {
      return res.status(409).json({ success: false, error: "Duplicate submission" });
    }
    dupeStore.set(payloadHash, Date.now());

    const respondent = getRespondentIdentifier(raw);

    const scored = scoreSubmission(raw, rateCount);

    if (respondent.missing) {
      scored.flags.push("missing_identifier");
      scored.score++;
      if (scored.score >= 2 && scored.disposition === "accept") {
        scored.disposition = "suspect";
      }
    }

    if (scored.disposition === "block") {
      return res.status(403).json({ success: false, error: "Blocked" });
    }

    const submission = preSubmitTransform(raw);

    const now = new Date();
    const stamp =
      now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0") +
      "_" +
      String(now.getHours()).padStart(2, "0") +
      String(now.getMinutes()).padStart(2, "0") +
      String(now.getSeconds()).padStart(2, "0");





    const filename = `${stamp}_${respondent.id}.json`;

    const dir = path.join(process.cwd(), "data", "survey-results");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const record = {
      submittedAt: now.toISOString(),
      respondentId: respondent.id,
      meta: {
        ipHash,
        score: scored.score,
        flags: scored.flags,
        disposition: scored.disposition,
        durationMs: scored.durationMs
      },
      submission
    };

    fs.writeFileSync(
      path.join(dir, filename),
      JSON.stringify(record, null, 2)
    );

    /* ===== BREVO EMAIL ===== */

    const client = new TransactionalEmailsApi();
    client.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

    const email = new SendSmtpEmail();
    email.sender = {
      email: process.env.SURVEY_FROM_EMAIL,
      name: process.env.SURVEY_FROM_NAME
    };
    email.to = [{ email: process.env.SURVEY_TO_EMAIL }];
    email.subject = `Survey Submission${scored.disposition === "suspect" ? " (SUSPECT)" : ""}`;

    email.htmlContent = `<pre>${JSON.stringify(record, null, 2)}</pre>`;


    // !VA Only send mail in production - see variable in .env.local
    const SEND_EMAIL = process.env.SEND_EMAIL === "true";
    console.log("Before if SEND_EMAIL =", process.env.SEND_EMAIL);

    if (SEND_EMAIL) {
      console.log('Trying SEND_EMAIL');
      try {
        await client.sendTransacEmail(email);
        console.log("Email sent");
      } catch (err) {
        console.error("Email send failed:", err.message);
      }
    } else {
      console.log("Email disabled (SEND_EMAIL=false)");
    }


    return res.status(200).json({
      success: true,
      disposition: scored.disposition,
      flags: scored.flags
    });

  } catch (err) {
    if (err.statusCode === 429) {
      return res.status(429).json({ success: false, error: "Rate limited" });
    }

    console.error(err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
