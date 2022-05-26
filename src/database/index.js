const { Sequelize } = require('sequelize');

const config = require('./config/config');
const usuarioModel = require('./models/Usuario');
const entradaModel = require('./models/Entrada');

// Cria a conexão com o banco de dados
const connection =  new Sequelize(config);

try {
	usuarioModel.init(connection);
	entradaModel.init(connection);
	console.log('Conexão com o banco de dados estabelecida.');
} catch (e) {
	console.error(e);
};

module.exports = connection;