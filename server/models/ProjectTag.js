const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Project = require('./Project');
const Tag = require('./Tag');

const ProjectTag = sequelize.define('project_tags', {
  project_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Project,
      key: 'id',
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag,
      key: 'id',
    },
  },
  starred: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
});

module.exports = ProjectTag;
