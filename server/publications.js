Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('reflections', function() {
  return Reflections.find({userId: this.userId});
});