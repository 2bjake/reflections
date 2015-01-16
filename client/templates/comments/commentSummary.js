Template.commentSummary.helpers({
  formattedDate: function() {
    return moment(this.submitted).fromNow();
  }
});