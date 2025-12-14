// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const surveyData = req.body;
    const resultsPath = path.join(process.cwd(), "data", "survey_results.json");
    // Read existing results (array), or initialize new
    let results = [];
    try {
      results = JSON.parse(fs.readFileSync(resultsPath, "utf8"));
    } catch (e) {
      results = []; // file may not exist yet
    }
    // Append new result
    results.push(surveyData);
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    res.status(200).json({ message: 'Survey data saved.' });
  } catch (error) {
    console.error('Save survey data error:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
}