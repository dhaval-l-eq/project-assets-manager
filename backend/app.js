const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectRoutes = require('./routes/project');
const mongoose = require('mongoose');
const { DB_URL } = require('./utils/config');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/project', projectRoutes);

mongoose
   .connect(DB_URL)
   .then(() => {
      app.listen(8000, () => {
         console.log('Server running on port 8000');
      });
   })
   .catch(err => console.log(err));
