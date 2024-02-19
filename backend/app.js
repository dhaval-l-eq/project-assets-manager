const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectRoutes = require('./routes/project');
const db = require('./helpers/database');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/project', projectRoutes);

db.sync().then(() => {
   app.listen(8000, () => {
      console.log('Server running on port 8000');
   });
})



