const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tag = sequelize.define('tags', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  inner_svg: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Tag;
