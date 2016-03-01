Template.login.onRendered(function() {
	Session.set('currentUser', Meteor.user());
});

Template.login.events({
    // 'submit form': function(event){
    //     event.preventDefault();
    //     var email = $('[name=email]').val();
    //     var password = $('[name=password]').val();
    //     Meteor.loginWithPassword(email, password);
    //     Router.go('/signature');
    // },
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password
        });
    }
});