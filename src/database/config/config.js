require('dotenv').config();

const config = {
	dialect:  'postgres',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
};

module.exports = config;