
exports.show_login = function(req, res, next) {
	res.render('user/login', {formData: {}, errors: {} });
}

exports.show_signup = function(req, res, next) {
	console.log("show_signup is called");
	res.render('user/signup', {formData: {}, errors: {} });
}

// exports.signup = function(res, req, next) {
// 	res.render('../leads');
// }