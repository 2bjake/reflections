Template.reflectionsList.helpers({
  reflections: function() {
    return Reflections.find({userId: Meteor.userId()}, {sort: {date: -1}});
  },

  forms: function() {
    return Forms.find();
  },

  noToday: function(formId) {
    return ! Reflections.findOne({userId: Meteor.userId(), date: dateUtils.todayDbFormat(), formId: formId});
  }
});