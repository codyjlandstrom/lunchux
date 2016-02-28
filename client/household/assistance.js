Template.assistance.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.assistance.events({
	'click .bottom-button': function(event){
		event.preventDefault();
		var assistanceType = $('input[name=assistance-program]:checked', '#assistanceForm').val()
		// var lastName = $('#signatureLastName').val();
		// var date = $('#signatureDate').val();
		// if (firstName !== '' && lastName !== '' && date !== '') {
			var currentUser = Session.get('currentUser');
			currentUser.assistanceType = assistanceType;
			Meteor.call('updateUser', currentUser);
			// Router.go('/intro1');
		// } else {
		// 	console.log('nope')
		// }
	}
})

Template.signature.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})