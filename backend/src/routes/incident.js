const express = require('express');
const routes = express.Router();

const IncidentController = require('../controllers/IncidentController');

const {
  ListIncidentsValidator,
  NewIncidentValidator,
  ListIncidentByOngValidator,
} = require('../validators');

routes.get('/', ListIncidentsValidator, IncidentController.index);
routes.post('/', NewIncidentValidator, IncidentController.create);
routes.delete('/:id', ListIncidentByOngValidator, IncidentController.delete);

module.exports = routes;
