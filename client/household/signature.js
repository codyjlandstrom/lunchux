Template.signature.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.signature.events({
	'click .bottom-button': function(event){
		event.preventDefault();
		var firstName = $('#signatureFirstName').val();
		var lastName = $('#signatureLastName').val();
		var date = $('#signatureDate').val();		
		if (firstName !== '' && lastName !== '' && date !== '') {
			var currentUser = Session.get('currentUser');
			var profile = currentUser.profile;
			profile.firstName = firstName;
			profile.lastName = lastName;
			profile.date = date;
			Meteor.call('updateUser', currentUser);
			Router.go('/intro1');
		} else {
			console.log('nope')
		}
	}
})

Template.signature.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})