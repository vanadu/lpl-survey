import { TransactionalEmailsApi } from "@getbrevo/brevo";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const data = req.body;

  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({ success: false, error: "No survey data provided" });
  }

  const client = new TransactionalEmailsApi();
  client.authentications.apiKey.apiKey = process.env.BREVO_API_KEY;

  const email = {
    sender: {
      email: "survey@larparlife.org",
      name: "Survey",
    },
    to: [
      {
        email: "van@vanalbert.com",
        name: "Van",
      },
    ],
    subject: "New Survey Submission",
    htmlContent: `<h3>Survey Response</h3><pre>${JSON.stringify(data, null, 2)}</pre>`,
    textContent: JSON.stringify(data, null, 2),
  };

  try {
    const response = await client.sendTransacEmail(email);
    console.log("Email sent:", response);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Send failed:", err.response?.body || err.message);
    res.status(500).json({ success: false, error: err.response?.body || err.message });
  }
}
