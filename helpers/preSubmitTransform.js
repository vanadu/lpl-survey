import excludeConfig from "./excludeCalculatedValues.json";

/**
 * Transforms SurveyJS result JSON prior to submission
 * @param {object} surveyData - Raw SurveyJS data object
 * @returns {object} Transformed payload with metadata + cleaned data
 */
export function preSubmitTransform(surveyData) {
  if (!surveyData || typeof surveyData !== "object") {
    throw new Error("preSubmitTransform: invalid survey data");
  }

  const {
    UserInfoContactType,
    UserInfoContactTypeEmail,
    UserInfoContactTypeFacebook,
    UserInfoFirstName,
    CmpnName,
    completedAt,
    ...rest
  } = surveyData;

  /* -----------------------------
     Resolve contact identifier
     (used for filename only)
  ----------------------------- */
  const contact =
    UserInfoContactType === true
      ? UserInfoContactTypeFacebook
      : UserInfoContactTypeEmail || "unknown";

  /* -----------------------------
     Timestamp handling
  ----------------------------- */
  const completedDate = completedAt
    ? new Date(completedAt)
    : new Date();

  const pad = (n) => String(n).padStart(2, "0");

  const timestamp = `${completedDate.getFullYear()}${pad(
    completedDate.getMonth() + 1
  )}${pad(completedDate.getDate())}_${pad(
    completedDate.getHours()
  )}${pad(completedDate.getMinutes())}${pad(
    completedDate.getSeconds()
  )}`;

  /* -----------------------------
     Filename sanitization
  ----------------------------- */
  const sanitize = (value) =>
    String(value || "unknown")
      .trim()
      .replace(/\s+/g, "")
      .replace(/[^a-zA-Z0-9._-]/g, "_");

  const filename = `${timestamp}_${sanitize(contact)}_${sanitize(
    UserInfoFirstName
  )}_${sanitize(CmpnName)}.json`;

  /* -----------------------------
     Strip excluded calculated values
  ----------------------------- */
  const excludeKeys =
    excludeConfig?.excludeCalculatedValues || [];

  const cleanedData = Object.fromEntries(
    Object.entries(rest).filter(
      ([key]) => !excludeKeys.includes(key)
    )
  );

  /* -----------------------------
    Normalize contact info
    (stable schema: always write both fields, unselected = null)
  ----------------------------- */
  const contactType = Boolean(UserInfoContactType);

  cleanedData.UserInfoContactType = contactType;

  cleanedData.UserInfoContactTypeEmail =
    contactType === false && typeof UserInfoContactTypeEmail === "string"
      ? UserInfoContactTypeEmail
      : null;

  cleanedData.UserInfoContactTypeFacebook =
    contactType === true && typeof UserInfoContactTypeFacebook === "string"
      ? UserInfoContactTypeFacebook
      : null;

  console.log('cleanedData :>> ');
  console.log(cleanedData);


  /* -----------------------------
     Final payload
  ----------------------------- */
  return {
    metadata: {
      filename,
      completedAt: completedDate.toISOString(),
      surveyVersion: "Beta 2026.01.29.01",
    },
    data: cleanedData,
  };
}
