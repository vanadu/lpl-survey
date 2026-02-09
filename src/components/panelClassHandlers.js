  function getName(item) {
    return item?.name || "";
  }

  function findSelectbase(htmlElement) {
    return htmlElement?.querySelector("fieldset.sd-selectbase") || null;
  }

  // function findControl(htmlElement) {
  //   return (
  //     htmlElement?.querySelector(".sd-input") ||
  //     htmlElement?.querySelector("select") ||
  //     htmlElement?.querySelector("input, textarea") ||
  //     null
  //   );
  // }

  // function findControl(htmlElement) {
  //   return htmlElement.querySelector("input, textarea, select");
  // }

  // function findControl(htmlElement) {
  //   return (
  //     htmlElement.querySelector(".sd-input.sd-dropdown") || // dropdown container
  //     htmlElement.querySelector(".sd-input") ||             // text/number wrapper
  //     htmlElement.querySelector("input, textarea, select")  // fallback
  //   );
  // }


  function findControl(htmlElement) {
  // Prefer dropdown wrapper, else any sd-input wrapper, else closest wrapper of a raw control
    return (
      htmlElement.querySelector(".sd-input.sd-dropdown") ||
      htmlElement.querySelector(".sd-input") ||
      htmlElement.querySelector("input, textarea, select")?.closest(".sd-input") ||
      null
    );
  }



export function addCustomClasses(item, htmlElement) {
  if (!item || !htmlElement) return;

  const name = item.name;
  // console.log('name :>> ');
  // console.log(name);

  const control = findControl(htmlElement);
  console.log('name :>> ' + name);
  console.log('control :>> ');
  console.log(control);



  // !VA CONTROL (element width = 300px)
  if (name === "CmpnName") {
    const control = findControl(htmlElement);
    (control ?? htmlElement).classList.add("survey-control-w-300");
  }
  if (name === "UserInfoFirstName") {
    const control = findControl(htmlElement);
    (control ?? htmlElement).classList.add("survey-control-w-300");
  }
  if (name === "UserInfoCountry") {
    const control = findControl(htmlElement);
    (control ?? htmlElement).classList.add("survey-control-w-300");
  }
  if (name === "UserInfoStateRegion") {
    const control = findControl(htmlElement);
    (control ?? htmlElement).classList.add("survey-control-w-300");
  }





  // !VA LAYOUT
  // !VA Two column layout - checkboxes and radios


  if (name === "BreathingCrisisAdviceType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "BreathingCrisisProvidedSubstanceType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "EarlySymptomsType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "EarlyOtherConditionsType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "PrimaryDurationVisitsNumberPanel") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "PrimaryDurationCost") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "PrimaryDurationChangedVetsReason") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "PrimaryVetInfoDetails") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "DiagnosisCost") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusDidHave") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusTiebackCount") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusTiebackComplications") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusBveapReasons") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusBveapComplications") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusStentDidMigrate") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusStentReplaced") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusStentComplications") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusArtyenoidectomyReasons") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusArtyenoidectomyComplications") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusVentrilocordectomyReasons") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "TreatmentStatusVentrilocordectomyComplications") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "ManagementPrescriptionType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "ManagementNonPrescriptionType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "OTCProductsType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "NeuropathyOtherIssues") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "ConclusionPolyneuropathy") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "ConclusionSpecialConsiderations") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "ConclusionPolyneuropathy") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "ConclusionPolyneuropathy") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "ConclusionOtherConditions") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "ConclusionCauseOfDeath") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }

 // !VA Three column Y N Don't know
  if (name === "UserInfoGender") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "CmpnInfoAnimalType") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "InfoSourcesTypes") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "IntubationHistoryWasIntubated") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "IntubationHistoryReason") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "IntubationHistorySymptoms") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-two-col");
  }
  if (name === "BreathingCrisisDidHavePanel") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "BreathingCrisisCount") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "BreathingCrisisAdvice") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  
  if (name === "BreathingCrisisProvidedSubstance") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "EarlySymptomsHindEndWeakness") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "EarlySymptomsIncontinence") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "EarlyOtherConditions") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "PrimaryDurationChangedVets") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "PrimaryVetInflammation") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "PrimaryVetRefluxPanel") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "PrimaryVetRefluxMeds") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "TreatmentStatusArtyenoidectomyDidExplain") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "TreatmentStatusArtyenoidectomyChoice") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "TreatmentStatusVentrilocordectomyDidExplain") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "TreatmentStatusVentrilocordectomyChoice") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "ManagementPrescriptions") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "ManagementPrescriptions") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "ManagementNonPrescription") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "OTCProductsDidPurchase") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "OTCProtocolDidPurchase") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "AspirationDidHave") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "AspirationInpatient") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "AspirationSurgeryPost") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "AspirationStentPost") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }
  if (name === "NeuropathySymptomsDoesHave") {
    const selectbase = htmlElement.querySelector("fieldset.sd-selectbase");
    (selectbase ?? htmlElement).classList.add("survey-three-col");
  }


  
  

}
