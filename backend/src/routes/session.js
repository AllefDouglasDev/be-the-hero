const express = require('express');
const routes = express.Router();

const SessionController = require('../controllers/SesstionController');

const { LoginValidator } = require('../validators');

routes.post('/', LoginValidator, SessionController.create);

module.exports = routes;
