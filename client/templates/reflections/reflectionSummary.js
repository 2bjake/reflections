Template.reflectionSummary.helpers({
  formattedDate: function() {
    return dateUtils.fromDbToDisplayFormat(this.date);
  },

  formName: function() {
    return Forms.findOne(this.formId).name || "unknown";
  },

  summaryFields: function() {
    var retval = [];
    var form = Forms.findOne(this.formId);
    for(var i = 0; i < form.fields.length; i++) {
      var field = form.fields[i];
      if(field.onSummary) {
        retval.push({label:field.label, value: this[field.id]});
      }
    }
    return retval;
  }
});