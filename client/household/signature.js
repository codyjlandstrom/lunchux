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
			currentUser.profile.firstName = firstName;
			currentUser.profile.lastName = lastName;
			currentUser.profile.date = date;
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
	},
	isCurrent: function (name) {
		return name === "current"
	}
})