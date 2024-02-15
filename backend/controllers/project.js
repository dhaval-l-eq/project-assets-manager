exports.getProjects = async (req,res) => {
   res.status(200).json({
      primaryUrl: 'www.my-project.com',
      figma: 'figma.com',
      githubRepo: 'github.com',
      additional: ['google.com','facebook.com']
   })
}