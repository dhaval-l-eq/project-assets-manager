const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   primaryUrl: String,
   figma: String,
   githubRepo: String,
   additionalDetails: [
      {
         title: String,
         description: String
      }
   ]
})

module.exports = model('Project', projectSchema);