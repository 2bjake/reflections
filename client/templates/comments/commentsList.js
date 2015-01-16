Template.commentsList.events({
  'submit form': function(e) {
    e.preventDefault();
    var textarea = $(e.target).find("#comment");
    var comment = textarea.val();
    if(comment.length > 0) {
      var args = {
        reflectionId: this._id,
        comment: comment,
        username: Meteor.user().username
      }
      Meteor.call('addComment', args, function(error, result) {
        if(error) {
          alert(error);
        } else {
          textarea.val('');
        }
      });
    }
  }
});

Template.commentsList.helpers({
  comments: function() {
    return this.comments || [];
  }
});