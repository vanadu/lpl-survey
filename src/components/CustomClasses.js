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
    "ProcedureBVEAPCard2Panel",
    "ProcedureBVEAPCard1Panel",
    "ProcedurePAECard2Panel",
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

  const HEAD_PANELS = new Set([
    "UserInfoHeadPanel",
    "UserInfoAboutHeadPanel",
    "CmpnInfoHeadPanel",
    "FactorsHeadPanel",
    "SymptomsHeadPanel",
    "PrimaryHeadPanel",
    "DiagnosisHeadPanel",
    "MedicationHeadPanel",
    "ProcedureHeadPanel",
    "ProcedureUALHeadPanel",
    "ProcedureESIHeadPanel",
    "ProcedureBVEAPHeadPanel",
    "ProcedurePAEHeadPanel",
    "ProcedureVCCHeadPanel",
    "ProcedurePLEHeadPanel",
    "ProcedureTTHeadPanel",
    "ProcedureOtherHeadPanel",
    "TherapyHeadPanel",
    "BreathingHeadPanel",
    "NeuropathyHeadPanel",
    "ConclusionHeadPanel",
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
    "ProcedureUALComplicationsType",
    "ProcedureUALExtendedStay",
    "ProcedureUALMedicationsType",
    "ProcedureUALComplicationsType",


    "ProcedureESIExtendedStay",
    "ProcedureESIComplicationsType",
    "ProcedureESIMedicationsType",
    "ProcedureESIComplicationsType",

    "ProcedureBVEAPExtendedStay",
    "ProcedureBVEAPComplicationsType",
    "ProcedureBVEAPMedicationsType",
    "ProcedureBVEAPComplicationsType",

    "ProcedurePAEExtendedStay",
    "ProcedurePAEComplicationsType",
    "ProcedurePAEMedicationsType",
    "ProcedurePAEComplicationsType",

    "ProcedureVCCExtendedStay",
    "ProcedureVCCComplicationsType",
    "ProcedureVCCMedicationsType",
    "ProcedureVCCComplicationsType",


    "ProcedurePLEExtendedStay",
    "ProcedurePLEComplicationsType",
    "ProcedurePLEMedicationsType",

    "ProcedureTTExtendedStay",
    "ProcedureTTComplicationsType",
    "ProcedureTTMedicationsType",
    "ProcedureTTLComplicationsType",

    "ProcedureOtherExtendedStay",
    "ProcedureOtherComplicationsType",
    "ProcedureOtherMedicationsType",
    "ProcedureOtherComplicationsType",

    "BreathingCrisisProductRecommendedType",


    "NeuropathyOtherIssues",
    "ConclusionSymptomsChangedDetails",
    "ConclusionQOLIssues",
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
    "ProcedureUALComplications",
    "ProcedureUALComplicationsRepeatProcedure",
    "ProcedureUALFollowupCare",
    "ProcedureUALMedications",
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
    "ProcedureESIComplications",
    "ProcedureESIComplicationsRepeatProcedure",
    "ProcedureESIFollowupCare",
    "ProcedureESIMedications",
    "ProcedureESICoughGagRetch",
    "ProcedureESICoughGagRetchChange",
    "ProcedureESIBadBreath",
    "ProcedureESIBadBreathChange",
    "ProcedureESIRegurgitate",
    "ProcedureESIRegurgitateChange",
    "ProcedureESIMucus",
    "ProcedureESIMucusChange",

    "ProcedureBVEAPDifference",
    "ProcedureBVEAPChoice",
    "ProcedureBVEAPIncisionComplications",
    "ProcedureBVEAPIncisionSite",
    "ProcedureBVEAPOralBleeding",
    "ProcedureBVEAPComplications",
    "ProcedureBVEAPFollowupCare",
    "ProcedureBVEAPMedications",
    "ProcedureBVEAPCoughGagRetch",
    "ProcedureBVEAPCoughGagRetchChange",
    "ProcedureBVEAPBadBreath",
    "ProcedureBVEAPBadBreathChange",
    "ProcedureBVEAPRegurgitate",
    "ProcedureBVEAPRegurgitateChange",
    "ProcedureBVEAPMucus",
    "ProcedureBVEAPMucusChange",


    "ProcedurePAEDifference",
    "ProcedurePAELaser",
    "ProcedurePAEChoice",
    "ProcedurePAEIncisionComplications",
    "ProcedurePAEIncisionSite",
    "ProcedurePAEOralBleeding",
    "ProcedurePAEComplications",
    "ProcedurePAEFollowupCare",
    "ProcedurePAEMedications",
    "ProcedurePAECoughGagRetch",
    "ProcedurePAECoughGagRetchChange",
    "ProcedurePAEBadBreath",
    "ProcedurePAEBadBreathChange",
    "ProcedurePAERegurgitate",
    "ProcedurePAERegurgitateChange",
    "ProcedurePAEMucus",
    "ProcedurePAEMucusChange",

    "ProcedureVCCDifference",
    "ProcedureVCCLaser",
    "ProcedureVCCChoice",
    "ProcedureVCCIncisionComplications",
    "ProcedureVCCIncisionSite",
    "ProcedureVCCOralBleeding",
    "ProcedureVCCComplications",
    "ProcedureVCCFollowupCare",
    "ProcedureVCCMedications",
    "ProcedureVCCCoughGagRetch",
    "ProcedureVCCCoughGagRetchChange",
    "ProcedureVCCBadBreath",
    "ProcedureVCCBadBreathChange",
    "ProcedureVCCRegurgitate",
    "ProcedureVCCRegurgitateChange",
    "ProcedureVCCMucus",
    "ProcedureVCCMucusChange",

    "ProcedurePLEDifference",
    "ProcedurePLELaser",
    "ProcedurePLEChoice",
    "ProcedurePLEIncisionComplications",
    "ProcedurePLEIncisionSite",
    "ProcedurePLEOralBleeding",
    "ProcedurePLEComplications",
    "ProcedurePLEFollowupCare",
    "ProcedurePLEMedications",
    "ProcedurePLECoughGagRetch",
    "ProcedurePLECoughGagRetchChange",
    "ProcedurePLEBadBreath",
    "ProcedurePLEBadBreathChange",
    "ProcedurePLERegurgitate",
    "ProcedurePLERegurgitateChange",
    "ProcedurePLEMucus",
    "ProcedurePLEMucusChange",

    "ProcedureTTDifference",
    "ProcedureTTChoice",
    "ProcedureTTIncisionComplications",
    "ProcedureTTIncisionSite",
    "ProcedureTTOralBleeding",
    "ProcedureTTComplications",
    "ProcedureTTFollowupCare",
    "ProcedureTTMedications",
    "ProcedureTTCoughGagRetch",
    "ProcedureTTCoughGagRetchChange",
    "ProcedureTTBadBreath",
    "ProcedureTTBadBreathChange",
    "ProcedureTTRegurgitate",
    "ProcedureTTRegurgitateChange",
    "ProcedureTTMucus",
    "ProcedureTTMucusChange",

    "ProcedureOtherDifference",
    "ProcedureOtherChoice",
    "ProcedureOtherIncisionComplications",
    "ProcedureOtherIncisionSite",
    "ProcedureOtherOralBleeding",
    "ProcedureOtherComplications",
    "ProcedureOtherFollowupCare",
    "ProcedureOtherMedications",
    "ProcedureOtherCoughGagRetch",
    "ProcedureOtherCoughGagRetchChange",
    "ProcedureOtherBadBreath",
    "ProcedureOtherBadBreathChange",
    "ProcedureOtherRegurgitate",
    "ProcedureOtherRegurgitateChange",
    "ProcedureOtherMucus",
    "ProcedureOtherMucusChange",

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
    "ConclusionSymptomsChanged",
    "ConclusionQOL",
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
    "ProcedureBVEAPAgeYears",
    "ProcedureBVEAPAgeMonths",
    "ProcedurePAEAgeYears",
    "ProcedurePAEAgeMonths",
    "ProcedureVCCAgeYears",
    "ProcedureVCCAgeMonths",
    "ProcedurePLEAgeYears",
    "ProcedurePLEAgeMonths",
    "ProcedureTTAgeYears",
    "ProcedureTTAgeMonths",
    "ProcedureOtherAgeYears",
    "ProcedureOtherAgeMonths",

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
    "ProcedureUALFollowupCost",
    "ProcedureUALSymptomsReturnedTime",

    "ProcedureESIScheduledWait",
    "ProcedureESICost",
    "ProcedureESIFollowupCost",
    "ProcedureESISymptomsReturnedTime",

    "ProcedureBVEAPScheduledWait",
    "ProcedureBVEAPCost",
    "ProcedureBVEAPFollowupCost",
    "ProcedureBVEAPSymptomsReturnedTime",

    "ProcedurePAEScheduledWait",
    "ProcedurePAECost",
    "ProcedurePAEFollowupCost",
    "ProcedurePAESymptomsReturnedTime",

    "ProcedureVCCScheduledWait",
    "ProcedureVCCCost",
    "ProcedureVCCFollowupCost",
    "ProcedureVCCSymptomsReturnedTime",


    "ProcedurePLEScheduledWait",
    "ProcedurePLECost",
    "ProcedurePLEFollowupCost",
    "ProcedurePLESymptomsReturnedTime",

    "ProcedureTTScheduledWait",
    "ProcedureTTCost",
    "ProcedureTTFollowupCost",
    "ProcedureTTSymptomsReturnedTime",

    "ProcedureOtherScheduledWait",
    "ProcedureOtherCost",
    "ProcedureOtherFollowupCost",
    "ProcedureOtherSymptomsReturnedTime",

    "ProcedureESIType",

    "TherapyCost",

    "BreathingCrisisCount",
    "BreathingEmergencyCount",
    "BreathingEmergencyCost",
    "BreathingAspirationCount",
    "BreathingAspirationAfterProcedure",
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
    "ProcedureBVEAPCard1Panel",
    "ProcedurePAECard1Panel",
    "ProcedureVCCCard1Panel",
    "ProcedurePLECard1Panel",
    "ProcedureTTCard1Panel",
    "ProcedureOtherCard1Panel",

    // "ProcedureUALAgePanel",
    "ProcedureUALAgeDetailsPanel",
    "ProcedureESIAgeDetailsPanel",
    "ProcedureBVEAPAgeDetailsPanel",
    "ProcedurePAEAgeDetailsPanel",
    "ProcedureVCCAgeDetailsPanel",
    "ProcedurePLEAgeDetailsPanel",
    "ProcedureTTAgeDetailsPanel",
    "ProcedureOtherAgeDetailsPanel",
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
    "ProcedureBVEAPAgeDetailsPanel",
    "ProcedurePAEAgeDetailsPanel",
    "ProcedureVCCAgeDetailsPanel",
    "ProcedurePLEAgeDetailsPanel",
    "ProcedureTTAgeDetailsPanel",
    "ProcedureOtherAgeDetailsPanel",


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
    "SymptomsIntubationWasIntubated",
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

    "ProcedureUALScheduled",
    "ProcedureUALScheduledWait",
    "ProcedureUALDifference",
    "ProcedureUALChoice",
    "ProcedureUALIncisionComplications",
    "ProcedureUALOralBleeding",
    "ProcedureUALComplications",
    "ProcedureUALComplicationsType",
    "ProcedureUALExtendedStay",
    "ProcedureUALComplicationsType",
    "ProcedureUALExtendedStayRepeatProcedure",
    "ProcedureUALFollowupCare",
    "ProcedureUALMedications",
    "ProcedureUALMedicationsType",
    "ProcedureUALMedicationsType",
    "ProcedureUALCost",
    "ProcedureUALFollowupCost",
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

    "ProcedureESIScheduled",
    "ProcedureESIScheduledWait",
    "ProcedureESIDifference",
    "ProcedureESIChoice",
    "ProcedureESIIncisionComplications",
    "ProcedureESIOralBleeding",
    "ProcedureESIComplications",
    "ProcedureESIComplicationsType",
    "ProcedureESIExtendedStay",
    "ProcedureESIComplicationsRepeatProcedure",
    "ProcedureESIFollowupCare",
    "ProcedureESIMedications",
    "ProcedureESIMedicationsType",
    "ProcedureESICost",
    "ProcedureESIFollowupCost",
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


    "ProcedureBVEAPScheduled",
    "ProcedureBVEAPScheduledWait",
    "ProcedureBVEAPDifference",
    "ProcedureBVEAPChoice",
    "ProcedureBVEAPIncisionComplications",
    "ProcedureBVEAPOralBleeding",
    "ProcedureBVEAPComplications",
    "ProcedureBVEAPComplicationsType",
    "ProcedureBVEAPExtendedStay",
    "ProcedureBVEAPFollowupCare",
    "ProcedureBVEAPMedications",
    "ProcedureBVEAPMedicationsType",
    "ProcedureBVEAPCost",
    "ProcedureBVEAPFollowupCost",
    "ProcedureBVEAPBreathingPostOp",
    "ProcedureBVEAPCoughGagRetch",
    "ProcedureBVEAPCoughGagRetchChange",
    "ProcedureBVEAPBadBreath",
    "ProcedureBVEAPBadBreathChange",
    "ProcedureBVEAPRegurgitate",
    "ProcedureBVEAPRegurgitateChange",
    "ProcedureBVEAPMucus",
    "ProcedureBVEAPMucusChange",
    "ProcedureBVEAPBreathingLongTerm",
    "ProcedureBVEAPSymptomsReturnedTime",
    "ProcedureBVEAPLongTermRepeatProcedure",
    "ProcedureBVEAPSatisfaction",

    "ProcedurePAEScheduled",
    "ProcedurePAEScheduledWait",
    "ProcedurePAEDifference",
    "ProcedurePAELaser",
    "ProcedurePAEChoice",
    "ProcedurePAEIncisionComplications",
    "ProcedurePAEOralBleeding",
    "ProcedurePAEComplications",
    "ProcedurePAEComplicationsType",
    "ProcedurePAEExtendedStay",
    "ProcedurePAEFollowupCare",
    "ProcedurePAEMedications",
    "ProcedurePAEMedicationsType",
    "ProcedurePAECost",
    "ProcedurePAEFollowupCost",
    "ProcedurePAEBreathingPostOp",
    "ProcedurePAECoughGagRetch",
    "ProcedurePAECoughGagRetchChange",
    "ProcedurePAEBadBreath",
    "ProcedurePAEBadBreathChange",
    "ProcedurePAERegurgitate",
    "ProcedurePAERegurgitateChange",
    "ProcedurePAEMucus",
    "ProcedurePAEMucusChange",
    "ProcedurePAEBreathingLongTerm",
    "ProcedurePAESymptomsReturnedTime",
    "ProcedurePAELongTermRepeatProcedure",
    "ProcedurePAESatisfaction",

    "ProcedureVCCScheduled",
    "ProcedureVCCScheduledWait",
    "ProcedureVCCDifference",
    "ProcedureVCCLaser",
    "ProcedureVCCChoice",
    "ProcedureVCCIncisionComplications",
    "ProcedureVCCOralBleeding",
    "ProcedureVCCExtendedStay",
    "ProcedureVCCComplicationsType",
    "ProcedureVCCExtendedStayRepeatProcedure",
    "ProcedureVCCFollowupCare",
    "ProcedureVCCMedications",
    "ProcedureVCCMedicationsType",    
    "ProcedureVCCCost",
    "ProcedureVCCFollowupCost",
    "ProcedureVCCBreathingPostOp",
    "ProcedureVCCCoughGagRetch",
    "ProcedureVCCCoughGagRetchChange",
    "ProcedureVCCBadBreath",
    "ProcedureVCCBadBreathChange",
    "ProcedureVCCRegurgitate",
    "ProcedureVCCRegurgitateChange",
    "ProcedureVCCMucus",
    "ProcedureVCCMucusChange",
    "ProcedureVCCBreathingLongTerm",
    "ProcedureVCCSymptomsReturnedTime",
    "ProcedureVCCLongTermRepeatProcedure",
    "ProcedureVCCSatisfaction",

    "ProcedurePLEScheduled",
    "ProcedurePLEScheduledWait",
    "ProcedurePLEDifference",
    "ProcedurePLELaser",
    "ProcedurePLEChoice",
    "ProcedurePLEIncisionComplications",
    "ProcedurePLEOralBleeding",
    "ProcedurePLEExtendedStay",
    "ProcedurePLEComplicationsType",
    "ProcedurePLEExtendedStayRepeatProcedure",
    "ProcedurePLEFollowupCare",
    "ProcedurePLEMedications",
    "ProcedurePLEMedicationsType",
    "ProcedurePLECost",
    "ProcedurePLEFollowupCost",
    "ProcedurePLEBreathingPostOp",
    "ProcedurePLECoughGagRetch",
    "ProcedurePLECoughGagRetchChange",
    "ProcedurePLEBadBreath",
    "ProcedurePLEBadBreathChange",
    "ProcedurePLERegurgitate",
    "ProcedurePLERegurgitateChange",
    "ProcedurePLEMucus",
    "ProcedurePLEMucusChange",
    "ProcedurePLEBreathingLongTerm",
    "ProcedurePLESymptomsReturnedTime",
    "ProcedurePLELongTermRepeatProcedure",
    "ProcedurePLESatisfaction",

    "ProcedureTTScheduled",
    "ProcedureTTScheduledWait",
    "ProcedureTTDifference",
    "ProcedureTTChoice",
    "ProcedureTTIncisionComplications",
    "ProcedureTTOralBleeding",
    "ProcedureTTExtendedStay",
    "ProcedureTTComplicationsType",
    "ProcedureTTFollowupCare",
    "ProcedureTTMedications",
    "ProcedureTTMedicationsType",
    "ProcedureTTCost",
    "ProcedureTTFollowupCost",
    "ProcedureTTBreathingPostOp",
    "ProcedureTTCoughGagRetch",
    "ProcedureTTCoughGagRetchChange",
    "ProcedureTTBadBreath",
    "ProcedureTTBadBreathChange",
    "ProcedureTTRegurgitate",
    "ProcedureTTRegurgitateChange",
    "ProcedureTTMucus",
    "ProcedureTTMucusChange",
    "ProcedureTTBreathingLongTerm",
    "ProcedureTTSymptomsReturnedTime",
    "ProcedureTTLongTermRepeatProcedure",
    "ProcedureTTSatisfaction",

    "ProcedureOtherScheduled",
    "ProcedureOtherScheduledWait",
    "ProcedureOtherDifference",
    "ProcedureOtherChoice",
    "ProcedureOtherIncisionComplications",
    "ProcedureOtherOralBleeding",
    "ProcedureOtherExtendedStay",
    "ProcedureOtherComplicationsType",
    "ProcedureOtherExtendedStayRepeatProcedure",
    "ProcedureOtherFollowupCare",
    "ProcedureOtherMedications",
    "ProcedureOtherMedicationsType",
    "ProcedureOtherCost",
    "ProcedureOtherFollowupCost",
    "ProcedureOtherBreathingPostOp",
    "ProcedureOtherCoughGagRetch",
    "ProcedureOtherCoughGagRetchChange",
    "ProcedureOtherBadBreath",
    "ProcedureOtherBadBreathChange",
    "ProcedureOtherRegurgitate",
    "ProcedureOtherRegurgitateChange",
    "ProcedureOtherMucus",
    "ProcedureOtherMucusChange",
    "ProcedureOtherBreathingLongTerm",
    "ProcedureOtherSymptomsReturnedTime",
    "ProcedureOtherLongTermRepeatProcedure",
    "ProcedureOtherSatisfaction",

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


    "ConclusionSymptomsChangedDetails",
    "ConclusionLifestyleChangesDetails",
    "ConclusionQOL",
    "ConclusionQOLIssues",
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
    // "ProcedureUALAgeDetailsPanel",
    // "ProcedureESIAgeDetailsPanel",
    // "ProcedureBVEAPAgeDetailsPanel",
    // "ProcedurePAEgeDetailsPanel",
    // "ProcedureVCCAgeDetailsPanel",
    // "ProcedurePLEAgeDetailsPanel",
    // "ProcedureTTAgeDetailsPanel",
    // "ProcedureOtherAgeDetailsPanel"
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

  if (HEAD_PANELS.has(name)) {
    directives.push({ target: "panel", className: "survey-head-panel" });
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