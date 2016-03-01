Template.incomeEntryUpdated.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});


Template.incomeEntryUpdated.helpers({
	'user': function() {
		return Meteor.user().profile;
	},
	'familyMembers': function() {
		return Meteor.user().profile.familyMembers;
	}
})