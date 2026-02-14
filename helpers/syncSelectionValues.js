// /helpers/syncSelectionValues.js
//
// Shared SurveyJS selection-sync helpers for both SurveyComponent and SurveyComponentMaster.
//
// Goals:
// 1) checkbox -> dropdown: populate dropdown choices from checkbox selections
// 2) checkbox -> checkbox: preselect later checkbox values from earlier checkbox values
// 3) Work in BOTH full-survey and page-only builds by using SurveyModel data store:
//    - read with sender.getValue(name)
//    - write with sender.setValue(name, value)
//
// Usage (in a component):
//   import { attachSurveySyncHandlers } from "../helpers/syncSelectionValues";
//
//   useEffect(() => {
//     if (!survey) return;
//     return attachSurveySyncHandlers(survey, {
//       checkboxToDropdown: [
//         { source: "InfoSourcesTypes", target: "InfoSourcesBestSource" },
//       ],
//       checkboxToCheckbox: [
//         {
//           source: "EarlyOtherConditionsType",
//           target: "ConclusionOtherConditions",
//           options: { onlyIfEmpty: true, copyOther: true },
//         },
//       ],
//     });
//   }, [survey]);

/** Normalize a SurveyJS value into an array. */
function asArray(v) {
  if (Array.isArray(v)) return v;
  if (v == null) return [];
  return [v];
}

/** Extract a SurveyJS choice value. */
function choiceValue(c) {
  return c && typeof c === "object" ? (c.value ?? c) : c;
}

/** Extract a SurveyJS choice text. */
function choiceText(c) {
  const v = choiceValue(c);
  return c && typeof c === "object" ? (c.text ?? String(v)) : String(v);
}

/**
 * checkbox -> dropdown
 * Build dropdown choices from the selected values of a checkbox question.
 * Clears dropdown value if it becomes invalid.
 *
 * Uses the SurveyModel data store (getValue/setValue) so it works in page-only builds.
 */
export function syncDropdownFromCheckbox(sender, sourceName, targetName) {
  const sourceQ = sender.getQuestionByName(sourceName);
  const targetQ = sender.getQuestionByName(targetName);
  if (!sourceQ || !targetQ) return;

  const selectedValues = asArray(sender.getValue(sourceName));
  const allChoices = sourceQ.visibleChoices || sourceQ.choices || [];

  const nextChoices = allChoices
    .filter((c) => selectedValues.includes(choiceValue(c)))
    .map((c) => ({ value: choiceValue(c), text: choiceText(c) }));

  targetQ.choices = nextChoices;

  const cur = sender.getValue(targetName);
  if (cur != null && !nextChoices.some((c) => c.value === cur)) {
    sender.setValue(targetName, null);
  }
}

/**
 * checkbox -> checkbox
 * Prefills a target checkbox from a source checkbox.
 *
 * onlyIfEmpty:
 *  - true: don't overwrite user edits (but *will* "expand" if target is a subset of source)
 *  - false: always mirror source
 *
 * copyOther:
 *  - if both questions have showOtherItem:true, copy "other" selection and otherValue.
 */
export function syncCheckboxFromCheckbox(
  sender,
  sourceName,
  targetName,
  { onlyIfEmpty = true, copyOther = true } = {}
) {
  const sourceQ = sender.getQuestionByName(sourceName); // may be missing in page-only
  const targetQ = sender.getQuestionByName(targetName); // must exist to render/prefill
  if (!targetQ) return;

  // Read from SurveyModel data store (works even if source question isn't present/initialized yet)
  const sourceValsRaw = asArray(sender.getValue(sourceName));
  const targetValsRaw = asArray(sender.getValue(targetName));

  // If we don't want to overwrite and target has selections:
  // - allow expanding if target is still a subset of source
  // - bail if target has diverged (user likely edited it intentionally)
  if (onlyIfEmpty && targetValsRaw.length > 0) {
    const diverged = targetValsRaw.some((v) => !sourceValsRaw.includes(v));
    if (diverged) return;
    // else: allow syncing to "fill in the rest"
  }

  // Defensive: keep only values that exist in the target checkbox choices
  const targetChoiceValues = new Set(
    (targetQ.visibleChoices || targetQ.choices || []).map(choiceValue)
  );

  let nextVals = sourceValsRaw.filter((v) => targetChoiceValues.has(v));

  // Handle "Other" (SurveyJS uses value "other" + question.otherValue)
  const sourceHasOther = !!sourceQ?.showOtherItem;
  const targetHasOther = !!targetQ?.showOtherItem;

  if (copyOther && sourceHasOther && targetHasOther) {
    const otherSelected =
      sourceQ?.isOtherSelected === true ||
      sourceValsRaw.includes("other") ||
      sender.getValue(`${sourceName}-Comment`) != null; // fallback heuristic for some schemas

    if (otherSelected) {
      if (!nextVals.includes("other")) nextVals = [...nextVals, "other"];

      // Copy otherValue if available
      // Prefer question.otherValue when source question exists; otherwise try common data keys.
      const otherValue =
        sourceQ?.otherValue ??
        sender.getValue(`${sourceName}-Comment`) ??
        sender.getValue(`${sourceName}_Comment`) ??
        sender.getValue(`${sourceName}Comment`);

      if (typeof otherValue !== "undefined") {
        targetQ.otherValue = otherValue;
      }
    } else {
      nextVals = nextVals.filter((v) => v !== "other");
      // Leave targetQ.otherValue alone by default
    }
  } else {
    // If target doesn't support Other, strip it out.
    nextVals = nextVals.filter((v) => v !== "other");
  }

  // Avoid unnecessary churn
  const same =
    nextVals.length === targetValsRaw.length &&
    nextVals.every((v, i) => v === targetValsRaw[i]);

  if (!same) {
    sender.setValue(targetName, nextVals);
  }
}

/**
 * Attach SurveyJS event handlers to keep multiple mappings synced.
 * Returns a cleanup function for React useEffect.
 *
 * Config:
 * {
 *   checkboxToDropdown: [{ source: "A", target: "B" }],
 *   checkboxToCheckbox: [{ source: "A", target: "C", options: {...} }],
 * }
 */
export function attachSurveySyncHandlers(survey, config) {
  if (!survey) return () => {};

  const checkboxToDropdown = config?.checkboxToDropdown || [];
  const checkboxToCheckbox = config?.checkboxToCheckbox || [];

  const sources = new Set([
    ...checkboxToDropdown.map((x) => x.source),
    ...checkboxToCheckbox.map((x) => x.source),
  ]);

  const runAll = (sender, mode) => {
    // checkbox -> dropdown
    for (const { source, target } of checkboxToDropdown) {
      syncDropdownFromCheckbox(sender, source, target);
    }

    // checkbox -> checkbox
    for (const { source, target, options } of checkboxToCheckbox) {
      // On page navigation, we typically want to prefill (onlyIfEmpty=true).
      // On value change, respect whatever options say.
      const effectiveOptions =
        mode === "page"
          ? { ...(options || {}), onlyIfEmpty: options?.onlyIfEmpty ?? true }
          : options || {};

      syncCheckboxFromCheckbox(sender, source, target, effectiveOptions);
    }
  };

  const onValueChanged = (sender, options) => {
    if (!sources.has(options.name)) return;
    runAll(sender, "value");
  };

  const onCurrentPageChanged = (sender) => {
    runAll(sender, "page");
  };

  survey.onValueChanged.add(onValueChanged);
  survey.onCurrentPageChanged.add(onCurrentPageChanged);

  // Initialize once
  runAll(survey, "page");

  return () => {
    survey.onValueChanged.remove(onValueChanged);
    survey.onCurrentPageChanged.remove(onCurrentPageChanged);
  };
}
