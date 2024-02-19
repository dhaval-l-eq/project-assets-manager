const Sequelize = require('sequelize');
const db = require('../helpers/database');

const Project = db.define('project', {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   title: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   primaryUrl: {
      type: Sequelize.STRING,
      allowNull: false,
   },
   figma: Sequelize.STRING,
   githubRepo: Sequelize.STRING,
   additional1: Sequelize.STRING,
   additional2: Sequelize.STRING,
   additional3: Sequelize.STRING,
});

module.exports = Project;