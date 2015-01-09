Template.reflectionCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var elementValue = function(name, formElement) {
      var str = '[name=' + name + ']';
      if(formElement === "radios") {
        str += ':checked';
      }
      return $(e.target).find(str).val();
    }

    var reflection = {
      date: dateUtils.fromDisplayToDbFormat(elementValue('date')),
      formId: this._id
    };

    for(var i = 0; i < this.fields.length; i++) {
      var field = this.fields[i];
      reflection[field.id] = elementValue(field.id, field.formElement);
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