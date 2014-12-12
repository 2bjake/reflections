Template.reflectionSummary.helpers({
  formattedDate: function() {
    return dateUtils.fromDbToDisplayFormat(this.date);
  }
});