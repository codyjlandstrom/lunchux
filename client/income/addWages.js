Template.addWages.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

// Template.addWages.events({
// 	'click .default-button': function(event){
// 		event.preventDefault();
// 		var adultFirstName = $('#adultFirstName').val();
// 		var adultLastName = $('#adultLastName').val();
// 		var type = "adult";
// 		// if (adultfirstName !== '' && lastName !== '') {
// 			var currentUser = Session.get('currentUser');
// 			var newFamilyMember = {};
// 			newFamilyMember.firstName = adultFirstName;
// 			newFamilyMember.lastName = adultLastName;
// 			newFamilyMember.type = type;
// 			console.log("new family member on client: ");
// 			console.log(newFamilyMember);
// 			Meteor.call('addFamilyMember', currentUser, newFamilyMember);
// 			Router.go('/householdMembers');
// 		// } else {
// 		// 	console.log('nope')
// 		// }
// 	}
// })

Template.addWages.helpers({
	'user': function() {
		return Meteor.user();
	},
	'familyMembers': function() {
		return Meteor.user().profile.familyMembers;
	}
})