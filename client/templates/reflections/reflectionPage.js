Template.reflectionPage.helpers({
  formattedDate: function() {
    return dateUtils.fromDbToDisplayFormat(this.date);
  },

  formTitle: function() {
    return Forms.findOne(this.formId).name || "unknown";
  },

  formValues: function() {
    var form = Forms.findOne(this.formId);
    var fields = form.fields;
    values = [];
    for(var i = 0; i < fields.length; i++) {
      var fieldId = fields[i].id;
      var fieldLabel = fields[i].label;
      var value = this[fieldId];
      if(value != undefined) {
        values.push({label: fieldLabel, value: value});
      }
    }
    return values;
  }
});