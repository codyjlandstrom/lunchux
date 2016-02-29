Template.ethnicity.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.ethnicity.events({
	'click .bottom-button': function(event){
		event.preventDefault();
		var isHispanic = $('input[name=is-hispanic]:checked', '#isHispanicForm').val();
		var raceSelected = $('input:checkbox:checked').map(function(){return $(this).val();}).get();
		// if (streetAddress1 !== '' && city !== '' && date !== '') {
			var currentUser = Session.get('currentUser');
			var profile = currentUser.profile;
			profile.isHispanic = isHispanic;
			profile.raceSelected = raceSelected;
			Meteor.call('updateUser', currentUser);
			Router.go('/applicationReview');
		// } else {
		// 	console.log('nope')
		// }
	}
})

Template.ethnicity.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})