var express = require('express');
var router = express.Router();

let user = require('../controllers/user.js');
/* GET users listing. */
router.get('/login', user.show_login);
router.get('/signup', user.show_signup)

module.exports = router;
