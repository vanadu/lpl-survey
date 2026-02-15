// pages/api/submit-survey.js
import fs from "fs";
import path from "path";
import { preSubmitTransform } from "../../../helpers/preSubmitTransform";

import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

/**
 * Submit endpoint:
 * - transforms raw SurveyJS data
 * - saves ONE FILE per submission in /data/survey-results/
 * - sends Brevo email
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const raw = req.body;

    if (!raw || Object.keys(raw).length === 0) {
      return res.status(400).json({ success: false, error: "No survey data provided" });
    }

    // 1️⃣ Transform submission
    const submission = preSubmitTransform(raw);

    // 2️⃣ Build timestamp + filename (matches email metadata format)
    const now = new Date();

    const stamp =
      now.getFullYear().toString() +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getDate()).padStart(2, "0") +
      "_" +
      String(now.getHours()).padStart(2, "0") +
      String(now.getMinutes()).padStart(2, "0") +
      String(now.getSeconds()).padStart(2, "0");

    // Build safe descriptor portion (profile / respondent info if available)
    const descriptorSource =
      submission.profileUrl ||
      submission.profile ||
      submission.name ||
      submission.respondent ||
      "submission";

    const descriptor = String(descriptorSource)
      .replace(/^https?:\/\//, "")
      .replace(/[^\w]/g, "_")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "");

    const filename = `${stamp}_${descriptor}.json`;

    const resultsDir = path.join(process.cwd(), "data", "survey-results");
    const outputPath = path.join(resultsDir, filename);

    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir, { recursive: true });
    }

    // record saved to disk
    const record = {
      submittedAt: now.toISOString(),
      filename,
      ...submission,
    };

    fs.writeFileSync(outputPath, JSON.stringify(record, null, 2), "utf8");

    // 3️⃣ Send email via Brevo
    if (!process.env.BREVO_API_KEY) {
      return res.status(500).json({ success: false, error: "Missing BREVO_API_KEY" });
    }

    const toEmail = process.env.SURVEY_TO_EMAIL || "van@vanalbert.com";
    const fromEmail = process.env.SURVEY_FROM_EMAIL || "survey@larparlife.org";
    const fromName = process.env.SURVEY_FROM_NAME || "Survey";

    const client = new TransactionalEmailsApi();
    client.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

    const email = new SendSmtpEmail();
    email.sender = { email: fromEmail, name: fromName };
    email.to = [{ email: toEmail }];
    email.subject = "New Survey Submission";

    email.htmlContent = `<h3>Survey Response</h3>
<p><strong>Filename:</strong> ${filename}</p>
<pre>${escapeHtml(JSON.stringify(record, null, 2))}</pre>`;

    if (!email.sender?.email) {
      throw new Error("Brevo payload invalid: sender missing");
    }

    await client.sendTransacEmail(email);

    return res.status(200).json({
      success: true,
      message: "Saved and emailed survey submission.",
      filename,
      record,
    });

  } catch (err) {
    console.error("submit-survey error:", err);
    console.error("brevo details:", err?.response?.body || err?.body || err);

    return res.status(500).json({
      success: false,
      error: err?.response?.body || err?.body || String(err?.message || err),
    });
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
