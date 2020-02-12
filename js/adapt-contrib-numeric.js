define(function (require) {

  var ComponentView = require('coreViews/componentView');
  var Adapt = require('coreJS/adapt');

  var NumericField = ComponentView.extend({
    events: {
      'change': 'updatedNumericField',
      'change input': 'saveValue'
    },
    postRender: function () {
      this.setReadyStatus();
    },

    updatedNumericField: function (event) {
      this.setCompletionStatus();
      Adapt.trigger('numeric:changed', event);
    },
    saveValue: function (event) {
      this.model.set("_value", event.currentTarget.value);
    }
  },
    {
      template: 'numeric'
    });

  Adapt.register('numeric', NumericField);

  return NumericField;
});
