const express = require('express');

const usuarioRouter = require('./routers/usuarioRouter');
const entradaRouter = require('./routers/entradaRouter');
const connection = require('./database/');

const app = express();

app.use(express.json());
app.use(usuarioRouter, entradaRouter);

module.exports = app;