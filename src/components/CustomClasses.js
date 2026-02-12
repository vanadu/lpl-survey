export function getStyleDirectives(item) {
  const name = item?.name;
  if (!name) return [];

  const directives = [];

const ITEMS_TWO_COL = new Set([

  "LandingPrivacyConsentLinksPanel",

  "lvngCmpnInfoAgePanel",
  "dcsdCmpnInfoAgePanel",

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

  "ConclusionStentAlternative"

]);

// !VA CONTROL Elements
const CONTROL_WIDTH_150 = new Set ([
  "CmpnInfoWeight",
  "dcsdCmpnInfoAgeYears",
  "dcsdCmpnInfoAgeMonths",
  "lvngCmpnInfoAgeYears",
  "lvngCmpnInfoAgeMonths",
  "EarlySymptomsAgeYears",
  "EarlySymptomsAgeMonths",
  "PrimaryDurationFirstConsultYears",
  "PrimaryDurationFirstConsultMonths",
  "TreatmentStatusAgeYears",
  "TreatmentStatusAgeMonths",


])


const CONTROL_WIDTH_300 = new Set([
  "CmpnName",
  "UserInfoFirstName",
  "UserInfoCountry",
  "UserInfoStateRegion",
  "UserInfoAgeGroup",
  "CmpnInfoBreed",




  "InfoSourcesBestSource",
  "BreathingCrisisSubstanceForm",
  "BreathingCrisisCost",



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
  "DiagnosisTimeAfterSympto",
  "TreatmentStatusAgeYears",
  "TreatmentStatusAgeMonths",
  "TreatmentStatusTiebackWait"
]);

// !VA QUESTION SEPARATOR

// Add near the other Sets

// !VA Works for 
const QUESTION_SEPARATOR_BELOW = new Set([
  // put question names here (same .name values you already use)

  "UserInfoContactType",
  // "CmpnInfoAnimalType", //checkbox, no workie



  "InfoSourcesPriorKnowledge", 

  "InfoSourcesTypes",
  "InfoSourcesHardToUnderstand",


  "IntubationHistoryWasIntubated", //no workie
  "IntubationHistoryReason",
  "BreathingCrisisCount", //radio, no workie
  "BreathingCrisisCost", //dropdown, no workie,
  "TreatmentFactorsCost",
  "TreatmentFactorsCostComplications",
  "TreatmentFactorsStageLP",
  "TreatmentFactorsStageNeuropathy",
  "TreatmentFactorsRisks",
  "TreatmentFactorsRisksComplications",
  "TreatmentFactorsAge",
  "TreatmentFactorsOther",
  "ManagementPrescriptionType",
  "ManagementPrescriptionCost"
  
  ]);

  const QUESTION_SPACE_BELOW = new Set([
    // put question names here (same .name values you already use)
    "CmpnName",
    "UserInfoContactTypeFacebook",
    "UserInfoAgeGroup", 
    "CmpnInfoBreed",
    "CmpnInfoGender",

    "CmpnInfoAnxiety",


    "IntubationHistoryConcerns"

  ]);


  if (ITEMS_TWO_COL.has(name)) {
    directives.push({ target: "items", className: "survey-two-col" });
  }
  if (ITEMS_THREE_COL.has(name)) {
    directives.push({ target: "items", className: "survey-three-col" });
  }

  if (CONTROL_WIDTH_150.has(name)) {
    directives.push({ target: "control", className: "survey-control-w-150" });
  }
  if (CONTROL_WIDTH_300.has(name)) {
    directives.push({ target: "control", className: "survey-control-w-300" });
  }
  if (CONTROL_WIDTH_600.has(name)) {
    directives.push({ target: "control", className: "survey-control-w-600" });
  }

  if (QUESTION_SEPARATOR_BELOW.has(name)) {
    directives.push({ target: "question", className: "survey-q-separator-below" });
  }
  if (QUESTION_SPACE_BELOW.has(name)) {
    directives.push({ target: "question", className: "survey-q-space-below" });
  }

  return directives;
}
