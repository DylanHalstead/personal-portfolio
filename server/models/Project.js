const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define('projects', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  img_url: DataTypes.STRING,
  deployment_url: DataTypes.STRING,
  github_url: DataTypes.STRING,
  starred: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

module.exports = Project;
