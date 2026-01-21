const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(__dirname, "../data");

const pageFiles = [
  "00_LANDING-page.json",
  "01_USER_INFO-page.json",
  "02_CMPN_INFO-page.json",
  "03_INFO_SOURCES-page.json",
  "04_INTUBATION_HISTORY-page.json",
  "05_BREATHING_CRISIS-page.json",
  "06_EARLY_SYMPTOMS-page.json",
  "07_PRIMARY_DURATION-page.json",
  "08_PRIMARY_VET-page.json",
  "09_DIAGNOSIS-page.json",
  "10_TREATMENT_STATUS-page.json",
  "11_TREATMENT_FACTORS-page.json",
  "12_MANAGEMENT-page.json",
  "13_OTC_PRODUCTS-page.json",
  "14_ASPIRATION-page.json",
  "15_NEUROPATHY-page.json",
  "16_CONCLUSION-page.json",
  
];

const pages = pageFiles.map(filename => {
  const rawPage = JSON.parse(fs.readFileSync(path.join(DATA_DIR, filename), "utf8"));

  // Optionally determine visibleIf value
  let visibleIf = undefined;
  if (filename === "lvngRoot-page.json") {
    visibleIf = "{lndgRootCrossedOver} = 'living'";
  }
  if (filename === "dcsdRoot-page.json") {
    visibleIf = "{lndgRootCrossedOver} = 'deceased'";
  }

  // Rebuild object so visibleIf is placed directly after 'name'
  if (visibleIf !== undefined && rawPage.name) {
    const { name, elements, ...rest } = rawPage;
    return {
      name,
      visibleIf,
      elements,
      ...rest
    };
  } else {
    return rawPage;
  }
});

const masterSurvey = {
    "calculatedValues": [
    {
      "type": "calculatedvalue",
      "name": "lvngCmpnInfoAgeYearsAsMonths",
      "expression": "{lvngCmpnInfoAgeYears} * 12",
      "includeIntoResult": true
    },
    {
      "type": "calculatedvalue",
      "name": "lvngCmpnInfoAgeTotalMonths",
      "expression": "{lvngCmpnInfoAgeYearsAsMonths} + {lvngCmpnInfoAgeMonths}",
      "includeIntoResult": true
    },    
    {
      "type": "calculatedvalue",
      "name": "dcsdCmpnInfoAgeYearsAsMonths",
      "expression": "{dcsdCmpnInfoAgeYears} * 12",
      "includeIntoResult": true
    },
    {
      "type": "calculatedvalue",
      "name": "dcsdCmpnInfoAgeTotalMonths",
      "expression": "{dcsdCmpnInfoAgeYearsAsMonths} + {dscdCmpnInfoAgeMonths}",
      "includeIntoResult": true
    }, 
    {
      "type": "calculatedvalue",
      "name": "ageInMonths",
      "expression": "iif({LifeStatus} = true, {lvngCmpnInfoAgeTotalMonths}, {dcsdCmpnInfoAgeTotalMonths})",
      "includeIntoResult": true
    },
    {
      "name": "ageInMonthsAtSymptomOnset",
      "expression":
        "{EarlySymptomsAgeYears} * 12 + {EarlySymptomsAgeMonths}"
    },
    {
      "name": "durationOfSymptomsInMonths",
      "expression":
        "{ageInMonths} - {ageInMonthsAtSymptomOnset}"
    },
    {
      "type": "calculatedvalue",
      "name": "observeTense",
      "expression": "iif({LifeStatus} = 'true', 'did you observe', 'have you observed')",
      "includeIntoResult": true
    },
    {
      "type": "calculatedvalue",
      "name": "doTense",
      "expression": "iif({LifeStatus} = 'true', 'did', 'does')",
      "includeIntoResult": true
    },
    {
      "type": "calculatedvalue",
      "name": "genderSubjectPronoun",
      "expression": "iif({LifeStatus} = 'true', 'she', 'he')",
      "includeIntoResult": true
    },
    {
      "type": "calculatedvalue",
      "name": "genderObjectPronoun",
      "expression": "iif({LifeStatus} = 'true', 'her', 'his')",
      "includeIntoResult": true
    },
    {
      "type": "calculatedvalue",
      "name": "stateAdjective",
      "expression": "iif({LifeStatus} = 'true', 'last', 'current')",
      "includeIntoResult": true
    },
    {
      "type": "calculatedvalue",
      "name": "blobText",
      "expression": "iif({LifeStatus} = 'true', 'towards the end of {genderObjectPronoun} life', 'in {genderObjectPronoun} current state of health')",
      "includeIntoResult": true
    },


  ],
  title: "Master Survey Build",
  showProgressBar: "top",
  pages
};

fs.writeFileSync(
  path.join(DATA_DIR, "master-survey.json"),
  JSON.stringify(masterSurvey, null, 2)
);
console.log("✅ Merged survey written to data/master-survey.json");