#!/usr/bin/env node

/**
 * Populate "target" fields in merged bilingual SurveyJS files
 * with rotating German dummy text.
 *
 * Goals:
 * - fills only entry.target
 * - leaves entry.source untouched
 * - aims for ~20% longer than visible source text
 * - cycles through a pool of German sentences/paragraphs
 * - preserves HTML tags when source contains markup
 *
 * Usage:
 *   node populateDummyTarget.js input.json
 *   node populateDummyTarget.js input.json output.json
 */

const fs = require("fs");
const path = require("path");

// --------------------------------------------------
// German dummy corpus
// --------------------------------------------------

const GERMAN_SENTENCES = [
  "Dies ist ein vorläufiger Blindtext für die Übersetzungsansicht.",
  "Bitte beachten Sie, dass dieser Inhalt nur zu Testzwecken dient.",
  "Die endgültige Formulierung wird in einer späteren Phase ergänzt.",
  "Auch längere Abschnitte lassen sich mit diesem Platzhalter gut prüfen.",
  "Umlaute wie ä, ö, ü und das ß sind hier bewusst enthalten.",
  "So kann die Darstellung im Layout realistisch beurteilt werden.",
  "Diese Beispieldaten helfen bei der Kontrolle von Umbrüchen und Abständen.",
  "Der Text ist absichtlich generisch und enthält keine echte Übersetzung.",
  "Auf diese Weise lassen sich mehrsprachige Seiten zuverlässig testen.",
  "Für Schaltflächen, Hinweise und Überschriften wird ebenfalls Blindtext erzeugt.",
  "Die Struktur des Dokuments bleibt dabei vollständig erhalten.",
  "Bitte prüfen Sie insbesondere Zeilenlängen, Einzüge und Sonderzeichen.",
  "So entsteht eine glaubwürdige Zielsprache für technische Testläufe.",
  "Dieser Platzhalter eignet sich gut für Mockups und interne Abnahmen.",
  "Die Inhalte rotieren, damit nicht überall derselbe Absatz erscheint.",
  "Dadurch wirkt die Testseite weniger künstlich und besser verteilt.",
  "Längere Texte dürfen hier ruhig etwas ausführlicher ausfallen.",
  "Kurze Beschriftungen bleiben dagegen bewusst knapp und übersichtlich.",
  "Das erleichtert die Prüfung von Buttons, Labels und kleinen Hinweisen.",
  "Am Ende wird die echte Übersetzung diesen Blindtext natürlich ersetzen.",
];

let sentenceCursor = 0;

function nextSentence() {
  const sentence = GERMAN_SENTENCES[sentenceCursor % GERMAN_SENTENCES.length];
  sentenceCursor += 1;
  return sentence;
}

function takeWordsFromRotatingCorpus(targetWordCount) {
  const out = [];
  while (out.length < targetWordCount) {
    out.push(...nextSentence().split(/\s+/));
  }
  return out.slice(0, targetWordCount).join(" ");
}

// --------------------------------------------------
// Text helpers
// --------------------------------------------------

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function countWords(text) {
  const cleaned = text.trim();
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

function estimateTargetWordCount(sourceVisibleText) {
  const sourceWords = Math.max(1, countWords(sourceVisibleText));

  // Roughly +20%, but make sure very short strings still get plausible output.
  if (sourceWords <= 2) return Math.max(1, sourceWords + 1);
  if (sourceWords <= 5) return Math.max(3, Math.ceil(sourceWords * 1.2));
  return Math.ceil(sourceWords * 1.2);
}

function trimToSentenceBoundary(text, maxWords) {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ");
}

function generatePlainDummy(sourceText) {
  const visible = stripHtml(sourceText);
  const sourceWords = countWords(visible);
  const targetWords = estimateTargetWordCount(visible);

  // Very short UI strings: keep them short.
  if (sourceWords <= 2) {
    return trimToSentenceBoundary(takeWordsFromRotatingCorpus(targetWords), targetWords);
  }

  // Medium strings: phrase/sentence length.
  if (sourceWords <= 8) {
    return trimToSentenceBoundary(takeWordsFromRotatingCorpus(targetWords), targetWords);
  }

  // Longer strings: allow fuller output from rotating corpus.
  return trimToSentenceBoundary(takeWordsFromRotatingCorpus(targetWords), targetWords);
}

// --------------------------------------------------
// HTML-aware replacement
// --------------------------------------------------

function isHtmlString(value) {
  return /<[^>]+>/.test(value);
}

function fillHtmlTextPreservingTags(sourceHtml) {
  const tokens = sourceHtml.split(/(<[^>]+>)/g);

  const textIndexes = [];
  let totalVisibleWords = 0;

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (!token || /^<[^>]+>$/.test(token)) continue;

    const visible = token.replace(/&nbsp;/gi, " ").trim();
    const words = countWords(visible);
    if (words > 0) {
      textIndexes.push({ index: i, words });
      totalVisibleWords += words;
    }
  }

  if (textIndexes.length === 0) {
    return sourceHtml;
  }

  const totalTargetWords = estimateTargetWordCount(stripHtml(sourceHtml));
  let remainingTargetWords = totalTargetWords;
  let remainingSourceWords = totalVisibleWords;

  for (let n = 0; n < textIndexes.length; n += 1) {
    const { index, words } = textIndexes[n];

    let thisTargetWords;
    if (n === textIndexes.length - 1) {
      thisTargetWords = Math.max(1, remainingTargetWords);
    } else {
      thisTargetWords = Math.max(
        1,
        Math.round((words / remainingSourceWords) * remainingTargetWords)
      );
    }

    tokens[index] = takeWordsFromRotatingCorpus(thisTargetWords);

    remainingTargetWords -= thisTargetWords;
    remainingSourceWords -= words;
  }

  return tokens.join("");
}

function generateDummyFromSource(sourceValue) {
  if (typeof sourceValue !== "string" || !sourceValue.trim()) return "";

  if (isHtmlString(sourceValue)) {
    return fillHtmlTextPreservingTags(sourceValue);
  }

  return generatePlainDummy(sourceValue);
}

// --------------------------------------------------
// Main
// --------------------------------------------------

function populateTargets(data) {
  if (!data || typeof data !== "object" || typeof data.entries !== "object") {
    throw new Error('Input file must contain an object with an "entries" property.');
  }

  for (const [key, entry] of Object.entries(data.entries)) {
    if (!entry || typeof entry !== "object") continue;

    const source = typeof entry.source === "string" ? entry.source : "";
    if (!source) continue;

    entry.target = generateDummyFromSource(source);

    // Optional: if you want the dummy file to look "translated",
    // remove review noise for the one-off mock output.
    // Comment these out if you want to preserve the flags.
    // delete entry._needsReview;
    // delete entry.source_prev;
  }

  return data;
}

function main() {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3] || inputPath.replace(/\.json$/i, ".dummy.json");

  if (!inputPath) {
    console.error("Usage: node populateDummyTarget.js input.json [output.json]");
    process.exit(1);
  }

  const raw = fs.readFileSync(inputPath, "utf8");
  const data = JSON.parse(raw);

  const populated = populateTargets(data);

  fs.writeFileSync(outputPath, `${JSON.stringify(populated, null, 2)}\n`, "utf8");

  console.log(`Dummy target file written: ${path.resolve(outputPath)}`);
}

main();