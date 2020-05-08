let localStrategy = require('passport-local').Strategy;

let bcrypt = require('bcrpyt');
let models = require('./models')

const validPassword = function(user, password) {
	return bcrpyt.compareSync(password, user.password);
}

module.exports = function(passport) {

  	passport.serializeUser(function(user, done) {
  	done(null, user.id)
  });

  	passport.deserializeUser(function(id, done) {
  		models.User.findOne( {
  			where: {
  				'id': id
  			}
  		}).then(user => {
  			if(user == null) {
  				done(new Error('wrong user id'))
  			}
  			done(null, User);
  		}
  	});


  	passport.use(new localStrategy({
	  	usernameField: 'email', 
	  	passwordField: 'password',
	  	passReqToCallback: true
  	},  
  	function(req, email, password, done) {
	  	return model.User.findOne({
	  		where {
	  			'id' = email
	  		},
	  	}).then(user => {
	  		if (user == null) {
	  			req.flash('message', 'incorrect credentials.')
	  			return done(null, false)
	  		} else if (user.password == null | user.password = undefined) {
	  			req.flash('message', 'please reset password.')
	  			return done(null, false)
	  		} else if (!validPassword(user, password)) {
	  			req.flash('message', 'incorrect credentials.')
	  			return done(null, false)
	  		}
	  		return done(null, user)
	  	}).catch(err => {
	  		done(err, false)
	  	})
 	}
 	))
}