Template.reflectionsList.helpers({
  reflections: function() {
    return Reflections.find({}, {sort: {date: -1}});
  },

  noToday: function() {
    return ! Reflections.findOne({date: dateUtils.todayDbFormat()});
  }
});