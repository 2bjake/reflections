Meteor.publish('reflections', function() {
  return Reflections.find({userId: this.userId});
});

Meteor.publish('forms', function() {
  return Forms.find({});
});

