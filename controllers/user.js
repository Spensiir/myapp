let models = require("../models");
let bcrypt = require("bcrypt");
let flash = require("connect-flash");

const passport = require("passport");
const passport_setup = require("../passport_setup")(passport)


exports.show_login = function(req, res, next) {
	console.log('user.show_login is called');
	res.render('user/login', {formData: {}, errors: {} });
}

exports.show_signup = function(req, res, next) {
	console.log("user.show_signup is called");
	res.render('user/signup', {formData: {}, errors: {} });
}

const generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

exports.signup = function(req, res, next) {
	console.log(req.body.email);
	const newUser = models.User.build({
		email: req.body.email,
		password: generateHash(req.body.password)
	});
	return newUser.save().then(result => {
		passport.authenticate('local', {
			successRedirect: "/",
			failureRedirect: "/signup",
			failureFlash: true
		})(req, res, next);
	})
}

exports.login = function(req, res, next) {
	res.render("/");
}