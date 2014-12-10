Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [ Meteor.subscribe('posts'), Meteor.subscribe('reflections')]; }
});

Router.route('/', {name: 'home'});

Router.route('/reflections', {name: 'reflectionsList'});

Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() { return Posts.findOne(this.params._id); }
});

Router.route('/p', {name: 'postsList'});

Router.route('/reflections/:_id', {
  name: 'reflectionPage',
  data: function() { return Reflections.findOne(this.params._id); }
});

Router.route('/reflections/:_id/edit', {
  name: 'reflectionEdit',
  data: function() { return Reflections.findOne(this.params._id); }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

var redirectIfLoggedIn = function() {
  if(Meteor.user()) {
    this.redirect('/reflections');
  } else {
    this.next();
  }
}

Router.route('/p/submit', {name: 'postSubmit'});
Router.route('/submit', {name: 'reflectionSubmit'});

Router.onBeforeAction(requireLogin, {except: 'home'});
Router.onBeforeAction('dataNotFound', {only: ['postPage', 'reflectionPage']});
Router.onBeforeAction(redirectIfLoggedIn, {only: ['home']});