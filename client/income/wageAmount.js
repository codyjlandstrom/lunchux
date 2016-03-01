Template.wageAmount.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.wageAmount.events({
	'click .default-button': function(event){
		event.preventDefault();
		var wageAmount = $('#wageAmount').val();
		if (wageAmount !== '' ) {
			var currentUser = Session.get('currentUser');
			var profile = currentUser.profile;
			profile.wageAmount = wageAmount;
			Meteor.call('updateUser', currentUser);
			Router.go('/incomeEntryUpdated');
		} else {
			console.log('nope')
		}
	}
})

Template.wageAmount.helpers({
	'user': function() {
		return Meteor.user().profile;
	},
	isCurrent: function (name) {
		return name === "current"
	}
})