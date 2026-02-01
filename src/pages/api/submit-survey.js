// pages/api/submit-survey.js
import fs from "fs";
import path from "path";
import { preSubmitTransform } from "../../../helpers/preSubmitTransform";

import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";

/**
 * Submit endpoint:
 * - transforms raw SurveyJS data
 * - saves to /data/survey-results/survey-results.json
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

    // 1) Transform
    const submission = preSubmitTransform(raw);

    // 2) Save to disk
    const resultsDir = path.join(process.cwd(), "data", "survey-results");
    const resultsFile = path.join(resultsDir, "survey-results.json");

    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir, { recursive: true });
    }

    let existing = [];
    if (fs.existsSync(resultsFile)) {
      try {
        const txt = fs.readFileSync(resultsFile, "utf8").trim();
        const parsed = txt ? JSON.parse(txt) : [];
        existing = Array.isArray(parsed) ? parsed : [];
      } catch {
        existing = [];
      }
    }

    const record = {
      submittedAt: new Date().toISOString(),
      ...submission,
    };

    existing.push(record);
    fs.writeFileSync(resultsFile, JSON.stringify(existing, null, 2), "utf8");

    // 3) Email via Brevo (server-side)
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
    email.htmlContent = `<h3>Survey Response</h3><pre>${escapeHtml(
      JSON.stringify(record, null, 2)
    )}</pre>`;


    // Guard in case the sender is invalid or missing.
    if (!email.sender?.email) {
      throw new Error("Brevo payload invalid: sender missing");
    }

    await client.sendTransacEmail(email);


    return res.status(200).json({
      success: true,
      message: "Saved and emailed survey submission.",
      count: existing.length,
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
