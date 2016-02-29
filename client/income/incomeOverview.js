Template.incomeOverview.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});


Template.incomeOverview.helpers({
	'user': function() {
		return Meteor.user();
	},
	'familyMembers': function() {
		return Meteor.user().profile.familyMembers;
	}
})