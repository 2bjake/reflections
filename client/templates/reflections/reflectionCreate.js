Template.reflectionCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var find = function(name) {
      return $(e.target).find('[name=' + name + ']').val();
    }

    var reflection = {
      date: dateUtils.fromDisplayToDbFormat(find('date')),
      formId: this._id
    };

    for(var i = 0; i < this.fields.length; i++) {
      var field = this.fields[i];
      reflection[field.id] = find(field.id);
    }

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