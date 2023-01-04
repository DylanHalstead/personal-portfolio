const express = require('express');
const router = express.Router();
const projects = require('../../data/projects');

// Get all projects
router.get('/', (req, res) => {res.json(projects);});

// Grab a specific project
router.get('/:id', (req, res) => {
  res.json(projects.filter( (project) => {
    return project.id == req.params.id
  }))
});

module.exports = router;