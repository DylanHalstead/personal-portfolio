const Project = require('./Project');
const Tag = require('./Tag');
const ProjectTag = require('./ProjectTag');

Tag.belongsToMany(Project, {
  through: ProjectTag,
  foreignKey: 'project_id',
  uniqueKey: false,
});

Project.belongsToMany(Tag, {
  through: ProjectTag,
  foreignKey: 'tag_id',
  uniqueKey: false,
});

module.exports = {
  Project,
  Tag,
  ProjectTag,
};
