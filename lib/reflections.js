Reflections = new Mongo.Collection('reflections');

Meteor.methods({
  reflectionInsert: function(reflectionAttributes) {
    check(Meteor.userId(), String);
    check(reflectionAttributes, {
      title: String,
      date: Date
    });

    var user = Meteor.user();
    var reflectionWithSameDate = Reflections.findOne({date: reflectionAttributes.date, userId: user._id});

    if (reflectionWithSameDate) {
      return {
        reflectionExists: true,
        _id: reflectionWithSameDate._id
      }
    }
    
    var reflection = _.extend(reflectionAttributes, {
      userId: user._id, 
      author: user.username, 
      submitted: new Date()
    });
    var reflectionId = Reflections.insert(reflection);
    return {
      _id: reflectionId
    };
  }
});
