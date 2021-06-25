const path = require('path');
const express = require('express')

const router = new express.Router();

const userController = require('../controllers/usercontroller');


router.post('/api/signin', userController.signup);
router.post('/api/login', userController.login);

module.exports = router