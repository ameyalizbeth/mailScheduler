const path = require('path');
const express = require('express')

const router = new express.Router();

const userController = require('../controllers/usercontroller');


router.post('/api/signin', userController.signup);
router.post('/api/login', userController.login);
router.post('/api/schedule', userController.schedule);
router.get('/api/:userEmail/homepage', userController.homepage);
router.get('/api/uniquemail/:id', userController.findbyemail);
router.get('/api/sendmails/:userEmail', userController.findbyemail);

module.exports = router