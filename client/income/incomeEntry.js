Template.incomeEntry.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});


Template.incomeEntry.helpers({
	'user': function() {
		return Meteor.user().profile;
	},
	'familyMembers': function() {
		return Meteor.user().profile.familyMembers;
	}
})