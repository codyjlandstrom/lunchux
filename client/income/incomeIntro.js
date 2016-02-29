Template.incomeIntro.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.incomeIntro.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})