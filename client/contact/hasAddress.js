Template.hasAddress.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.hasAddress.events({
	'click .bottom-button': function(event){
		event.preventDefault();
		var hasAddress = $('input[name=has-address]:checked', '#hasAddressForm').val();
		if (hasAddress !== 'true') {
			var currentUser = Session.get('currentUser');
			var profile = currentUser.profile;
			profile.hasAddress = hasAddress;
			Meteor.call('updateUser', currentUser);
			if (hasAddress == 'No') {
				Router.go('/ethnicity');
			} else {
				Router.go('/address');
			}
		} else {
			console.log('nope')
		}
	}
})


Template.hasAddress.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})