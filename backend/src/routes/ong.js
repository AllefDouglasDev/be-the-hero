const express = require('express');
const routes = express.Router();

const OngController = require('../controllers/OngController');

const { OngCreateValidator } = require('../validators');

routes.get('/', OngController.index);
routes.post('/', OngCreateValidator, OngController.create);

module.exports = routes;
