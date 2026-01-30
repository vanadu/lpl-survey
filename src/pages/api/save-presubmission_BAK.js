// pages/api/save-presubmission.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // Make sure /test folder exists
      const testFolder = path.join(process.cwd(), 'test');
      if (!fs.existsSync(testFolder)) {
        fs.mkdirSync(testFolder);
      }

      const filePath = path.join(testFolder, 'presubmission.json');

      // Write JSON to file
      console.log("API payload data:", JSON.stringify(req.body.data, null, 2));

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

      return res.status(200).json({ message: 'Survey JSON saved successfully' });
    } catch (err) {
      console.error('Error saving presubmission JSON:', err);
      return res.status(500).json({ error: 'Failed to save JSON' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
