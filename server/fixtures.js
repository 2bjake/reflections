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
  // Jake
  Reflections.insert({
    date: "2014-12-09",
    title: "Day 3!",
    userId: "YPLCx9ZJLhtCpgM5C"
  });

  Reflections.insert({
    date: "2014-12-08",
    title: "Day 2",
    userId: "YPLCx9ZJLhtCpgM5C"
  });

  Reflections.insert({
    date: "2014-12-05",
    title: "My First Day!",
    userId: "YPLCx9ZJLhtCpgM5C"
   });

  // Kara
  Reflections.insert({
    date: "2014-12-25",
    title: "Christmas!",
    userId: "e7aiQzzdPFupEeJti"
   });
}