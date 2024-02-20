const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');

router.get('/all', projectController.getProjects);
router.get('/details/:projectId', projectController.getProject);
router.post('/add', projectController.addProject);
router.delete('/delete', projectController.deleteProject);
router.patch('/edit', projectController.editProject);

module.exports = router;