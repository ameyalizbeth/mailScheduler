const path = require('path');
const express = require('express')
const isAuth = require('../middleWare/isAuth');
const router = new express.Router();

const userController = require('../controllers/usercontroller');


router.post('/api/signin', userController.signup);
router.post('/api/login', userController.login);
router.post('/api/schedule',isAuth, userController.schedule);
router.get('/api/:userEmail/homepage',isAuth, userController.homepage);
router.get('/api/uniquemail/:id', isAuth,userController.findbyemail);
router.get('/api/sendmails/:userEmail', isAuth, userController.sendmails);
router.post('/api/sendone', isAuth, userController.sendnoschedule);
router.post('/api/delete', isAuth, userController.deletesceduled);

module.exports = router