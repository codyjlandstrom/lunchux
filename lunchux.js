// Example Schema below!

// Users = new Mongo.Collection('users');

// Schema = {};

// Schema.UserPersonRace = new SimpleSchema({
// 	race: {
// 		type: [String],
// 		optional: true
// 	}
// })

// Schema.UserPerson = new SimpleSchema({
// 	firstName: {
// 		type: String
// 	},
// 	middleInitial: {
// 		type: String,
// 		optional: true,
// 		regEx: /^[A-Z]{1}$/
// 	},
// 	lastName: {
// 		type: String
// 	},
// 	type: {
// 		type: String,
// 		allowedValues: ['Adult', 'Child'],
// 	},
// 	isStudent: {
// 		type: Boolean
// 	},
// 	isFoster: {
// 		type: Boolean,
// 		optional: true
// 	},
// 	isMigrant: {
// 		type: Boolean,
// 		optional: true
// 	},
// 	isRunaway: {
// 		type: Boolean,
// 		optional: true
// 	},
// 	isHomeless: {
// 		type: Boolean,
// 		optional: true
// 	},
// 	isHeadstart: {
// 		type: Boolean,
// 		optional: true
// 	},
// 	SSN: {
// 		type: String,
// 		optional: true
// 	},
// 	streetAddress1: {
// 		type: String,
// 		optional: true
// 	},
// 	streetAddress2: {
// 		type: String,
// 		optional: true
// 	},
// 	zipcode: {
// 		type: Number,
// 		optional: true,
// 	},
// 	ethnicity: {
// 		type: String,
// 		allowedValues: ['Hispanic or Latino', 'Not Hispanic or Latino'],
// 		optional: true;
// 	}

// });

// Schema.User = new SimpleSchema({
// 	person: {
// 		type: [Schema.UserPerson]
// 	}
// })

if (Meteor.isClient) {
  // async loader for fonts
  // https://github.com/typekit/webfontloader

  Meteor.startup(function() {

    WebFontConfig = {
      google: { families: [ 'Lato:400,700' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
      // console.log("async fonts loaded", WebFontConfig);
    })();

  })
}


// Meteor.users.attachSchema(Schema.User);
// if (Meteor.isClient) {
      // Ideally this would be run from client. Meteor not allowing this for some reason. Needs further troubleshooting.

  Meteor.methods({
  	'updateUser': function(user) {
  		var profile = user.profile;
  		var familyMembers = user.familyMembers;
		Meteor.users.update(Meteor.userId(), {$set: {
			"profile.firstName": profile.firstName,
			"profile.lastName": profile.lastName,
			"profile.date" : profile.date,
			"profile.assistanceType" : profile.assistanceType,
      "profile.hasSSN" : profile.hasSSN,
      "profile.SSN" : profile.SSN, // Must be hashed for Security
      "profile.hasAddress" : profile.hasAddress,
      "profile.streetAddress1" : profile.streetAddress1,
      "profile.streetAddress2" : profile.streetAddress2,
      "profile.city" : profile.city,
      "profile.state" : profile.state,
      "profile.zipcode" : profile.zipcode,
      "profile.isHispanic" : profile.isHispanic,
      "profile.raceSelected" : profile.raceSelected, // Returns Array
      "profile.wageFrequency" : profile.wageFrequency,
      "profile.wageAmount" : profile.wageAmount,
		}});
		console.log("user updated");
  	},
  	'addFamilyMember': function(user, newFamilyMember) {
      console.log("existing fam members: ");
      console.log(user.profile.familyMembers);
  		var familyMembers = user.profile.familyMembers ? user.profile.familyMembers : [];
  		familyMembers.push(newFamilyMember);
		Meteor.users.update(Meteor.userId(), {$set: {
			"profile.familyMembers": familyMembers
		}});
		console.log("user updated");
  	}  	
  });
// }

// Users = new Mongo.Collection('users');

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
  // Meteor.methods({
  // 	'updateUser': function(user) {
  // 		console.log()
  // 		console.log("update user called on server with user: ")
  // 		console.log(user.firstName)
  // 		console.log(user._id)

  // 		// Meteor.users.update(this.userId, {$set: {
	 //  	// 	"firstName": user.firstName,
	 //  	// 	"lastName": user.lastName,
	 //  	// 	"date": user.date
  // 		// }});
  // 		var usr = Meteor.users.findOne({"_id": this.userId});
  // 		console.log(usr);
  // 	}

  // })

//   Meteor.publish("userData", function () {
//   if (this.userId) {
//     return Meteor.users.find({_id: this.userId},
//                              {fields: {'other': 1, 'things': 1}});
//   } else {
//     this.ready();
//   }
// });


}



Router.route('/', function () {
  this.render('home');
});
Router.route("/signature");
Router.route('/intro1');
Router.route('/intro2');
Router.route('/assistance');
Router.route('/addChild');
Router.route('/addAdult');
Router.route('/householdMembers');
Router.route('/students');
Router.route('/status');
Router.route('/incomeIntro');
Router.route('/incomeEntry');
Router.route('/incomeEntryUpdated');
Router.route('/addWages');
Router.route('/wageAmount');
Router.route('/incomeOverview');
Router.route('/contactIntro');
Router.route('/ssn');
Router.route('/hasAddress');
Router.route('/address');
Router.route('/ethnicity');
Router.route('/applicationReview');
Router.route('/success');
