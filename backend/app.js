const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const projectRoutes = require('./routes/project');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/project', projectRoutes);

app.listen(8000, () => {
   console.log('App running on port 8000');
});