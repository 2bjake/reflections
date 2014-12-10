Template.reflectionsList.helpers({
  reflections: function() {
    return Reflections.find({}, {sort: {date: -1}});
  },

  today: function() {
    return dateUtils.todayDisplayFormat();
  },

  noToday: function() {
    return ! Reflections.findOne({date: dateUtils.todayDbFormat()});
  }
});