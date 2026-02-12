// /helpers/panelDataName.js
export function getPanelNamesFromRegistry(registry) {
  const elements = registry?.elements;
  if (!elements || typeof elements !== "object") return [];

  // "All panel names" in practice usually means:
  // - role === "panel" (your registry uses this)
  // - OR type starts with "panel" (covers paneldynamic, etc., if you ever include those)
  const names = [];

  for (const key of Object.keys(elements)) {
    const el = elements[key];
    if (!el) continue;

    const role = el.role;
    const type = el.type;

    const isPanelRole = role === "panel";
    const isPanelType =
      typeof type === "string" && type.toLowerCase().startsWith("panel");

    if ((isPanelRole || isPanelType) && el.name) {
      names.push(el.name);
    }
  }

  return names;
}

export function attachPanelDataNameStamper(
  survey,
  {
    // NEW: pass registry.generated.json and we’ll auto-build the list
    registry = null,

    // Existing options still supported
    panelNames = [],
    map = {},
    attr = "data-name",
  } = {}
) {
  if (!survey) return () => {};

  const resolvedPanelNames =
    panelNames?.length > 0 ? panelNames : getPanelNamesFromRegistry(registry);

  const whitelist = new Set(resolvedPanelNames);

  const handler = (sender, options) => {
    const panel = options?.panel;
    const el = options?.htmlElement;
    if (!panel || !el) return;

    const panelName = panel.name;
    if (!panelName) return;

    // If whitelist is non-empty, enforce it.
    // (If for some reason the registry is missing, whitelist may be empty; then we stamp all panels.)
    if (whitelist.size > 0 && !whitelist.has(panelName)) return;

    const value = map[panelName] || panelName;

    // CSS hook. Idempotent + stable.
    el.setAttribute(attr, value);

    // Optional neutral marker
    el.setAttribute("data-panel", "true");
  };

  survey.onAfterRenderPanel.add(handler);

  return () => {
    try {
      survey.onAfterRenderPanel.remove(handler);
    } catch {}
  };
}
