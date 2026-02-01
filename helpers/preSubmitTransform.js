import surveySchema from "./surveySchema.json";

/**
 * Transforms SurveyJS result JSON prior to submission
 * Enforces schema order and null-fills missing fields.
 *
 * @param {object} surveyData - Raw SurveyJS data object
 * @returns {object} Transformed payload with metadata + schema-aligned data
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
     Schema hydration
     (single source of truth)
  ----------------------------- */
  const data = Object.fromEntries(
    surveySchema.map((name) => [name, null])
  );

  /* -----------------------------
     Overlay actual survey values
  ----------------------------- */
  for (const [key, value] of Object.entries(rest)) {
    if (key in data) {
      data[key] = value;
    }
  }

  /* -----------------------------
     Normalize contact fields
     (written in schema position)
  ----------------------------- */
  const contactType = Boolean(UserInfoContactType);

  data.UserInfoContactType = contactType;

  data.UserInfoContactTypeEmail =
    contactType === false && typeof UserInfoContactTypeEmail === "string"
      ? UserInfoContactTypeEmail
      : null;

  data.UserInfoContactTypeFacebook =
    contactType === true && typeof UserInfoContactTypeFacebook === "string"
      ? UserInfoContactTypeFacebook
      : null;

  /* -----------------------------
     Final payload
  ----------------------------- */
  return {
    metadata: {
      filename,
      completedAt: completedDate.toISOString(),
      surveyVersion: "Beta 2026.02.01.01",
    },
    data,
  };
}
