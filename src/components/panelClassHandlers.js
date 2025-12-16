export function addCustomClasses(panel, htmlElement) {
    // Living Companion Details Panel and Subpanel
    if (panel.name === 'lvngCmpnDetailsPanel') {
      htmlElement.classList.add("lvng-cmpn-details-panel");
    }
    if (panel.name === 'lvngCmpnDetailsSubpanel1') {
      htmlElement.classList.add("lvng-cmpn-details-subpanel-1");
    }
    if (panel.name === 'lvngCmpnDetailsSubpanel2') {
      htmlElement.classList.add("lvng-cmpn-details-subpanel-2");
    }
    if (panel.name === 'lvngCmpnDetailsSubpanel3') {
      htmlElement.classList.add("lvng-cmpn-details-subpanel-3");
    }
    if (panel.name === 'lvngCmpnDetailsSubpanel4') {
      htmlElement.classList.add("lvng-cmpn-details-subpanel-4");
    }
    // Deceased cmpnanion Details Panel and Subpanel
    if (panel.name === 'dcsdCmpnDetailsPanel') {
      htmlElement.classList.add("dcsd-cmpn-details-panel");
    }
    if (panel.name === 'dcsdCmpnDetailsSubpanel1') {
      htmlElement.classList.add("dcsd-cmpn-details-subpanel-1");
    }
    if (panel.name === 'dcsdCmpnDetailsSubpanel2') {
      htmlElement.classList.add("dcsd-cmpn-details-subpanel-2");
    }
    if (panel.name === 'dcsdCmpnDetailsSubpanel3') {
      htmlElement.classList.add("dcsd-cmpn-details-subpanel-3");
    }
    if (panel.name === 'dcsdCmpnDetailsSubpanel4') {
      htmlElement.classList.add("dcsd-cmpn-details-subpanel-4");
    }



    // Add as many rules as you need here
}