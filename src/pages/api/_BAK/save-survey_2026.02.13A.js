// pages/api/save-survey.js
import fs from "fs";
import path from "path";
import { preSubmitTransform } from "../../../helpers/preSubmitTransform";

/**
 * Save-only endpoint:
 * - transforms raw SurveyJS data
 * - appends to /data/survey-results/survey-results.json
 * - does NOT email
 */
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const raw = req.body;
    if (!raw || Object.keys(raw).length === 0) {
      return res.status(400).json({ success: false, error: "No survey data provided" });
    }

    // 1) Transform server-side
    const submission = preSubmitTransform(raw);

    // 2) Build paths
    const resultsDir = path.join(process.cwd(), "data", "survey-results");
    const resultsFile = path.join(resultsDir, "survey-results.json");

    // 3) Ensure directory exists
    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir, { recursive: true });
    }

    // 4) Load existing array safely
    let existing = [];
    if (fs.existsSync(resultsFile)) {
      try {
        const txt = fs.readFileSync(resultsFile, "utf8").trim();
        const parsed = txt ? JSON.parse(txt) : [];
        existing = Array.isArray(parsed) ? parsed : [];
      } catch {
        // If file is corrupted or not JSON, don't blow up the request.
        // You can choose to error instead; this is the safer default.
        existing = [];
      }
    }

    // 5) Append record (include minimal metadata)
    const record = {
      savedAt: new Date().toISOString(),
      ...submission,
    };

    existing.push(record);

    // 6) Write back
    fs.writeFileSync(resultsFile, JSON.stringify(existing, null, 2), "utf8");

    return res.status(200).json({
      success: true,
      message: "Saved survey results.",
      count: existing.length,
      record,
    });
  } catch (err) {
    console.error("save-survey error:", err);
    return res.status(500).json({ success: false, error: String(err?.message || err) });
  }
}
