Meteor.publish('reflections', function() {
  return Reflections.find({userId: this.userId});
});

Meteor.publish('othersReflections', function() {
  return Reflections.find({isPrivate: false});
});

Meteor.publish('forms', function() {
  return Forms.find({});
});

Meteor.publish('allusers', function() {
  return Meteor.users.find({}, {fields: {username: 1}});
});
