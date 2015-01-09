Template.reflectionsList.helpers({
  reflections: function() {
    return Reflections.find({}, {sort: {date: -1}});
  },

  forms: function() {
    return Forms.find();
  },

  noToday: function(formId) {
    return ! Reflections.findOne({date: dateUtils.todayDbFormat(), formId: formId});
  }
});