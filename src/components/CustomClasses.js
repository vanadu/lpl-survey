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
  "TreatmentStatusArytenoidectomyReasons",
  "TreatmentStatusArytenoidectomyComplications",
  "TreatmentStatusVentrilocordectomyReasons",
  "TreatmentStatusVentrilocordectomyComplications",
  "ManagementPrescriptionType",
  "ManagementNonPrescriptionType",
  "OTCProductsType",
  "NeuropathyOtherIssues",
  "ConclusionGeneralCondition",
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
  "TreatmentStatusArytenoidectomyDidExplain",
  "TreatmentStatusArytenoidectomyChoice",
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

  "ConclusionStentAlternative",

    "PrimaryDurationVisitsNumberPanel",

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

  "TreatmentStatusStentComplicationsCost",
  "TreatmentStatusArytenoidectomyCost",
  "TreatmentStatusArytenoidectomyComplicationsCost",
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

  "PrimaryDurationVisitsNumber",


  "DiagnosisWho",
  "PrimaryVetDiagnosticType",
  "DiagnosisTimeAfterSympto",
  "TreatmentStatusAgeYears",
  "TreatmentStatusAgeMonths",
  "TreatmentStatusTiebackWait",




]);

// !VA QUESTION SEPARATOR

// Add near the other Sets

// !VA Works for 
const QUESTION_SEPARATOR_BELOW = new Set([
  // put question names here (same .name values you already use)

  "UserInfoContactType",
  // "CmpnInfoAnimalType", //checkbox, no workie
  "UserInfoAgeGroup",
  "UserInfoContactTypeFacebook",
  "CmpnInfoAnimalType",
  "CmpnInfoDemeanor",
  "CmpnInfoAnxiety",

  "InfoSourcesPriorKnowledge", 

  "InfoSourcesTypes",
  "InfoSourcesHardToUnderstand",
  "InfoSourcesContradictory",


  "IntubationHistoryWasIntubated", //no workie
  "IntubationHistoryReason",
  "BreathingCrisisCount", //radio, no workie
  "BreathingCrisisCost", //dropdown, no workie,

  "BreathingCrisisAdvice",
  "BreathingCrisisAdviceType",
  "BreathingCrisisProvidedSubstance",
  "BreathingCrisisProvidedSubstanceType",

  "EarlySymptomsType",
  "EarlySymtomsSeverity",
  "EarlySymptomsHindEndWeakness",
  "EarlyOtherConditions",

  "PrimaryDurationVisitsNumber",

  "PrimaryDurationChangedVets",
  "PrimaryDurationChangedVetsReason",

  "PrimaryVetReflux",
  "PrimaryVetRefluxMeds",

  "PrimaryVetConfidence",

  "DiagnosisWho",
  "DiagnosticType",
  "DiagnosisStage",
  "DiagnosisTimeAfterSymptoms",
  "DiagnosisCost",

  "TreatmentStatusTiebackEmergency",
  "TreatmentStatusTiebackWait",
  "TreatmentStatusTiebackCount",
  "TreatmentStatusTiebackOnceCost",
  "TreatmentStatusTiebackMultipleCost",
  "TreatmentStatusTiebackComplications",

  "TreatmentStatusBveapReasons",
  "TreatmentStatusBveapCost",

  "TreatmentStatusStentType",
  "TreatmentStatusStentDidMigrate",
  "TreatmentStatusStentReplaced",
  "TreatmentStatusStentCostOnce",
  "TreatmentStatusStentCostRepeat",

  "TreatmentStatusArytenoidectomyReasons",
  "TreatmentStatusArytenoidectomyLaser",
  "TreatmentStatusArytenoidectomyDidExplain",
  "TreatmentStatusArytenoidectomyChoice",
  "TreatmentStatusArytenoidectomyCost",

  "TreatmentStatusVentrilocordectomyReasons",
  "TreatmentStatusVentrilocordectomyDidExplain",
  "TreatmentStatusVentrilocordectomyChoice",
  "TreatmentStatusVentrilocordectomyDidExplain",
  "TreatmentStatusVentrilocordectomyCost",




  "TreatmentStatusSurgeonInformLevel",




  "TreatmentFactorsCost",

  "TreatmentFactorsStageLP",

  "TreatmentFactorsRisks",

  "TreatmentFactorsAge",
  "TreatmentFactorsGeneralHealth",

  "TreatmentFactorsCircumstancesAccess",


  "TreatmentFactorsOther",
  "ManagementPrescriptionType",
  "ManagementPrescriptionCost",

  "ManagementPrescriptionDoxepinRatingBreathing",
  "ManagementPrescriptionTrazodoneGabapentinRatingBreathing",
  "ManagementPrescriptionGabapentinRatingBreathing",
  "ManagementPrescriptionGalliprantRatingBreathing",
  "ManagementPrescriptionSteroidRatingBreathing",
  "ManagementPrescriptionAntihistamineRatingBreathing",
  "ManagementPrescriptionCereniaRatingBreathing",
  "ManagementPrescriptionMeloxicamRatingBreathing",
  "ManagementPrescriptionAcepromazineRatingBreathing",
  "ManagementPrescriptionAlbuterolRatingBreathing",
  "ManagementPrescriptionTemarilPRatingBreathing",

  "ManagementNonPrescriptionAcupunctureRatingBreathing",
  "ManagementNonPrescriptionTherapyRatingBreathing",
  "ManagementNonPrescriptionColdLaserRatingBreathing",
  "ManagementNonPrescriptionChiroRatingBreathing",

  "OTCProductsDidPurchase",
  "OTCProductsType",
  "OTCProductsCost",
  "OTCProtocolDidPurchase",
  "OTCProtocolCost",

  "AspirationCount",
  "AspirationInpatient",
  "AspirationSurgeryPost",
  "AspirationStentPost",

  "NeuropathySymptomsFirst",

  "NeuropathySymptomsTypeProgression",
  "ConclusionSpecialConsiderations",
  "ConclusionGeneralCondition",

  "ConclusionOtherPathTieback",
  "ConclusionOtherPathBVEAP",
  "ConclusionOtherPathStent",
  "ConclusionOtherPathArytenoidectomy",
  "ConclusionOtherPathVentrilocordectomy",

  "ConclusionStentAlternative"
  
  ]);

  const QUESTION_SPACE_BELOW = new Set([
    // put question names here (same .name values you already use)
    "CmpnName",
 
    "CmpnInfoBreed",
    "CmpnInfoGender",

    "IntubationHistoryConcerns",

    "PrimaryVetSurgery",
    "PrimaryVetInfoDidGive",

    "TreatmentStatusBveapComplications",

    "TreatmentStatusArytenoidectomyComplicationsCost",

    "TreatmentStatusVentrilocordectomyComplications",

    "ManagementPrescriptionDoxepinRatingMobility",
    "ManagementPrescriptionTrazodoneRatingMobility",
    "ManagementPrescriptionGabapentinRatingMobility",
    "ManagementPrescriptionGalliprantRatingMobility",
    "ManagementPrescriptionSteroidRatingMobility",
    "ManagementPrescriptionAntihistamineRatingMobility",
    "ManagementPrescriptionCereniaRatingMobility",
    "ManagementPrescriptionMeloxicamRatingMobility",
    "ManagementPrescriptionAcepromazineRatingMobility",
    "ManagementPrescriptionAlbuterolRatingMobility",
    "ManagementPrescriptionTemarilPRatingMobility",

    "ManagementNonPrescriptionAcupunctureRatingMobility",
    "ManagementNonPrescriptionTherapyRatingMobility",
    "ManagementNonPrescriptionColdLaserRatingMobility",
    "ManagementNonPrescriptionChiroRatingMobility",

    "NeuropathySymptomsBreathingOnset",
    "NeuropathySymptomsHindEndOnset",

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
