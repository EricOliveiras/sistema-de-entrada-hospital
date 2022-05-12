const express = require('express');

const routers = require('./routers/routers');
const connection = require('./database/');

const app = express();

app.use(express.json());
app.use(routers);

module.exports = app;