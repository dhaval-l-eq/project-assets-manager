exports.getProjects = async (req, res) => {
   res.status(200).json([
      {
         id: (Math.random() * 1000).toString().replace('.', ''),
         title: 'Restaurant SM',
         primaryUrl: 'www.my-project.com',
         figma: 'figma.com',
         githubRepo: 'github.com',
         additional: [
            { name: 'Google', url: 'google.com' },
            { name: 'Facebook', url: 'facebook.com' },
            { name: 'Facebook', url: 'facebook.com' },
         ],
      },
      {
         id: (Math.random() * 1000).toString().replace('.', ''),
         title: 'Artizan',
         primaryUrl: 'www.artizan.com',
         figma: 'figma.com',
         githubRepo: 'github.com',
         additional: [
            { name: 'Google', url: 'google.com' },
            { name: 'Facebook', url: 'facebook.com' },
         ],
      },
   ]);
};
