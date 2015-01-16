Template.reflectionSummary.helpers({
  formattedDate: function() {
    return dateUtils.fromDbToDisplayFormat(this.date);
  },

  formName: function() {
    return Forms.findOne(this.formId).name || "unknown";
  }
});