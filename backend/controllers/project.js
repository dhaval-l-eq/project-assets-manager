const Project = require('../models/project');

exports.getProjects = async (req, res) => {
   const projects = await Project.fetchAll();
   res.status(200).json(projects);
};

exports.getProject = async (req, res) => {
   const { projectId } = req.params;
   const project = await Project.findById(projectId);
   res.status(200).json(project);
};

exports.addProject = async (req, res) => {
   const { projectTitle, url, figma, github, additional1, additional2, additional3 } = req.body;

   const project = new Project(
      projectTitle,
      url,
      figma,
      github,
      additional1,
      additional2,
      additional3
   );
   const resProject = await project.save();
   res.status(200).json({
      status: 'Success!',
      message: 'Project added successfully!',
      data: resProject,
   });
};

exports.editProject = async (req, res) => {
   const { id } = req.query;
   const { projectTitle, url, figma, github, additional1, additional2, additional3 } = req.body;
   const project = new Project(
      projectTitle,
      url,
      figma,
      github,
      additional1,
      additional2,
      additional3
   );
   const resProject = await project.save(id);
   res.status(200).json({
      status: 'Success!',
      message: 'Project updated successfully!',
      data: resProject,
   });
};

exports.deleteProject = async (req, res) => {
   const projectId = req.query.id;
   await Project.deleteById(projectId);
   res.status(200).json({ status: 'Success!', message: 'Project deleted successfully!' });
};
