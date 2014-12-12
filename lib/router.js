Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return [Meteor.subscribe('reflections')]; }
});

Router.route('/', {name: 'home'});

Router.route('/reflections', {name: 'reflectionsList'});

Router.route('/reflections/:_id', {
  name: 'reflectionPage',
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

Router.route('/create', {name: 'reflectionCreate'});

Router.onBeforeAction(requireLogin, {except: 'home'});
Router.onBeforeAction('dataNotFound', {only: ['reflectionPage']});
Router.onBeforeAction(redirectIfLoggedIn, {only: ['home']});