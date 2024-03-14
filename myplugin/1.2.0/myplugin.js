InteractionTypeImpl = InteractionType.extend({

  // Called every time a new interaction of this type is created.
  init: function(interactionContext) {
    // Store the parameters for later use.
    this.interactionContext = interactionContext;	
  },

  // Called right after the interactions are initialized.
  getContent: function() {
    const vehicleMake = dataLayer?.find(obj => obj.event === 'page-metadata-ready')?.make;
    const vehicleModel = dataLayer?.find(obj => obj.event === 'page-metadata-ready')?.productFamilyShortName;

    return '<div style="color: green; font-weight: bold;">Make: ' + vehicleMake + ' | Model: ' + vehicleModel +'</div>';
  },

  // Called when an interaction based on this type is executed.
  onLoad: function() {
    if (typeof this.interactionContext !== 'undefined' && this.interactionContext !== null) {
      // Get the DOM element indicated by the position of the dialogue. 
      var element = this.interactionContext.getDOMElement();

      if (element) {
        element.innerHTML = this.getContent();
      }
    }
  }
});
