const express = require('express');
const router = express.Router();
const projects = require('../../data/projectsDB');

// Get all unique tags
router.get('/', (req, res) => {
  let tags = []
  projects.forEach( project => {
    project.tags.forEach( tag => {
      let foundTag = true
      tags.forEach( definedTag => {
        if(tag.name == definedTag.name){
          foundTag = false
        }
      });
      if(foundTag){
        tags.push(tag)
      }
    });
  });

  res.json(tags);
});

module.exports = router;