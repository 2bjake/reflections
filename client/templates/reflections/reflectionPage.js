Template.reflectionPage.helpers({
  formattedDate: function() {
    return dateUtils.fromDbToDisplayFormat(this.date);
  }
});