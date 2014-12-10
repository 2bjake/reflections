if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com'
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com'
  });
}

if (Reflections.find().count() === 0) {
  Reflections.insert({
    date: new Date("12-09-2014"),
    title: "Day 3!"
  });

  Reflections.insert({
    date: new Date("12-08-2014"),
    title: "Day 2"
  });

  Reflections.insert({
    date: new Date("12-05-2014"),
    title: "My First Day!"
   });
}