const { Tag } = require('../models/index');

exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (error) {
    console.error('An error occurred while fetching projects.', error);
    res.status(500).json({ error: 'An error occurred while fetching tags.' });
  }
};
