export function addCustomClasses(panel, htmlElement) {
    // Living Companion Details Panel and Subpanel
    if (panel.name === 'livCompDetailsPanel') {
      htmlElement.classList.add("liv-comp-details-panel");
    }
    if (panel.name === 'livCompDetailsSubpanel1') {
      htmlElement.classList.add("liv-comp-details-subpanel-1");
    }
    if (panel.name === 'livCompDetailsSubpanel2') {
      htmlElement.classList.add("liv-comp-details-subpanel-2");
    }
    if (panel.name === 'livCompDetailsSubpanel3') {
      htmlElement.classList.add("liv-comp-details-subpanel-3");
    }
    // Deceased Companion Details Panel and Subpanel
    if (panel.name === 'decCompDetailsPanel') {
      htmlElement.classList.add("dec-comp-details-panel");
    }
    if (panel.name === 'decCompDetailsSubpanel1') {
      htmlElement.classList.add("dec-comp-details-subpanel-1");
    }
    if (panel.name === 'decCompDetailsSubpanel2') {
      htmlElement.classList.add("dec-comp-details-subpanel-2");
    }
    if (panel.name === 'decCompDetailsSubpanel3') {
      htmlElement.classList.add("dec-comp-details-subpanel-3");
    }



    // Add as many rules as you need here
}