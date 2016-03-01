Template.ssn.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.ssn.events({
	'click .bottom-button': function(event){
		event.preventDefault();
		var hasSSN = $('input[name=has-ssn]:checked', '#ssnForm').val();
		var SSN = $('#SSN').val(); // Needs to be hased for security
		if (hasSSN !== 'true') {
			var currentUser = Session.get('currentUser');
			var profile = currentUser.profile;
			profile.hasSSN = hasSSN;
			profile.SSN = SSN;
			Meteor.call('updateUser', currentUser);
			Router.go('/hasAddress');
		} else {
			console.log('nope')
		}
	},
	'click .open-form': function(event){
		$('.hidden-form').css("display", "block");
	}
})


Template.ssn.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})