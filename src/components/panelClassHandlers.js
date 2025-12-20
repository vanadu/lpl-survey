export function addCustomClasses(panel, htmlElement) {
    // lvngCmpn Details Panel and Subpanel
    if (panel.name === 'lndgCmpnDetailsPanel') {
      htmlElement.classList.add("lndg-cmpn-details-panel");
    }
    if (panel.name === 'lvngCmpnDetailsPanel') {
      htmlElement.classList.add("lvng-cmpn-details-panel");
    }
    if (panel.name === 'lvngCmpnDetailsAnimalType') {
      htmlElement.classList.add("srvy-flex-row");
    }
    if (panel.name === 'lvngCmpnDetailsBreedGender') {
      htmlElement.classList.add("srvy-flex-row");
    }
    if (panel.name === 'lvngCmpnDetailsAge') {
      htmlElement.classList.add("srvy-flex-row");
    }
    if (panel.name === 'lvngCmpnDetailsWeight') {
      htmlElement.classList.add("srvy-flex-row");
    }
    if (panel.name === 'lvngCmpnDetailsAge') {
      htmlElement.classList.add("srvy-flex-row");
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