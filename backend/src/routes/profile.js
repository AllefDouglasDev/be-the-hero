const express = require('express');
const routes = express.Router();

const ProfileController = require('../controllers/ProfileController');

const { ProfileValidator } = require('../validators');

routes.get('/', ProfileValidator, ProfileController.index);

module.exports = routes;
