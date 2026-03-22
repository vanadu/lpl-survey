// helpers/projectPaths.mjs
import path from "path";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "./i18nConfig.mjs";

export function getLocaleConfig(localeTag) {
  const locale = SUPPORTED_LOCALES.find((x) => x.tag === localeTag);
  if (!locale) {
    throw new Error(`Unsupported locale: ${localeTag}`);
  }
  return locale;
}

export function buildProjectPaths(localeTag = DEFAULT_LOCALE, rootDir = process.cwd()) {
  const locale = getLocaleConfig(localeTag);
  const defaultLocale = getLocaleConfig(DEFAULT_LOCALE);

  const dataDir = path.join(rootDir, "data");
  const localesDir = path.join(rootDir, "locales");

  return {
    localeTag: locale.tag,
    localeFolder: locale.folder,
    defaultLocaleTag: defaultLocale.tag,
    defaultLocaleFolder: defaultLocale.folder,

    rootDir,
    dataDir,
    localesDir,

    // --------------------------------------------------
    // SurveyJS content
    // --------------------------------------------------

    pageContentDir: path.join(dataDir, "page-content", locale.folder),
    calculatedValuesPath: path.join(
      dataDir,
      "page-content",
      locale.folder,
      "calculatedValues.json"
    ),

    masterSurveyDir: path.join(dataDir, "master-survey", locale.folder),
    masterSurveyPath: path.join(
      dataDir,
      "master-survey",
      locale.folder,
      "master-survey.json"
    ),

    registryDir: path.join(dataDir, "registry", locale.folder),
    registryPath: path.join(
      dataDir,
      "registry",
      locale.folder,
      "registry.generated.json"
    ),

    browsePagesDir: path.join(rootDir, "pages", "browse-mode", locale.folder),

    // --------------------------------------------------
    // Survey bilingual companion files
    // --------------------------------------------------

    // Survey bilingual companion files live in target locale folder
    surveyBilingualDir: path.join(dataDir, "page-content", locale.folder),

    // JSX / site-content bilingual workspace lives in target locale folder
    siteLocaleRootDir: path.join(localesDir, locale.folder),
    siteLocalePath: path.join(localesDir, locale.folder, "site.json"),
    siteBilingualPath: path.join(localesDir, locale.folder, "site-i18n.json"),

    // --------------------------------------------------
    // JSX / site-content source
    // --------------------------------------------------

    pagesDir: path.join(rootDir, "pages"),
    componentsDir: path.join(rootDir, "components"),
    srcDir: path.join(rootDir, "src"),

    siteSourceDirs: [
      path.join(rootDir, "pages"),
      path.join(rootDir, "components"),
      path.join(rootDir, "src"),
    ],

    // --------------------------------------------------
    // Runtime locale dictionaries for site JSX
    // --------------------------------------------------

    siteLocaleRootDir: path.join(localesDir, locale.folder),
    siteLocalePath: path.join(localesDir, locale.folder, "site.json"),

    defaultSiteLocaleRootDir: path.join(localesDir, defaultLocale.folder),
    defaultSiteLocalePath: path.join(localesDir, defaultLocale.folder, "site.json"),
  };
}

// --------------------------------------------------
// Debug helper: print all resolved paths
// --------------------------------------------------

export function logProjectPaths(paths) {
  if (!paths || typeof paths !== "object") {
    console.error("logProjectPaths: invalid paths object");
    return;
  }

  console.log("\n📦 Project Paths");
  console.log("--------------------------------------------------");

  Object.entries(paths).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      console.log(`${key.padEnd(28)}:`);
      value.forEach((item) => console.log(`${"".padEnd(30)}${item}`));
    } else {
      console.log(`${key.padEnd(28)}: ${value}`);
    }
  });

  console.log("--------------------------------------------------\n");
}

// --------------------------------------------------
// CLI test mode
//   node helpers/projectPaths.mjs
//   node helpers/projectPaths.mjs --lang de-DE
// --------------------------------------------------

if (process.argv[1] && process.argv[1].includes("projectPaths.mjs")) {
  const langArgIndex = process.argv.indexOf("--lang");
  const lang =
    langArgIndex !== -1 && process.argv[langArgIndex + 1]
      ? process.argv[langArgIndex + 1]
      : DEFAULT_LOCALE;

  try {
    const paths = buildProjectPaths(lang);
    logProjectPaths(paths);
  } catch (err) {
    console.error("❌ Failed to build project paths:", err.message);
  }
}