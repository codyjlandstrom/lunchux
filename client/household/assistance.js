Template.assistance.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.assistance.events({
	'click .bottom-button': function(event){
		event.preventDefault();
		var assistanceType = $('input[name=assistance-program]:checked', '#assistanceForm').val();
		// var lastName = $('#signatureLastName').val();
		// var date = $('#signatureDate').val();
		if (assistanceType !== 'true') {
			var currentUser = Session.get('currentUser');
			currentUser.profile.assistanceType = assistanceType;
			Meteor.call('updateUser', currentUser);
			Router.go('/householdMembers');
		} else {
			console.log('nope')
		}
	},
	'click .open-form': function(event){
		$('.hidden-form').css("display", "block");
	}
})

Template.assistance.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})