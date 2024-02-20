const Project = require('../models/project');

exports.getProjects = async (req, res) => {
   const projects = await Project.findAll();
   res.status(200).json(projects);
};

exports.getProject = async (req,res) => {
   const {projectId} = req.params;
   const project = await Project.findByPk(projectId);
   res.status(200).json(project);
}

exports.addProject = async (req, res) => {
   const { projectTitle, url, figma, github, additional1, additional2, additional3 } = req.body;
   const newProject = {
      title: projectTitle,
      primaryUrl: url,
      figma: figma,
      githubRepo: github,
      additional1: additional1,
      additional2: additional2,
      additional3: additional3,
   }
   const project = await Project.create(newProject);
   res.status(200).json({ status: 'Success!', message: 'Project added successfully!', data: project });
};

exports.editProject = async (req,res) => {
   const {id} = req.query;
   const { projectTitle, url, figma, github, additional1, additional2, additional3 } = req.body;
   const project = await Project.findByPk(id);
   project.title = projectTitle;
   project.primaryUrl = url;
   project.figma = figma;
   project.githubRepo = github;
   project.additional1 = additional1;
   project.additional2 = additional2;
   project.additional3 = additional3;
   await project.save();
   res.status(200).json({status: 'Success!', message: 'Project updated successfully!', data: project});
}

exports.deleteProject = async (req,res) => {
   const projectId = req.query.id;
   const project = await Project.findByPk(projectId)
   await project.destroy();
   res.status(200).json({ status: 'Success!', message: 'Project deleted successfully!'})
}