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

const pages = pageFiles.map(filename =>
  JSON.parse(fs.readFileSync(path.join(DATA_DIR, filename), "utf8"))
);

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