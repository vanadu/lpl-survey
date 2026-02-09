// helpers/panelClassHandlers.js
// Minimal + working: exports getStyleDirectives() using two layout lists for "items" questions (checkbox/radiogroup).

const ITEMS_TWO_COL = new Set([





  "BreathingCrisisAdviceType",
  "BreathingCrisisProvidedSubstanceType",
  "EarlySymptomsType",
  "EarlyOtherConditionsType",
  "PrimaryDurationVisitsNumberPanel",
  "PrimaryDurationCost",
  "PrimaryDurationChangedVetsReason",
  "PrimaryVetInfoDetails",
  "DiagnosisCost",
  "TreatmentStatusDidHave",
  "TreatmentStatusType",
  "TreatmentStatusTiebackCount",
  "TreatmentStatusTiebackComplications",
  "TreatmentStatusBveapReasons",
  "TreatmentStatusBveapComplications",
  "TreatmentStatusStentDidMigrate",
  "TreatmentStatusStentReplaced",
  "TreatmentStatusStentComplications",
  "TreatmentStatusArtyenoidectomyReasons",
  "TreatmentStatusArtyenoidectomyComplications",
  "TreatmentStatusVentrilocordectomyReasons",
  "TreatmentStatusVentrilocordectomyComplications",
  "ManagementPrescriptionType",
  "ManagementNonPrescriptionType",
  "OTCProductsType",
  "NeuropathyOtherIssues",
  "ConclusionPolyneuropathy",
  "ConclusionSpecialConsiderations",
  "ConclusionOtherConditions",
  "ConclusionCauseOfDeath",
  "UserInfoGender",
  "InfoSourcesTypes",
  "IntubationHistoryReason",
  "IntubationHistorySymptoms",
]);

const ITEMS_THREE_COL = new Set([
  "CmpnInfoAnimalType",
  "IntubationHistoryWasIntubated",
  "BreathingCrisisDidHavePanel",
  "BreathingCrisisCount",
  "BreathingCrisisAdvice",
  "BreathingCrisisProvidedSubstance",
  "EarlySymptomsHindEndWeakness",
  "EarlySymptomsIncontinence",
  "EarlyOtherConditions",
  "PrimaryDurationChangedVets",
  "PrimaryVetInflammation",
  "PrimaryVetRefluxPanel",
  "PrimaryVetRefluxMeds",
  "TreatmentStatusArtyenoidectomyDidExplain",
  "TreatmentStatusArtyenoidectomyChoice",
  "TreatmentStatusVentrilocordectomyDidExplain",
  "TreatmentStatusVentrilocordectomyChoice",
  "ManagementPrescriptions",
  "ManagementNonPrescription",
  "OTCProductsDidPurchase",
  "OTCProtocolDidPurchase",
  "AspirationDidHave",
  "AspirationInpatient",
  "AspirationSurgeryPost",
  "AspirationStentPost",
  "NeuropathySymptomsDoesHave",
]);

const CONTROL_WIDTH_300 = new Set([
  "CmpnName",
  "UserInfoFirstName",
  "UserInfoCountry",
  "UserInfoStateRegion",
  "UserInfoAgeGroup",
  "CmpnInfoBreed",
  "CmpnInfoWeight",
  "dcsdCmpnInfoAgeYears",
  "dcsdCmpnInfoAgeMonths",
  "lvngCmpnInfoAgePanel",
  "lvngCmpnInfoAgeYears",
  "InfoSourcesBestSource",
  "BreathingCrisisSubstanceForm",
  "BreathingCrisisCost",
  "EarlySymptomsAgeYears",
  "EarlySymptomsAgeMonths",
  "PrimaryDurationFirstConsultYears",
  "PrimaryDurationFirstConsultMonths",
  "TreatmentStatusAgeYears",
  "TreatmentStatusAgeMonths",
  "TreatmentStatusTiebackOnceCost",
  "TreatmentStatusTiebackMultipleCost",
  "TreatmentStatusTiebackComplicationsCost",
  ,"TreatmentStatusBveapCost",
  "TreatmentStatusBveapComplicationsCost",
  "TreatmentStatusStentType",
  "TreatmentStatusStentCostOnce",
  "TreatmentStatusStentCostRepeat",
  "TreatmentStatusStentComplications",
  "TreatmentStatusStentComplicationsCost",
  "TreatmentStatusArtyenoidectomyCost",
  "TreatmentStatusArtyenoidectomyComplicationsCost",
  "TreatmentStatusVentrilocordectomyCost",
  "TreatmentStatusVentrilocordectomyComplicationsCost",
  "ManagementPrescriptionCost",
  "ManagementNonPrescriptionCost",
  "OTCProductsCost",
  "OTCProtocolCost",
  "AspirationCount",
  "AspirationInpatientCount",
  "AspirationSurgeryPostCount",
  "AspirationStentPostCount",
  "AspirationCost",
  "NeuropathySymptomsBreathingOnset",
  "NeuropathySymptomsHindEndOnset"




]);

const CONTROL_WIDTH_600 = new Set([

  "DiagnosisWho",
  "PrimaryVetDiagnosticType",
  "DiagnosisTimeAfterSymptoms",
  "TreatmentStatusAgeYears",
  "TreatmentStatusAgeMonths",
  "TreatmentStatusTiebackWait"
]);

/**
 * Returns an array of directives like:
 *   [{ target: "items", className: "survey-two-col" }]
 */
export function getStyleDirectives(item) {
  const name = item?.name;
  if (!name) return [];

  if (ITEMS_TWO_COL.has(name)) {
    return [{ target: "items", className: "survey-two-col" }];
  }

  if (ITEMS_THREE_COL.has(name)) {
    return [{ target: "items", className: "survey-three-col" }];
  }

  if (CONTROL_WIDTH_300.has(name)) {
    return [{ target: "control", className: "survey-control-w-300" }];
  }
  if (CONTROL_WIDTH_600.has(name)) {
    return [{ target: "control", className: "survey-control-w-600" }];
  }

  return [];
}
