const express = require('express');
const { getUsers, getProfile } = require('../controllers/userController');
const expressRouter = express.Router();


expressRouter.get('/',getUsers)

expressRouter.get('/profile',getProfile)

module.exports = expressRouter;