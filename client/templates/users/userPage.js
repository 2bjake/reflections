Template.userPage.helpers({
  reflections: function() {
    return Reflections.find({userId: this._id}, {sort: {date: -1}});
  }
});