Template.header.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.header.events({
	'click a.back': function(){
		parent.history.back();
		return false;
	},
})

Template.header.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})