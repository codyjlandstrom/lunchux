Template.addChild.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.addChild.events({
	'click .default-button': function(event){
		event.preventDefault();
		var childFirstName = $('#childFirstName').val();
		var childMiddle = $('#childMiddle').val();
		var childLastName = $('#childLastName').val();
		var type = "child";
		// if (adultfirstName !== '' && lastName !== '') {
			var currentUser = Session.get('currentUser');
			var newFamilyMember = {};
			newFamilyMember.firstName = childFirstName;
			newFamilyMember.middle = childMiddle;
			newFamilyMember.lastName = childLastName;
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