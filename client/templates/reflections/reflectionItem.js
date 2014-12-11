Template.reflectionItem.helpers({
  formattedDate: function() {
    return dateUtils.fromDbToDisplayFormat(this.date);
  }
});