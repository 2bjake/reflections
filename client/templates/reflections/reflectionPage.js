
var colors = ['#E50016', '#E01C00', '#DC4D00', '#D87D00', '#D4AA00', '#C9CF00', '#97CB00', '#66C700', '#38C300', '#0CBF00'];

Template.reflectionPage.helpers({
  formattedDate: function() {
    return dateUtils.fromDbToDisplayFormat(this.date);
  },

  enjoyColor: function() {
    return colors[this.enjoy - 1];
  },

  effectiveColor: function() {
    return colors[this.effective - 1];
  }
});