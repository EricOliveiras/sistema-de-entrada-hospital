const { Sequelize } = require('sequelize');

const config = require('./config/config');
const usuarioModel = require('./models/usuario');

const connection =  new Sequelize(config);

try {
	usuarioModel.init(connection);
	console.log('Conexão com o banco de dados estabelecida.');
} catch (e) {
	console.error(e);
};

module.exports = connection;