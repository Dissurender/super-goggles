const express = require('express');
const App = express();
const morgan = require('morgan');
const helmet = require('helmet');
const router = require('./routes/index.js')
const { prisma } = require('../db/index.js');
prisma

App.use(helmet());
App.use(morgan('dev'));
App.use(express.json());

App.use('/', router);

const port = process.env.PORT || 8000;
App.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
