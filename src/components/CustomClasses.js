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


  // "InfoSourcesCard1Panel",
  // "InfoSourcesCard2Panel",
  // "IntubationHistoryCard1Panel",
  // "BreathingCrisisCard1Panel",
  // "BreathingCrisisCard2Panel",
  // "EarlySymptomsCard1Panel",
  // "EarlySymptomsCard2Panel",
  // "PrimaryDurationCard1Panel",
  // "PrimaryDurationCard2Panel",
  // "PrimaryVetCard1Panel",
  // "PrimaryVetCard2Panel",
  // "DiagnosisCard1Panel",
  // "TreatmentStatusCard1Panel",
  // "TreatmentStatusCard2Panel",
  // "TreatmentFactorsCard1Panel",
  // "TreatmentFactorsCard2Panel",
  // "ManagementCard1Panel",
  // "ManagementCard2Panel",

  // "OTCProductsCard1Panel",
  // "OTCProductsCard2Panel",

  // "AspirationCard1Panel",
  // "AspirationCard2Panel",
  // "NeuropathyCard1Panel",
  // "NeuropathyCard2Panel",
  // "ConclusionCard1Panel",
  // "ConclusionCard2Panel",

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
  "SymptomsOtherConditionsType",

  "PrimaryDidRefer",
  "PrimaryReferral"


]);

const ITEMS_THREE_COL = new Set([
  "CmpnInfoAnimalType",

  "SymptomsNeckRestraint",
  "SymptomsSeverity",
  "SymptomsIntubationWasIntubated",
  "SymptomsOtherConditions",

  "PrimaryInflammationPanel", //check if this style includes a space after - it shouldn't
  "PrimaryReflux",
  "PrimaryChangedVets"


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
  "SymptomsAgeMonths"


])


const CONTROL_WIDTH_300 = new Set([

  "CmpnName",

  "UserInfoFirstName",
  "UserInfoCountry",
  "UserInfoStateRegion",
  "UserInfoAgeGroup",

  "FactorsBestSource",

]);

const CONTROL_WIDTH_600 = new Set([



]);


// PANEL NO BORDER
const PANEL_NO_BORDER = new Set([

  // "UserInfoLifeStatusNamePanel",
  "CmpnInfoAnimalTypePanel",
  "CmpnInfoBreedGenderPanel",
  "CmpnInfoWeightPanel",
  "CmpnInfoAgePanel"
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

  "PrimaryReflux",
  "PrimaryInfoDetails",
  "PrimarySurgeryPerception",
  "PrimaryChangedVetsReason",
  "PrimaryConfidence",
  "PrimaryReferral"




  ]);

const QUESTION_SPACE_ABOVE = new Set([
// put question names here (same .name values you already use)

  "UserInfoContactTypeFacebook",
  "UserInfoContactOK"

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
  "SymptomsIntubationSymptoms"



  
]);

  const QUESTION_SPACE_BELOW = new Set([
    // put question names here (same .name values you already use)
    "UserInfoStateRegion",
 
    "CmpnInfoBreed",
    "CmpnInfoGender",


    "TreatmentStatusDidHave",


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
