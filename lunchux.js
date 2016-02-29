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

// Meteor.users.attachSchema(Schema.User);
// if (Meteor.isClient) {
  Meteor.methods({
  	'updateUser': function(user) {
  		var profile = user.profile;
  		var familyMembers = user.familyMembers;
		Meteor.users.update(Meteor.userId(), {$set: {
			"profile.firstName": profile.firstName,
			"profile.lastName": profile.lastName,
			"profile.date" : profile.date,
			"profile.assistanceType" : profile.assistanceType,
		}});
		console.log("user updated");
  	},
  	'addFamilyMember': function(user, newFamilyMember) {
  		var familyMembers = user.familyMembers ? user.familyMembers : [];
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

// Router.route('/signature', function() {
// 	console.log("/signature page loaded");
// 	this.render("/signature");
// 	.post(function () {
//     this.response.end('post request\n');
//   });
// });

// Router.route('/signature', {where: 'server'})
//   .get(function () {
//    this.render("/signature");
//   })
//   .post(function () {
//   	console.log("post request recieved")
//     this.response.end('post request\n');
//   });

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
Router.route('/incomeOverview');
