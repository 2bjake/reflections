Template.reflectionsList.helpers({
  reflections: function() {
    return Reflections.find({}, {sort: {date: -1}});
  }
});