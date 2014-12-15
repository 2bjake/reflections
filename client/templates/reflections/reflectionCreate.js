var accomplishmentId = 0;

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
			journal: find('journal')
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
	},

	'click #addAccomplishment': function(e) {
		e.preventDefault();
		$("#accomplishmentList")
			.append('<div class="input-append"><input type="text" name="accomplishment" class="form-control"><button class="btn btn-danger deleteAccomplishment">-</button></div>');
	},

	'click .deleteAccomplishment': function(e) {
		e.preventDefault();
		$(e.target).parent("div").remove();
	}
});

Template.reflectionCreate.helpers({
	today: function() {
		return dateUtils.todayDisplayFormat();
	}
});