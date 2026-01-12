const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(__dirname, "../data");

const pageFiles = [
  "00_LANDING-page.json",
  "01_USER_INFO-page.json",
  "02_CMPN_NAME_LIFE_STATUS-page.json",
  "03_CMPN_INFO-page.json",
  "04_INFO_SOURCES-page.json",
  "05_INTUBATION_HISTORY-page.json",
  "06_BREATHING_CRISIS-page.json",
  "07_EARLY_SYMPTOMS-page.json",
  "08_CHANGED_VETS-page.json",
  "09_VET_PROCEDURE-page.json",
  "10_PRIMARY_DURATION-page.json",
  "11_PRIMARY_HANDLING-page.json",
  "12_PRIMARY_RECOMMENDATION-page.json",
  "13_TREATMENT_CHOICE-page.json"
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
  title: "Master Survey Build",
  showProgressBar: "top",
  pages
};

fs.writeFileSync(
  path.join(DATA_DIR, "master-survey.json"),
  JSON.stringify(masterSurvey, null, 2)
);
console.log("✅ Merged survey written to data/master-survey.json");