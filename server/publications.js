Meteor.publish('reflections', function() {
  return Reflections.find({userId: this.userId});
});