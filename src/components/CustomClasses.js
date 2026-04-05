export function getStyleDirectives(item) {
  const name = item?.name;
  if (!name) return [];

  const directives = [];

const ITEMS_CARD_PANEL = new Set([
  "LandingCard1Panel",
  "LandingCard2Panel",
  "UserInfoCard1Panel",
  "UserInfoCard2Panel",
  "CmpnInfoCard1Panel",
  "CmpnInfoCard2Panel",
  "CmpnInfoCard2Panel",
  "FactorsCard1Panel",
  "FactorsCard2Panel",
  "SymptomsCard1Panel",
  "SymptomsCard2Panel",
  "PrimaryCard1Panel",
  "PrimaryCard2Panel",
  "DiagnosisCard1Panel",
  "DiagnosisCard2Panel",
  "MedicationCard1Panel",
  "MedicationCard2Panel",
  "ProcedureCard1Panel",
  "ProcedureCard2Panel",
  "TherapyCard1Panel",
  "TherapyCard2Panel",
  "BreathingCard1Panel",
  "BreathingCard2Panel",
  "NeuropathyCard1Panel",
  "NeuropathyCard2Panel",
  "ConclusionCard1Panel",
  "ConclusionCard2Panel",

])




const ITEMS_TWO_COL = new Set([
  "LandingConsent",
  "LandingPrivacyConsentLinksPanel",

  "UserInfoGender",

  "lvngCmpnInfoAgePanel",
  "dcsdCmpnInfoAgePanel",

  "FactorsSourcesTypes",

  "SymptomsAgePanel", //This is no working, not sure why
  "SymptomsType",
  "SymptomsIntubationSymptoms",
  "SymptomsOtherConditionsType",

  "PrimaryDidRefer",
  "PrimaryReferral",

  "DiagnosisWho",
  "DiagnosisCorrectDiagnosis",
  "DiagnosisCost",

  "MedicationPrescriptionType",
  "MedicationSupplementsType",

  "ProcedureType",
  "ProcedureScheduled",


]);

const ITEMS_THREE_COL = new Set([
  "CmpnInfoAnimalType",

  "SymptomsNeckRestraint",
  "SymptomsSeverity",
  "SymptomsIntubationWasIntubated",
  "SymptomsOtherConditions",

  "PrimaryInflammationPanel", //check if this style includes a space after - it shouldn't
  "PrimaryReflux",
  "PrimaryChangedVets",

  "DiagnosisMisdiagnosis",
  "DiagnosisPrecededSurgery",

  "MedicationPrescription",
  "MedicationSupplementsDidPurchase",

  "ProcedureTiebackIncisionInfection",
  "ProcedureTiebackSuturesFail",
  "ProcedureTiebackCount",


  "ProcedureStentHalitosis",
  "ProcedureStentInfected",
  "ProcedureIssuesThroatclear",
  "ProcedureIssuesThroatclearImproved",

  "ProcedureComplications",
  "ProcedureComparison",
  "ProcedureChoice"



]);

// !VA CONTROL Elements
const CONTROL_WIDTH_150 = new Set ([
  "LandingConsent",
  "CmpnInfoWeight",
  "dcsdCmpnInfoAgeYears",
  "dcsdCmpnInfoAgeMonths",
  "lvngCmpnInfoAgeYears",
  "lvngCmpnInfoAgeMonths",

  "SymptomsAgeYears",
  "SymptomsAgeMonths",

  "ProcedureAgeYears",
  "ProcedureAgeMonths"


])


const CONTROL_WIDTH_300 = new Set([

  "CmpnName",

  "UserInfoFirstName",
  "UserInfoCountry",
  "UserInfoStateRegion",
  "UserInfoAgeGroup",

  "FactorsBestSource",

  "ProcedureScheduledWait",

  "ProcedureCost",
  "ProcedureComplicationsCost",

  "ProcedureStentType"


]);

const CONTROL_WIDTH_600 = new Set([



]);





// PANEL NO BORDER
const PANEL_NO_BORDER = new Set([

  // "UserInfoLifeStatusNamePanel",
  "CmpnInfoAnimalTypePanel",
  "CmpnInfoBreedGenderPanel", // has survey-p-no-border, sd-element--nested-with-borders
  "CmpnInfoWeightPanel",
  "CmpnInfoAgePanel",

  "SymptomsAgePanel",
  "DiagnosisDetailsPanel",
  "BreathingCrisisDidHave"
]);

// PANEL TWO COL - Age panels
const PANEL_TWO_COL = new Set([
  "UserInfoNameCountryPanel",
  "dcsdCmpnInfoAgePanel",
  "lvngCmpnInfoAgePanel",
  "CmpnInfoDemeanor",
  "SymptomsAgePanel"
]);


// !VA QUESTION SEPARATOR

// Add near the other Sets

// !VA Works for 
const QUESTION_SEPARATOR_ABOVE = new Set([
  // put question names here (same .name values you already use)

  "UserInfoGender",
  "UserInfoStateRegion",

  "CmpnInfoWeightPanel",

  "SymptomsIntubationConcerns",
  "SymptomsOtherConditionsType",
  "SymptomsIntubationSymptoms",

  "PrimaryReflux",
  "PrimaryInfoDetails",
  "PrimarySurgeryPerception",
  "PrimaryChangedVetsReason",
  "PrimaryConfidence",
  "PrimaryReferral",
  "PrimaryChangedVetsReason",
  "DiagnosisCorrectDiagnosis",
  "DiagnosisStage",
  "DiagnosisTimeAfterSymptoms",
  "DiagnosisCost",
  "DiagnosisPrecededSurgery",

  "MedicationPrescriptionType",
  "MedicationPrescriptionCost",
  "MedicationPrescriptionDoxepinRatingBreathing",
  "MedicationPrescriptionTrazodoneRatingBreathing",
  "MedicationPrescriptionGabapentinRatingBreathing",
  "MedicationPrescriptionGalliprantRatingBreathing",
  "MedicationPrescriptionSteroidRatingBreathing",
  "MedicationPrescriptionAntihistamineRatingBreathing",
  "MedicationPrescriptionCereniaRatingBreathing",
  "MedicationPrescriptionMeloxicamRatingBreathing",
  "MedicationPrescriptionAcepromineRatingBreathing",
  "MedicationPrescriptionAlbuterolRatingBreathing",
  "MedicationPrescriptionTemarilPRatingBreathing",
  "MedicationRefluxMedicationsLPEffect",
  "MedicationRefluxMedicationsAPEffect",
  "MedicationSupplementsCost",
  "MedicationSupplementsEffectiveness",
  "MedicationProtocolCost",
  "MedicationProtocolEffectiveness",

  "ProcedureScheduled",
  "ProcedureScheduledWait",

  "ProcedureTiebackCount",

  "ProcedureStentDidMigrate",
  "ProcedureStentReplaced",
  "ProcedureStentHalitosis",
  "ProcedureStentHalitosisRating",
  "ProcedureStentInfected",
  "ProcedureStentInfectedHandling",
  
  "ProcedureComplications",
  "ProcedureComplicationsCost",

  "ProcedureIssuesThroatclearImproved",

  "ProcedureChoice",

  "ProcedureSurgeonInformation",
  "ProcedureSatisfaction"


  ]);

const QUESTION_SPACE_ABOVE = new Set([
// put question names here (same .name values you already use)

  "UserInfoContactTypeFacebook",
  "UserInfoContactOK",

]);

const QUESTION_SEPARATOR_BELOW = new Set([
  // put question names here (same .name values you already use)
  "CmpnName",

  "UserInfoContactType",
  "UserInfoContactTypeFacebook",
 
  "CmpnInfoAnimalType",
  "CmpnInfoDemeanor",
  "CmpnInfoAnxiety",

  "FactorsPriorKnowledge", 
  "FactorsSourcesTypes",
  "FactorsBestSource",

  "SymptomsType",
  "SymptomsSeverity",


  "DiagnosisWho",




  
]);

  const QUESTION_SPACE_BELOW = new Set([
    // put question names here (same .name values you already use)
    "UserInfoStateRegion",
 
    "CmpnInfoBreed",
    "CmpnInfoGender",

    "MedicationPrescriptionCost",

    "ProcedureDidHave",






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
    
    "ConclusionOtherConditionsNew"
  ]);


  if (ITEMS_CARD_PANEL.has(name)) {
    directives.push({ target: "panels", className: "survey-card-panel" });
  }

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

  if (PANEL_NO_BORDER.has(name)) {
    directives.push({ target: "question", className: "survey-p-no-border" });
  }

  if (PANEL_TWO_COL.has(name)) {
    directives.push({ target: "question", className: "survey-p-two-col" });
  }

  if (QUESTION_SEPARATOR_ABOVE.has(name)) {
    directives.push({ target: "question", className: "survey-q-separator-above" });
  }
  if (QUESTION_SPACE_ABOVE.has(name)) {
    directives.push({ target: "question", className: "survey-q-space-above" });
  }

  if (QUESTION_SEPARATOR_BELOW.has(name)) {
    directives.push({ target: "question", className: "survey-q-separator-below" });
  }
  if (QUESTION_SPACE_BELOW.has(name)) {
    directives.push({ target: "question", className: "survey-q-space-below" });
  }



  return directives;
}
