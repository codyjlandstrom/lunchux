Template.students.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.students.events({
	'click .bottom-button': function(event){
		// event.preventDefault();
		var childStudent = $('.checkbox input').prop('checked', true);
		// if (adultfirstName !== '' && lastName !== '') {
			// var currentUser = Session.get('currentUser');
			// var newFamilyMember = {};
			// newFamilyMember.firstName = childFirstName;
			// Meteor.call('addFamilyMember', currentUser, newFamilyMember);
			// Router.go('/householdMembers');
		// } else {
		// 	console.log('nope')
		// }
	}
})

Template.students.helpers({
	// 'user': function() {
	// 	return Meteor.user();
	// },
	'familyMembers': function() {
		return Meteor.user().profile.familyMembers;
	}
})