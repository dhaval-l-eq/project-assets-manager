const Sequelize = require('sequelize');
const db = new Sequelize('project-assets-manager', 'root', null, {
   dialect: 'mysql',
   host: 'localhost'
})

module.exports = db;