const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(__dirname, "../data");

const pageFiles = [
  "00_LANDING-page.json",
  "01_USER_INFO-page.json",
  "02_CMPN_NAME_LIFE_STATUS-page.json",
  "03_INFO_SOURCES-page.json",
  "04_INTUBATION_HISTORY-page.json",
  "05_BREATHING_CRISIS-page.json",
  "06L_CMPN_INFO-page.json",
  "07L_EARLY_SYMPTOMS-page.json",
  "08L_CHANGED_VETS-page.json",
  "09L_PRIMARY_DURATION-page.json",
  "10L_PRIMARY_VET-page.json"
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
  showProgressBar: "bottom",
  pages
};

fs.writeFileSync(
  path.join(DATA_DIR, "master-survey.json"),
  JSON.stringify(masterSurvey, null, 2)
);
console.log("✅ Merged survey written to data/master-survey.json");