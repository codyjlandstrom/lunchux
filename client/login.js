Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Accounts.createUser({
            email: email,
            password: password,
            profile: {
            	firstName: '',
            	lastName: '',
            	date: ''
            }
        });
        Router.go('signature');
    }
});