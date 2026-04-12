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
    "SymptomsIntubationCount",
    "SymptomsIntubationCountAfter",
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

    "BreathingCrisisCount",
    "BreathingEmergencyCount",
    "BreathingCrisisProductRecommendedType",
    "BreathingAspirationCount",
    "BreathingAspirationAfterProcedure",



    "ConclusionGeneralCondition",
    "ConclusionOtherConditions",

    "ConclusionOtherPathTimeframe"

  ]);

  const ITEMS_THREE_COL = new Set([
    "CmpnInfoAnimalType",

    "SymptomsNeckRestraint",
    "SymptomsSeverity",
    "SymptomsIntubationWasIntubated",
    "SymptomsOtherConditions",

    "PrimaryInflammationPanel",
    "PrimaryReflux",
    "PrimaryChangedVets",

    "DiagnosisMisdiagnosis",
    "DiagnosisPrecededSurgery",

    "MedicationPrescription",
    "MedicationSupplementsDidPurchase",
    "MedicationProtocolDidPurchase",

    "ProcedureTiebackIncisionInfection",
    "ProcedureTiebackSuturesFail",
    "ProcedureTiebackCount",

    "ProcedureStentHalitosis",
    "ProcedureStentInfected",
    "ProcedureIssuesThroatclear",
    "ProcedureIssuesThroatclearImproved",
    "ProcedureIncisionInfection",
    "ProcedureAntibiotics",
    "ProcedureRefluxMeds",


    "TherapyDidHave",
    "BreathingCrisisDidHave",
    "BreathingEmergencyDidHave",
    "BreathingOxygenDidUse",

    "ProcedureComplications",
    "ProcedureComparison",
    "ProcedureChoice",

    "BreathingCrisisAdvice",

    "BreathingCrisisProductRecommended",
    "BreathingAspirationDidHave",
    "BreathingAspirationInpatient",
    "BreathingAspirationProcedureAntibiotics",
    "BreathingAspirationProcedureReflux",

    "NeuropathySymptoms",

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

    "ProcedureAgeYears",
    "ProcedureAgeMonths",
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

    "MedicationPrescriptionCost",
    "MedicationSupplementsCost",
    "MedicationProtocolCost",

    "ProcedureScheduledWait",
    "ProcedureCost",
    "ProcedureCostComplications",
    "ProcedureStentType",

    "TherapyCost",

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

    "ProcedureAgePanel",
    "ProcedureAgeDetailsPanel"
  ]);

  // Only use to make panel contents two-column to make them look the same as two-column questions.
  const PANEL_TWO_COL = new Set([
    "UserInfoNameCountryPanel",
    // "SymptomsAgePanel",
    "dcsdCmpnInfoAgeDetailsPanel",
    "lvngCmpnInfoAgeDetailsPanel",
    "SymptomsAgeDetailsPanel",
    "ProcedureAgeDetailsPanel",
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

    "FactorsSourcesTypes",
    "FactorsBestSource",
    "FactorsClearAnswers",

    "SymptomsType",
    "SymptomsSeverity",
    "SymptomsNeckRestraint",
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
    "MedicationSupplementsType",
    "MedicationSupplementsCost",
    "MedicationSupplementsBreathing",
    "MedicationSupplementsMobility",
    "MedicationProtocolCost",
    "MedicationProtocolBreathing",
    "MedicationProtocolMobility",


    "ProcedureScheduledWait",
    "ProcedureTiebackSuturesFailTime",
    "ProcedureTiebackRepeat",
    "ProcedureTiebackCount",
    "ProcedureStentDidMigrate",
    "ProcedureStentReplaced",
    "ProcedureStentHalitosis",
    "ProcedureStentHalitosisRating",
    "ProcedureStentInfected",
    "ProcedureStentInfectedHandling",
    "ProcedureComplications",
    "ProcedureCostComplications",
    "ProcedureIssuesThroatclear",
    "ProcedureIssuesThroatclearImproved",
    "ProcedureRefluxMeds",
    "ProcedureChoice",
    "ProcedureSurgeonInformation",
    "ProcedureSatisfaction",

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
    "BreathingAspirationProcedureReflux",
    "BreathingAspirationCount",
    "BreathingAspirationAfterProcedure",
    "BreathingAspirationInpatient",
    "BreathingAspirationCost",

    "NeuropathySymptomsFirst",
    "NeuropathySymptomsTypeProgression",
    "NeuropathyOtherIssues",


    "ConclusionLifestyleChangesDetails",
    "ConclusionGeneralCondition",
    "ConclusionQOL",
    "ConclusionOtherConditions",
    "ConclusionOtherPathTimeframe"




  ]);

  const QUESTION_SPACE_ABOVE = new Set([
    "UserInfoContactTypeFacebook",
    "UserInfoNameCountryPanel",


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
    "ProcedureAgeDetailsPanel"
  ]);

  const QUESTION_SPACE_BELOW = new Set([
    "UserInfoStateRegion",

    "CmpnInfoBreed",
    "CmpnInfoGender",

    "MedicationPrescriptionCost",

    "ProcedureDidHave",

    "NeuropathySymptomsBreathingOnset",
    "NeuropathySymptomsHindEndOnset",

    "ConclusionOtherConditionsNew",
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