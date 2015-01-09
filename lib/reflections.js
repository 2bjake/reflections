Reflections = new Mongo.Collection('reflections');

Meteor.methods({
  reflectionInsert: function(reflectionAttributes) {
    check(Meteor.userId(), String);

    check(reflectionAttributes.date, Match.Where(dateUtils.isValidDbFormat));

    check(reflectionAttributes.formId, String); //TODO: confirm that formId matches a form in the collection

    var formData = Forms.findOne(reflectionAttributes.formId);
    for(var i = 0; i < formData.fields.length; i++) {
      var field = formData.fields[i];
      if(field.check) {
        check(reflectionAttributes[field.id], eval(field.check));
      }
    }

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
      submitted: new Date()
    });
    var reflectionId = Reflections.insert(reflection);
    return {
      _id: reflectionId
    };
  }
});