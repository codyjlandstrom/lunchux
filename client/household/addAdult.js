Template.addAdult.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.addAdult.events({
	'click .default-button': function(event){
		event.preventDefault();
		var adultFirstName = $('#adultFirstName').val();
		var adultLastName = $('#adultLastName').val();
		var type = "adult";
		// if (adultfirstName !== '' && lastName !== '') {
			var currentUser = Session.get('currentUser');
			var newFamilyMember = {};
			newFamilyMember.firstName = adultFirstName;
			newFamilyMember.lastName = adultLastName;
			newFamilyMember.type = type;
			Meteor.call('addFamilyMember', currentUser, newFamilyMember);
			Router.go('/householdMembers');
		// } else {
		// 	console.log('nope')
		// }
	}
})

Template.addAdult.helpers({
	'user': function() {
		return Meteor.user();
	}
})