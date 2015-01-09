Template.reflectionCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var find = function(name) {
      return $(e.target).find('[name=' + name + ']').val();
    }

    var reflection = {
      date: dateUtils.fromDisplayToDbFormat(find('date')),
      title: find('title'),
      accomplishments: find('accomplishments'),
      todos: find('todos'),
      enjoy: parseInt(find('enjoy')) || null,
      effective: parseInt(find('effective')) || null,
      journal: find('journal'),
      formId: this._id
    };

    Meteor.call('reflectionInsert', reflection, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
      // show this result but route anyway
      if (result.reflectionExists) //TODO: this bad, any added info is lost.  Instead the date should be checked when edited
        alert('A reflection for this date has already been posted');

      Router.go('reflectionPage', {
        _id: result._id
      });
    });
  }
});

Template.reflectionCreate.helpers({
  today: function() {
    return dateUtils.todayDisplayFormat();
  },

  formData: function() {
    return this;
  }
});