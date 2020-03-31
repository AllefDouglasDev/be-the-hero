const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(PORT, () => console.log('http://localhost:' + PORT));
