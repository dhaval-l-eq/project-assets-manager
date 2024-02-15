const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');

router.get('/all', projectController.getProjects);

module.exports = router;