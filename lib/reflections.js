Reflections = new Mongo.Collection('reflections');

Meteor.methods({
  reflectionInsert: function(reflectionAttributes) {
    var checkObject = {
      date: Match.Where(dateUtils.isValidDbFormat),
      formId: String, //TODO: confirm that formId matches a form in the collection
    };

    var formData = Forms.findOne(reflectionAttributes.formId);    
    for(var i = 0; i < formData.fields.length; i++) {
      var field = formData.fields[i];
      checkObject[field.id] = field.checkExp ? eval(field.checkExp) : Match.Any;
    }

    check(reflectionAttributes, checkObject);

    var user = Meteor.user();
    var reflectionWithSameDate = Reflections.findOne({
      date: reflectionAttributes.date,
      userId: user._id,
      formId: reflectionAttributes.formId
    });

    if (reflectionWithSameDate) {
      return {
        reflectionExists: true,
        _id: reflectionWithSameDate._id
      }
    }

    var reflection = _.extend(reflectionAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date(),
      isPrivate: formData.isPrivate
    });
    var reflectionId = Reflections.insert(reflection);
    return {
      _id: reflectionId
    };
  },

  addComment: function(params) {
    //TODO: add checks
    var commentEntry = {
      username: Meteor.user().username,
      comment: params.comment,
      submitted: new Date()
    };
    
    Reflections.update({_id: params.reflectionId}, {$push: {comments: commentEntry}});
  }
});