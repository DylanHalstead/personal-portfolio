const { Project, Tag, ProjectTag } = require('../models/index');

exports.getAllProjects = async (req, res) => {
  try {
    const projectsTags = await ProjectTag.findAll();
    const projectIds = Array.from(
      new Set(projectsTags.map((projectTag) => projectTag.project_id))
    );
    const detailedProjectsIds = projectIds.map((projectId) => {
      let projectTags = projectsTags.filter(
        (projectTag) => projectTag.project_id === projectId
      );
      projectTags = projectTags.sort((a, b) => b.starred - a.starred);
      const tagIds = projectTags.map((projectTag) => projectTag.tag_id);
      return {
        projectId,
        tagIds,
      };
    });
    const projects = await Project.findAll();
    const tags = await Tag.findAll();
    let detailedProjects = detailedProjectsIds.map((project) => {
      return {
        ...projects.find((p) => p.id === project.projectId).dataValues,
        tags: project.tagIds.map(
          (tagId) => tags.find((tag) => tag.id === tagId).dataValues
        ),
      };
    });
    detailedProjects = detailedProjects.sort((a, b) => b.starred - a.starred);
    res.status(200).json(detailedProjects);
  } catch (error) {
    console.error('An error occurred while fetching projects.', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching projects.' });
  }
};
