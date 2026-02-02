// /helpers/panelDataName.js
export function attachPanelDataNameStamper(
  survey,
  { panelNames = [], map = {}, attr = "data-name" } = {}
) {
  if (!survey) return () => {};

  const whitelist = new Set(panelNames);

  const handler = (sender, options) => {
    const panel = options?.panel;
    const el = options?.htmlElement;
    if (!panel || !el) return;

    const panelName = panel.name;
    if (!panelName) return;

    if (whitelist.size > 0 && !whitelist.has(panelName)) return;

    const value = map[panelName] || panelName;

    // This is your CSS hook. Idempotent + stable.
    el.setAttribute(attr, value);

    // Optional neutral marker
    el.setAttribute("data-panel", "true");
  };

  survey.onAfterRenderPanel.add(handler);

  return () => {
    try { survey.onAfterRenderPanel.remove(handler); } catch {}
  };
}
