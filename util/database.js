const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'Yeshua777*', {
	dialect: 'mysql',
	host: 'localhost'
});

module.exports = sequelize;
