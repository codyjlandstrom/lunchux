Template.householdMembers.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.householdMembers.helpers({
	'user': function() {
		return Meteor.user().profile;
	},
	'familyMembers': function() {
		return Meteor.user().profile.familyMembers;
	}
})