const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Yeshua777*', {
	dialect: 'mysql',
	host: 'localhost'
});

module.exports = sequelize;
