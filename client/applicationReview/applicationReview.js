Template.applicationReview.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});


Template.applicationReview.helpers({
	'user': function() {
		return Meteor.user().profile;
	},
	'familyMembers': function() {
		return Meteor.user().profile.familyMembers;
	}
})