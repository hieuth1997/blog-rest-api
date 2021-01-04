const express = require('express');
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3600;
console.log(process.env.NODE_ENV);

import databaseService from './database/database.service';
import cors from 'cors';
import path from 'path'; // inside nodejs
import bodyParser from 'body-parser';
import router from './router';
import customLogger from './commons/helpers/customLogger';
import { errorCatcher, errorHandler } from './commons/middlewares/error';
const app = express();
databaseService.connect();
//Cross-Origin Resource Sharing
app.use(cors());
//logger.
app.use(customLogger);
//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(errorCatcher, errorHandler);
app.use('/api', router);
app.listen(port, () => {
  console.log(`server is running at  http://localhost:${port}`);
});
