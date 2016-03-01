Template.desktopBack.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.desktopBack.events({
	'click a.desktopBack': function(){
		parent.history.back();
		return false;
	},
})

Template.desktopBack.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})