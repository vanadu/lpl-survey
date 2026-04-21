export function getStyleDirectives(item) {
  const name = item?.name;
  if (!name) return [];

  const directives = [];

  const CARD_PANELS = new Set([
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

    "ProcedureUALCard1Panel",
    "ProcedureUALCard2Panel",
    "ProcedureESICard1Panel",
    "ProcedureESICard2Panel",
    "ProcedureBVEAPCard1Panel",
    "ProcedurePAEAPCard2Panel",
    "ProcedurePAECard1Panel",
    "ProcedureVCCCard2Panel",
    "ProcedureVCCCard1Panel",
    "ProcedurePLECard2Panel",
    "ProcedurePLECard1Panel",
    "ProcedureTTCard2Panel",
    "ProcedureTTCard1Panel",
    "ProcedureOtherCard2Panel",
    "ProcedureOtherCard2Panel",



    "TherapyCard1Panel",
    "TherapyCard2Panel",
    "BreathingCard1Panel",
    "BreathingCard2Panel",
    "NeuropathyCard1Panel",
    "NeuropathyCard2Panel",
    "ConclusionCard1Panel",
    "ConclusionCard2Panel",
  ]);

  const ITEMS_TWO_COL = new Set([
    "LandingConsent",
    "LandingPrivacyConsentLinksPanel",

    "UserInfoAgeGroup",
    "UserInfoGender",

    "lvngCmpnInfoAgePanel",
    "dcsdCmpnInfoAgePanel",

    // "CmpnInfoWeightPanel",
    // "CmpnInfoWeightUnits",


    "FactorsSourcesTypes",

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
    "ProcedureUALExtendedStay",
    "ProcedureUALExtendedStayReason",
    "ProcedureUALMedications",
    "ProcedureESIExtendedStay",
    "ProcedureESIExtendedStayReason",
    "ProcedureESIMedications",


    "BreathingCrisisProductRecommendedType",
    "BreathingAspirationCount",
    "BreathingAspirationAfterProcedure",

    "NeuropathyOtherIssues",
    "ConclusionQOL",
    "ConclusionNewSymptomsType",
    "ConclusionOtherHealthIssuesNew",
    "ConclusionLifestyleChangesDetails",
    "ConclusionNewSymptomsType",
    "ConclusionOtherPathTimeframe"

  ]);

  const ITEMS_THREE_COL = new Set([
    "CmpnInfoAnimalType",

    "SymptomsNeckRestraint",
    "SymptomsSeverity",
    "SymptomsIntubationWasIntubated",
    "SymptomsIntubationBeforeSymptoms",
    "SymptomsOtherConditions",

    "PrimaryInflammationPanel",
    "PrimaryReflux",
    "PrimaryChangedVets",

    "DiagnosisMisdiagnosis",
    "DiagnosisPrecededSurgery",

    "MedicationPrescription",
    "MedicationSupplementsDidPurchase",
    "MedicationProtocolDidPurchase",

    "ProcedureUALDifference",
    "ProcedureUALChoice",
    "ProcedureUALIncisionComplications",
    "ProcedureUALIncisionSite",
    "ProcedureUALOralBleeding",
    "ProcedureUALFollowupCare",
    "ProcedureUALExtendedStayRepeatProcedure",
    "ProcedureUALCoughGagRetch",
    "ProcedureUALCoughGagRetchChange",
    "ProcedureUALBadBreath",
    "ProcedureUALBadBreathChange",
    "ProcedureUALRegurgitate",
    "ProcedureUALRegurgitateChange",
    "ProcedureUALMucus",
    "ProcedureUALMucusChange",
    "ProcedureUALSutureFailure",

    "ProcedureESIDifference",
    "ProcedureESIChoice",
    "ProcedureESIIncisionComplications",
    "ProcedureESIIncisionSite",
    "ProcedureESIOralBleeding",
    "ProcedureESIFollowupCare",
    "ProcedureESIExtendedStayRepeatProcedure",
    "ProcedureESICoughGagRetch",
    "ProcedureESICoughGagRetchChange",
    "ProcedureESIBadBreath",
    "ProcedureESIBadBreathChange",
    "ProcedureESIRegurgitate",
    "ProcedureESIRegurgitateChange",
    "ProcedureESIMucus",
    "ProcedureESIMucusChange",




    "TherapyDidHave",
       
    "BreathingCrisisDidHave",
    "BreathingEmergencyDidHave",
    "BreathingCrisisAdvice",
    "BreathingCrisisProductRecommended",
    "BreathingOxygenDidUse",

    "BreathingAspirationDidHave",
    "BreathingAspirationInpatient",
    "BreathingAspirationProcedureAntibiotics",
    "BreathingAspirationAfterRefluxMeds",

    "NeuropathySymptoms",
    "NeuropathyFrontLegs",

    "ConclusionNewSymptoms",
    "ConclusionLifestyleChanges",
    "ConclusionStentAlternative"

  ]);

  // !VA CONTROL Elements
  const CONTROL_WIDTH_150 = new Set([
    // "LandingConsent",
    "CmpnInfoWeight",
    "dcsdCmpnInfoAgeYears",
    "dcsdCmpnInfoAgeMonths",
    "lvngCmpnInfoAgeYears",
    "lvngCmpnInfoAgeMonths",

    "SymptomsAgeYears",
    "SymptomsAgeMonths",

    "ProcedureUALAgeYears",
    "ProcedureUALAgeMonths",
    "ProcedureESIAgeYears",
    "ProcedureESIAgeMonths",

  ]);


  const CONTROL_WIDTH_300 = new Set([
    "CmpnName",
    "UserInfoContactTypeEmail",

    "UserInfoFirstName",
    "UserInfoCountry",
    "UserInfoStateRegion",


    "CmpnInfoBreed",
    "CmpnInfoGender",

    "FactorsBestSource",

    "SymptomsIntubationCount",

    "MedicationPrescriptionCost",
    "MedicationSupplementsCost",
    "MedicationProtocolCost",


    "ProcedureUALScheduledWait",
    "ProcedureUALCost",
    "ProcedureUALComplicationsCost",
    "ProcedureUALSymptomsReturnedTime",
    "ProcedureESIScheduledWait",
    "ProcedureESICost",
    "ProcedureESIComplicationsCost",
    "ProcedureESISymptomsReturnedTime",

    "ProcedureESIType",

    "TherapyCost",

    "BreathingCrisisCount",
    "BreathingEmergencyCount",

    "BreathingEmergencyCost",



    "BreathingAspirationCost",

    "NeuropathySymptomsBreathingOnset",
    "NeuropathySymptomsHindEndOnset",






  ]);

  const CONTROL_WIDTH_600 = new Set([
    "UserInfoContactTypeFacebook",
    "DiagnosticType"
  ]);

  // Only use to remove borders on panels
  const PANEL_NO_BORDER = new Set([
    // "UserInfoLifeStatusNamePanel",
    "UserInfoNameCountryPanel",
    "UserInfoStateRegionPanel",
    "CmpnInfoAnimalTypePanel",
    "CmpnInfoBreedGenderPanel",
    "CmpnInfoWeightDetailsPanel",
    "CmpnInfoWeightPanel",
    "CmpnInfoAgePanel",

    "dcsdCmpnInfoAgeDetailsPanel",
    "lvngCmpnInfoAgeDetailsPanel",

    "SymptomsAgeDetailsPanel",
    "SymptomsAgePanel",

    "DiagnosisDetailsPanel",

    "MedicationPrescriptionRatingPanel",

    "ProcedureUALCard1Panel",
    "ProcedureESICard1Panel",

    // "ProcedureUALAgePanel",
    "ProcedureUALAgeDetailsPanel",
    "ProcedureESIAgeDetailsPanel",
    // "ProcedureUALPostOpPanel",







  ]);

  // Only use to make panel contents two-column to make them look the same as two-column questions.
  const PANEL_TWO_COL = new Set([
    "UserInfoNameCountryPanel",
    // "SymptomsAgePanel",
    "dcsdCmpnInfoAgeDetailsPanel",
    "lvngCmpnInfoAgeDetailsPanel",
    "SymptomsAgeDetailsPanel",


    "ProcedureUALAgeDetailsPanel",
    "ProcedureESIAgeDetailsPanel",

    // "ProcedureUALPeriopAspirationPneumonia"




    // "dcsdCmpnInfoAgePanel",
    // "SymptomsAgePanel",
    // "CmpnInfoWeightDetailsPanel",
  ]);

  // !VA QUESTION SEPARATOR
  const QUESTION_SEPARATOR_ABOVE = new Set([
    "LifeStatus",
    "UserInfoContactOK",
    "UserInfoGender",
    "UserInfoStateRegionPanel",

    "CmpnInfoWeightPanel",
    "CmpnInfoHasInsurance",

    "FactorsSourcesTypes",
    "FactorsBestSource",
    "FactorsClearAnswers",

    "SymptomsType",
    "SymptomsSeverity",
    "SymptomsNeckRestraint",
    "SymptomsIntubationCount",
    "SymptomsIntubationBeforeSymptoms",
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
    "MedicationRatingText",
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
    "MedicationSupplementsType",
    "MedicationSupplementsCost",
    "MedicationSupplementsBreathing",
    "MedicationSupplementsMobility",
    "MedicationProtocolCost",
    "MedicationProtocolBreathing",
    "MedicationProtocolMobility",




    "ProcedureSequence",

    "ProcedureUALDifference",
    "ProcedureUALChoice",
    "ProcedureUALIncisionComplications",
    "ProcedureUALOralBleeding",
    "ProcedureUALExtendedStay",
    "ProcedureUALExtendedStayReason",
    "ProcedureUALExtendedStayRepeatProcedure",
    "ProcedureUALFollowupCare",
    "ProcedureUALMedications",
    "ProcedureUALCost",
    "ProcedureUALComplicationsCost",
    "ProcedureUALBreathingPostOp",
    "ProcedureUALCoughGagRetch",
    "ProcedureUALCoughGagRetchChange",
    "ProcedureUALBadBreath",
    "ProcedureUALBadBreathChange",
    "ProcedureUALRegurgitate",
    "ProcedureUALRegurgitateChange",
    "ProcedureUALMucus",
    "ProcedureUALMucusChange",
    "ProcedureUALBreathingLongTerm",
    "ProcedureUALSymptomsReturnedTime",
    "ProcedureUALSutureFailure",
    "ProcedureUALLongTermRepeatProcedure",
    "ProcedureUALSatisfaction",

    "ProcedureESIDifference",
    "ProcedureESIChoice",
    "ProcedureESIIncisionComplications",
    "ProcedureESIOralBleeding",
    "ProcedureESIExtendedStay",
    "ProcedureESIExtendedStayReason",
    "ProcedureESIExtendedStayRepeatProcedure",
    "ProcedureESIFollowupCare",
    "ProcedureESIMedications",
    "ProcedureESICost",
    "ProcedureESIComplicationsCost",
    "ProcedureESIBreathingPostOp",
    "ProcedureESICoughGagRetch",
    "ProcedureESICoughGagRetchChange",
    "ProcedureESIBadBreath",
    "ProcedureESIBadBreathChange",
    "ProcedureESIRegurgitate",
    "ProcedureESIRegurgitateChange",
    "ProcedureESIMucus",
    "ProcedureESIMucusChange",
    "ProcedureESIBreathingLongTerm",
    "ProcedureESISymptomsReturnedTime",
    "ProcedureESILongTermRepeatProcedure",
    "ProcedureESISatisfaction",



    "TherapyType",
    "TherapyAcupunctureRatingBreathing",
    "TherapyTherapyRatingBreathing",
    "TherapyColdLaserRatingBreathing",
    "TherapyChiroRatingBreathing",

    "BreathingCrisisCount",
    "BreathingEmergencyDidHave",
    "BreathingEmergencyCount",
    "BreathingEmergencyCost",
    "BreathingCrisisAdvice",
    "BreathingCrisisAdviceType",
    "BreathingCrisisProductRecommended",
    "BreathingCrisisProductRecommendedType",
    "BreathingCrisisProductRecommendedForm",
    "BreathingOxygenDidUse",
    "BreathingCrisisOxygenPrevent",
    "BreathingCrisisOxygenRevive",
    "BreathingAspirationAfterRefluxMeds",
    "BreathingAspirationCount",
    "BreathingAspirationAfterProcedure",
    "BreathingAspirationInpatient",
    "BreathingAspirationCost",

    "NeuropathySymptomsFirst",
    "NeuropathyFrontLegs",
    "NeuropathySymptomsTypeProgression",
    "NeuropathyOtherIssues",

    "ConclusionNewSymptomsType",
    "ConclusionLifestyleChangesDetails",
    "ConclusionQOL",
    "ConclusionQOLRating",



    "ConclusionOtherHealthIssues",
    "ConclusionOtherHealthIssuesNew",
    "ConclusionLifestyleChanges",
    "ConclusionUserLifestyle",
    "ConclusionUserDistress",


    "ConclusionOtherPathDetails",
    "ConclusionOtherPathTimeframe",

    "ConclusionDifferentChoices"


  ]);

  const QUESTION_SPACE_ABOVE = new Set([
    "UserInfoContactTypeFacebook",
    // "UserInfoNameCountryPanel",


    "FactorsProcedureCost",
    "FactorsSymptomsBreathingCrisis",
    "FactorsSurgeryAnesthesia",
    "FactorsGeneralAge",
    "FactorsCircumstancesAccess",
    "FactorsOther",

    "ConclusionOtherPath"


  ]);

  const QUESTION_SEPARATOR_BELOW = new Set([
    "UserInfoContactType",
    "CmpnInfoAnimalType",
    "CmpnInfoDemeanor",
    "CmpnInfoAnxiety",
    "DiagnosisWho",
    "ProcedureUALAgeDetailsPanel",
    "ProcedureESIAgeDetailsPanel"
  ]);

  const QUESTION_SPACE_BELOW = new Set([
    "UserInfoStateRegion",

    "CmpnInfoBreed",
    // "CmpnInfoGender",

    "CmpnInfoWeight",

    "MedicationPrescriptionCost",

    "ProcedureDidHave",

    "NeuropathySymptomsBreathingOnset",
    "NeuropathySymptomsHindEndOnset",

    "ConclusionOtherHealthIssuesNew",
  ]);

  // !VA CARD applies only to the closest framed card panel
  if (CARD_PANELS.has(name)) {
    directives.push({ target: "card", className: "survey-card-panel" });
  }

  // !VA ITEMS only applies to elements with .sd-selectbase or fieldset.sd-selectbase
  if (ITEMS_TWO_COL.has(name)) {
    directives.push({ target: "items", className: "survey-two-col" });
  }
  if (ITEMS_THREE_COL.has(name)) {
    directives.push({ target: "items", className: "survey-three-col" });
  }

  // !VA CONTROL only applies to .sd-input.sd-dropdown or input, textarea, select wrappers
  if (CONTROL_WIDTH_150.has(name)) {
    directives.push({ target: "control", className: "survey-control-w-150" });
  }
  if (CONTROL_WIDTH_300.has(name)) {
    directives.push({ target: "control", className: "survey-control-w-300" });
  }
  if (CONTROL_WIDTH_600.has(name)) {
    directives.push({ target: "control", className: "survey-control-w-600" });
  }

  // !VA PANEL should only be used for generic panel-level styling
  if (PANEL_NO_BORDER.has(name)) {
    directives.push({ target: "panel", className: "survey-question-no-border" });
  }

  if (PANEL_TWO_COL.has(name)) {
    directives.push({ target: "panel", className: "survey-panel-two-col" });
  }

  if (QUESTION_SEPARATOR_ABOVE.has(name)) {
    directives.push({ target: "row", className: "survey-q-separator-above" });
  }
  if (QUESTION_SPACE_ABOVE.has(name)) {
    directives.push({ target: "row", className: "survey-q-space-above" });
  }

  if (QUESTION_SEPARATOR_BELOW.has(name)) {
    directives.push({ target: "row", className: "survey-q-separator-below" });
  }
  if (QUESTION_SPACE_BELOW.has(name)) {
    directives.push({ target: "row", className: "survey-q-space-below" });
  }



  return directives;
}