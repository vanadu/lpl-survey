const fs = require("fs");
const path = require("path");
const DATA_DIR = path.join(__dirname, "../data");

const pageFiles = [
  "lndgRoot-page.json",
  "lvngRoot-page.json",
  "lvngCmpn-page.json",
  "lvngInfo-page.json",
  "dcsdRoot-page.json"
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