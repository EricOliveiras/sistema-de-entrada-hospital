require('dotenv').config();

const config = {
	dialect:  'postgres',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT,
	'define': {
		'underscored': true,
		'timestamps': true,
	}
};

module.exports = config;