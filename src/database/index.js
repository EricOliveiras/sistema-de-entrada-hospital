const { Sequelize } = require('sequelize');

const config = require('./config/config');

const connection =  new Sequelize(config);

try {
	connection.authenticate();
	connection.sync();
	console.log('Conexão com o banco de dados estabelecida.');
} catch (e) {
	console.error(e);
};

module.exports = connection;