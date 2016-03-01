Template.header.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.header.events({
	// $('a.back').click(function(){
	// 	parent.history.back();
	// 	return false;
	// });
	'click a.back': function(){
		parent.history.back();
		return false;
	},
	// 'click .bottom-button': function(event){
	// 	event.preventDefault();
	// 	var streetAddress1 = $('#contactStreetAddress1').val();
	// 	var streetAddress2 = $('#contactStreetAddress2').val();
	// 	var city = $('#contactCity').val();
	// 	var state = $('#contactState').val();
	// 	var zipcode = $('#contactZipcode').val();
	// 	// if (streetAddress1 !== '' && city !== '' && date !== '') {
	// 		var currentUser = Session.get('currentUser');
	// 		var profile = currentUser.profile;
	// 		profile.streetAddress1 = streetAddress1;
	// 		profile.streetAddress2 = streetAddress2;
	// 		profile.city = city;
	// 		profile.state = state;
	// 		profile.zipcode = zipcode;
	// 		Meteor.call('updateUser', currentUser);
	// 		Router.go('/ethnicity');
	// 	// } else {
	// 	// 	console.log('nope')
	// 	// }
	// }
})

Template.header.helpers({
	'user': function() {
		return Meteor.user().profile;
	}
})