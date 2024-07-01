const router = require('express').Router();
const { getSingleUser } = require('../controller/user');
const { register, login } = require('../controller/auth');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
