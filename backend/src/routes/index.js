const express = require('express');
const routes = express.Router();

const incidentRoutes = require('./incident');
const ongRoutes = require('./ong');
const profileRoutes = require('./profile');
const sessionRoutes = require('./session');

routes.use('/incidents', incidentRoutes);
routes.use('/ongs', ongRoutes);
routes.use('/profile', profileRoutes);
routes.use('/sessions', sessionRoutes);

module.exports = routes;
