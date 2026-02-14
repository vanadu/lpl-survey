// pages/api/save-presubmission.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const payload = req.body; // expects { metadata: {...}, data: {...} }

      // Ensure /test folder exists
      const testFolder = path.join(process.cwd(), 'test');
      if (!fs.existsSync(testFolder)) {
        fs.mkdirSync(testFolder);
      }

      const filePath = path.join(testFolder, 'presubmission.json');

      // Log payload to verify fields
      console.log("Writing payload to file:", JSON.stringify(payload, null, 2));

      // Write JSON to file
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8');

      console.log('File write complete:', filePath);

      return res.status(200).json({ message: 'Survey JSON saved successfully' });
    } catch (err) {
      console.error('Error saving presubmission JSON:', err);
      return res.status(500).json({ error: 'Failed to save JSON' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
