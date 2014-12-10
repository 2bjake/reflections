Template.reflectionCreate.events({
	'submit form': function(e) {
		e.preventDefault();

		var reflection = {
			date: new Date($(e.target).find('[name=date]').val()),
			title: $(e.target).find('[name=title]').val()
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
		return new Date().toDateString();
	}
});