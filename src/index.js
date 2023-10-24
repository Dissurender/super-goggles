import express from 'express';
const App = express();
import morgan from 'morgan';
import helmet from 'helmet';
import router from './routes/index.js';
import { prisma } from '../db/index.js';
prisma;

App.use(helmet());
App.use(morgan('dev'));
App.use(express.json());
App.use(express.static('docs'))

App.use('/', router);

const port = process.env.PORT || 8000;
App.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
