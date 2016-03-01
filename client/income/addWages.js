Template.addWages.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.addWages.events({
	'click .default-button': function(event){
		event.preventDefault();
		var wageFrequency = $('input[name=add-wages-form]:checked', '#addWagesForm').val();
		if (wageFrequency !== 'true') {
			var currentUser = Session.get('currentUser');
			currentUser.profile.wageFrequency = wageFrequency;
			Meteor.call('updateUser', currentUser);
			Router.go('/wageAmount');
		} else {
			console.log('nope')
		}
	},
})

Template.addWages.helpers({
	'user': function() {
		return Meteor.user();
	},
	'familyMembers': function() {
		return Meteor.user().profile.familyMembers;
	}
})